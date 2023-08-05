import sys
import unittest
import numpy as np
import pandas as pd

from sklearn_pandas import DataFrameMapper

from azureml.automl.core.constants import FeatureType
import azureml.automl.runtime.featurization as pp
from azureml.automl.runtime.featurizer.transformer import GenericFeaturizers
from azureml.automl.runtime.featurization import GenericTransformer
from azureml.automl.runtime._engineered_feature_names import _GenerateEngineeredFeatureNames
from azureml.automl.runtime.featurization.transformer_and_mapper import TransformerAndMapper
from azureml.automl.runtime.column_purpose_detection.columnpurpose_detector import ColumnPurposeDetector


class MiniBatchKMeansTransformerTests(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(MiniBatchKMeansTransformerTests, self).__init__(*args, **kwargs)
        self.engineered_feature_name_generator = _GenerateEngineeredFeatureNames()

    @unittest.skip("minibatch not enabled")
    def test_minibatchkmeans(self):
        transformer = pp.DataTransformer("classification")
        d = {'col1': [1, 2, 3, 4, 5, 6, 7, 8, 9],
             'col2': [11, 12, 13, 14, 15, 16, 17, 18, 19]}
        df = pd.DataFrame(data=d)
        features = transformer.fit_transform(df)
        assert(features is not None)
        # assert no of features = no of columns + number of clusters (default 8) in cluster dist
        assert(features.shape[1] == 10)
        feature_names = transformer.get_engineered_feature_names()
        assert(feature_names[0] == 'col1_MeanImputer')
        assert(feature_names[1] == 'col2_MeanImputer')
        for i in range(2, 10):
            # Test index of the engineered feature names along with the prefix
            assert(
                feature_names[i] == 'MiniBatchKMeans_8:col1:col2_MeanImputer_MiniBatchKMeans_' + str(i - 2))

    def test_transformed_shape_for_minibatch(self):
        transformer = GenericFeaturizers.minibatchkmeans_featurizer()
        d = {'col1': [1, 2, 3, 4, 5, 6, 7, 8, 9],
             'col2': [11, 12, 13, 14, 15, 16, 17, 18, 19]}
        df = pd.DataFrame(data=d)
        features = transformer.fit_transform(df)
        assert(features is not None)
        # assert no of features = number of clusters (default 8) in cluster dist
        assert(features.shape[1] == 8)
        assert(features.shape[0] == 9)

    def test_transformed_value_for_minibatch(self):
        transformer = GenericFeaturizers.minibatchkmeans_featurizer(
            n_clusters=2, random_state=1)
        d = {'col1': [0, 1],
             'col2': [0, 1]}
        expected_output_array = np.array([(0, 1.41421356),
                                          (1.41421356, 0)])

        df = pd.DataFrame(data=d)
        output_array = transformer.fit_transform(df)
        assert(output_array is not None)
        # assert no of features = number of clusters
        assert(output_array.shape[1] == 2)
        self.assertTrue(np.allclose(expected_output_array, output_array))

    def test_minibatchkmeans_engineered_feature_names(self):
        transformer = pp.DataTransformer("classification")
        transformer._generic_transformer = GenericTransformer()
        d = {'col1': [1, 2, 3, 4, 5, 6, 7, 8, 9],
             'col2': [11, 12, 13, 14, 15, 16, 17, 18, 19]}
        df = pd.DataFrame(data=d)
        column_groups = {}
        column_groups.setdefault(
            FeatureType.Numeric, ["col1", "col2"])
        stats_and_column_purposes = ColumnPurposeDetector.get_raw_stats_and_column_purposes(
            df)
        transforms_list = transformer._get_transforms(
            df, stats_and_column_purposes)
        transforms_list.extend(transformer._generic_transformer.get_minibatchkmeans_transforms(
            column_groups, transformer._engineered_feature_names_class))

        transformer_mapper_list = [TransformerAndMapper(transformers=transformer[1],
                                                        mapper=DataFrameMapper([transformer],
                                                                               input_df=True, sparse=True))
                                   for transformer in transforms_list]
        transformer.transformer_and_mapper_list = transformer_mapper_list
        features = transformer.fit_transform(df)

        assert(features is not None)
        # assert no of features = no of columns + number of clusters (default 8) in cluster dist
        assert(features.shape[1] == 10)
        feature_names = transformer.get_engineered_feature_names()
        assert(feature_names[0] == 'col1_MeanImputer')
        assert(feature_names[1] == 'col2_MeanImputer')
        for i in range(2, 10):
            # Test index of the engineered feature names along with the prefix
            assert(
                feature_names[i] == 'MiniBatchKMeans_8:col1:col2_MeanImputer_MiniBatchKMeans_' + str(i - 2))

    def test_minibatchkmeans_raw_feature_featurization_summary(self):
        transformer = pp.DataTransformer("classification")
        transformer._generic_transformer = GenericTransformer()
        d = {'col1': [1, 2, 3, 4, 5, 6, 7, 8, 9],
             'col2': [11, 12, 13, 14, 15, 16, 17, 18, 19]}
        df = pd.DataFrame(data=d)
        column_groups = {}
        column_groups.setdefault(
            FeatureType.Numeric, ["col1", "col2"])
        stats_and_column_purposes = ColumnPurposeDetector.get_raw_stats_and_column_purposes(
            df)
        transforms_list = transformer._get_transforms(
            df, stats_and_column_purposes)
        transforms_list.extend(transformer._generic_transformer.get_minibatchkmeans_transforms(
            column_groups, transformer._engineered_feature_names_class))

        transformer_mapper_list = [TransformerAndMapper(transformers=transformer[1],
                                                        mapper=DataFrameMapper([transformer],
                                                                               input_df=True, sparse=True))
                                   for transformer in transforms_list]
        transformer.transformer_and_mapper_list = transformer_mapper_list
        features = transformer.fit_transform(df)

        assert(features is not None)
        # assert no of features = no of columns + number of clusters (default 8) in cluster dist
        assert(features.shape[1] == 10)
        feature_names = transformer.get_engineered_feature_names()
        assert(feature_names[0] == 'col1_MeanImputer')
        assert(feature_names[1] == 'col2_MeanImputer')
        for i in range(2, 10):
            # Test index of the engineered feature names along with the prefix
            assert(
                feature_names[i] == 'MiniBatchKMeans_8:col1:col2_MeanImputer_MiniBatchKMeans_' + str(i - 2))

        # Get the featurization summary for the raw features
        actual_raw_feature_featurization_summary = transformer.get_featurization_summary()
        assert(len(actual_raw_feature_featurization_summary) > 0)
        minibatch_object = next(
            item for item in actual_raw_feature_featurization_summary if
            item["RawFeatureName"] == "MiniBatchKMeans_8:col1:col2")
        assert(minibatch_object['EngineeredFeatureCount'] == 8)
        assert(minibatch_object['TypeDetected'] == 'Numeric')
        assert('MeanImputer-MaxAbsScaler-MiniBatchKMeans' in minibatch_object['Transformations'])


if __name__ == "__main__":
    unittest.main()
