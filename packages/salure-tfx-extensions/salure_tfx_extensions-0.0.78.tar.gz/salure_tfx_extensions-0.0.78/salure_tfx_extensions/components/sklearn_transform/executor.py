import os
import importlib.machinery, importlib.util
from types import ModuleType
import absl
import dill
import base64
from typing import Any, Dict, List, Text
import tensorflow as tf
from tfx import types
from tfx.components.base import base_executor
from tfx.types import artifact_utils
from tfx.utils import io_utils
from tfx.utils import import_utils
from tfx_bsl.tfxio import tf_example_record
import tensorflow_transform.beam as tft_beam
from salure_tfx_extensions.utils import example_parsing_utils
from salure_tfx_extensions.utils import sklearn_utils
import apache_beam as beam
from apache_beam import pvalue
# import pandas as pd
import pyarrow as pa
from sklearn.pipeline import Pipeline
from google.protobuf import json_format
# from pandas_tfrecords import to_tfrecords


EXAMPLES_KEY = 'examples'
SCHEMA_KEY = 'schema'
# MODULE_FILE_KEY = 'module_file'
PREPROCESSOR_PIPELINE_NAME_KEY = 'preprocessor_pipeline_name'
PREPROCESSOR_PICKLE_KEY = 'preprocessor_pickle'
TRANSFORMED_EXAMPLES_KEY = 'transformed_examples'
TRANSFORM_PIPELINE_KEY = 'transform_pipeline'

_TELEMETRY_DESCRIPTORS = ['SKLearnTransform']

DEFAULT_PIPELINE_NAME = 'pipeline'
PIPELINE_FILE_NAME = 'pipeline.pickle'


class Executor(base_executor.BaseExecutor):
    """Executor for the SKLearnTransform Component
    Reads in Examples, and extracts a Pipeline object from a module file.
    It fits the pipeline, and writes the fit pipeline and the transformed examples to file"""

    def Do(self,
           input_dict: Dict[Text, List[types.Artifact]],
           output_dict: Dict[Text, List[types.Artifact]],
           exec_properties: Dict[Text, Any]) -> None:
        """
        Args:
          input_dict:
            - examples: Tensorflow Examples
          exec_properties:
            - preprocessor_pickle: A pickle string of the preprocessor
            - preprocessor_pipeline_name: The name of the pipeline object in the specified module file
          output_dict:
            - transformed_examples: The transformed Tensorflow Examples
            - transform_pipeline: A trained SKLearn Pipeline
        """

        self._log_startup(input_dict, output_dict, exec_properties)

        # dill_recurse_setting = dill.settings['recurse']
        # dill.settings['recurse'] = True

        if not (len(input_dict[EXAMPLES_KEY]) == 1):
            raise ValueError('input_dict[{}] should only contain one artifact'.format(EXAMPLES_KEY))
        # if bool(exec_properties['preprocessor_pickle']) == bool(exec_properties['module_file']):
        #     raise ValueError('Could not determine which preprocessor to use, both or neither of the module file and a '
        #                      'preprocessor pickle were provided')

        examples_artifact = input_dict[EXAMPLES_KEY][0]
        examples_splits = artifact_utils.decode_split_names(examples_artifact.split_names)

        train_and_eval_split = ('train' in examples_splits and 'eval' in examples_splits)
        single_split = ('single_split' in examples_artifact.uri)

        if train_and_eval_split == single_split:
            raise ValueError('Couldn\'t determine which input split to fit the pipeline on. '
                             'Exactly one split between \'train\' and \'single_split\' should be specified.')

        train_split = 'train' if train_and_eval_split else 'single_split'

        train_uri = os.path.join(examples_artifact.uri, train_split)
        absl.logging.info('train_uri: {}'.format(train_uri))

        # Load in the schema
        schema_path = io_utils.get_only_uri_in_dir(
            artifact_utils.get_single_uri(input_dict[SCHEMA_KEY]))
        schema = io_utils.SchemaReader().read(schema_path)
        schema_dict = json_format.MessageToDict(schema, preserving_proto_field_name=True)
        absl.logging.info('schema: {}'.format(schema))
        absl.logging.info('schema_dict: {}'.format(schema_dict))

        # This way a pickle bytestring could be sent over json
        sklearn_pipeline = dill.loads(base64.decodebytes(exec_properties['preprocessor_pickle'].encode('utf-8')))

        absl.logging.info('pipeline: {}'.format(sklearn_pipeline))

        with self._make_beam_pipeline() as pipeline:
            with tft_beam.Context(
                    use_deep_copy_optimization=True):
                absl.logging.info('Loading Training Examples')
                train_input_uri = io_utils.all_files_pattern(train_uri)
                preprocessor_output_uri = artifact_utils.get_single_uri(output_dict[TRANSFORM_PIPELINE_KEY])

                input_tfxio = tf_example_record.TFExampleRecord(
                    file_pattern=train_input_uri,
                    telemetry_descriptors=_TELEMETRY_DESCRIPTORS,
                    schema=schema
                )

                absl.logging.info(input_dict)
                absl.logging.info(output_dict)
                absl.logging.info('uri: {}'.format(train_uri))
                absl.logging.info('input_uri: {}'.format(train_input_uri))
                absl.logging.info('preprocessor_output_uri: {}'.format(preprocessor_output_uri))

                # training_data_recordbatch = pipeline | 'TFXIORead Train Files' >> input_tfxio.BeamSource()
                # training_data_recordbatch | 'Logging data from Train Files' >> beam.Map(absl.logging.info)
                #
                # training_data = (
                #     training_data_recordbatch
                #     | 'Aggregate RecordBatches' >> beam.CombineGlobally(
                #         beam.combiners.ToListCombineFn())
                #     # Work around non-picklability for pa.Table.from_batches
                #     | 'To Pyarrow Table' >> beam.Map(lambda x: pa.Table.from_batches(x))
                #     | 'To Pandas DataFrame' >> beam.Map(lambda x: x.to_pandas()))

                training_data = pipeline | 'Read Train Data' >> sklearn_utils.ReadTFRecordToPandas(
                    file_pattern=train_input_uri,
                    schema=schema,
                    split_name='Train',  # Is just for naming the beam operations
                    telemetry_descriptors=_TELEMETRY_DESCRIPTORS
                )

                training_data | 'Logging Pandas DataFrame' >> beam.Map(
                    lambda x: absl.logging.info('dataframe: {}'.format(x)))
                training_data | 'Log DataFrame head' >> beam.Map(lambda x: print(x.head().to_string()))

                # fit_preprocessor = training_data | 'Fit Preprocessing Pipeline' >> beam.ParDo(
                #     FitPreprocessingPipeline(), beam.pvalue.AsSingleton(sklearn_pipeline))

                preprocessor_pcoll = pipeline | beam.Create([sklearn_pipeline])

                def fit_sklearn_preprocessor(df, sklearn_preprocessor_pipeline):
                    sklearn_preprocessor_pipeline.fit(df)
                    yield pvalue.TaggedOutput('fit_preprocessor', sklearn_preprocessor_pipeline)
                    yield pvalue.TaggedOutput('transformed_df', sklearn_preprocessor_pipeline.transform(df))

                results = training_data | 'Fit Preprocessing Pipeline' >> beam.FlatMap(
                    fit_sklearn_preprocessor,
                    pvalue.AsSingleton(preprocessor_pcoll)).with_outputs()

                fit_preprocessor = results.fit_preprocessor
                transformed_df = results.transformed_df

                fit_preprocessor | 'Logging Fit Preprocessor' >> beam.Map(
                    lambda x: absl.logging.info('fit_preprocessor: {}'.format(x)))

                transformed_df | 'Logging Transformed DF head' >> beam.Map(
                    lambda x: absl.logging.info('transformed_df head: {}'.format(x)))

                # (fit_preprocessor
                #  | 'Pickle fit_preprocessor' >> beam.FlatMap(dill.dumps)
                #  | 'Write fit_preprocessor to file' >> beam.io.WriteToText(
                #         os.path.join(
                #             preprocessor_output_uri,
                #             PIPELINE_FILE_NAME),
                #         num_shards=1,
                #         shard_name_template=''))

                fit_preprocessor | sklearn_utils.WriteSKLearnModelToFile(
                    os.path.join(preprocessor_output_uri, PIPELINE_FILE_NAME))

                # TODO: convert transformed DF to PColl of dicts, use dict_to_example, Write to tfrecord
                transformed_examples = (
                    transformed_df
                    | 'Transformed DataFrame to dicts' >> beam.FlatMap(lambda x: x.to_dict('records'))
                    | 'Transformed Dicts to Examples' >> beam.Map(example_parsing_utils.dict_to_example))

                transformed_examples | 'Write Transformed Examples' >> example_parsing_utils.WriteSplit(
                    os.path.join(output_dict[TRANSFORMED_EXAMPLES_KEY][0].uri, train_split))

                # TODO: if not single_split: read, transform and write test data.
                if train_and_eval_split:
                    test_split = 'eval'
                    test_uri = os.path.join(examples_artifact.uri, test_split)
                    test_input_uri = io_utils.all_files_pattern(test_uri)

                    test_tfxio = tf_example_record.TFExampleRecord(
                        file_pattern=test_input_uri,
                        telemetry_descriptors=_TELEMETRY_DESCRIPTORS,
                        schema=schema
                    )

                    test_data_recordbatch = pipeline | 'TFXIORead Test Files' >> test_tfxio.BeamSource()

                    test_data = (
                            test_data_recordbatch
                            | 'Aggregate Test RecordBatches' >> beam.CombineGlobally(
                                beam.combiners.ToListCombineFn())
                            # Work around non-picklability for pa.Table.from_batches
                            | 'Test To Pyarrow Table' >> beam.Map(lambda x: pa.Table.from_batches(x))
                            | 'Test To Pandas DataFrame' >> beam.Map(lambda x: x.to_pandas()))

                    def transform_data(df, sklearn_preprocessor_pipeline):
                        return sklearn_preprocessor_pipeline.transform(df)

                    transformed_test_data = test_data | 'Transform Test Data' >> beam.Map(
                        transform_data,
                        pvalue.AsSingleton(fit_preprocessor))

                    transformed_test_examples = (
                        transformed_test_data
                        | 'Transformed Test DataFrame to dicts' >> beam.FlatMap(lambda x: x.to_dict('records'))
                        | 'Transformed Test Dicts to Examples' >> beam.Map(example_parsing_utils.dict_to_example))

                    transformed_test_examples | example_parsing_utils.WriteSplit(
                        os.path.join(output_dict[TRANSFORMED_EXAMPLES_KEY][0].uri, test_split))


# def import_pipeline_from_source(source_path: Text, pipeline_name: Text) -> Pipeline:
#     """Imports an SKLearn Pipeline object from a local source file"""
#
#     try:
#         loader = importlib.machinery.SourceFileLoader(
#             fullname='user_module',
#             path=source_path,
#         )
#         user_module = ModuleType(loader.name)
#         loader.exec_module(user_module)
#         return getattr(user_module, pipeline_name)
#     except IOError:
#         raise ImportError('{} in {} not found in import_func_from_source()'.format(
#             pipeline_name, source_path))


# class SKLearnPipeline(object):
#     """This exists to appease the python pickling Gods"""
#
#     def __init__(self, pipeline):
#         self._pipeline = pipeline
#
#     def fit(self, dataframe):
#         self._pipeline.fit(dataframe)
#
#     @property
#     def pipeline(self):
#         return self._pipeline

#
# class FitPreprocessingPipeline(beam.PTransform):
#     def __init__(self, pipeline):
#         self.pipeline = pipeline  # SKLearnPipeline object
#         super(FitPreprocessingPipeline, self).__init__()
#
#     # def process(self, matrix, pipeline, *args, **kwargs):
#     #     pipeline.fit(matrix)
#     #     return pipeline
#
#     def expand(self, dataframe):
#         """Fits an SKLearn Pipeline object
#
#         Returns:
#             A fit SKLearn Pipeline
#         """
#
#         self.pipeline.fit(dataframe)
#         return [self.pipeline]
#
#
# class TransformUsingPipeline(beam.DoFn):
#     """Returns preprocessed inputs"""
#     # TODO
#
#     def __init__(self, pipeline: Pipeline):
#         self.pipeline = pipeline
#         super(TransformUsingPipeline, self).__init__()
#
#     def process(self, element, *args, **kwargs):
#         pass

