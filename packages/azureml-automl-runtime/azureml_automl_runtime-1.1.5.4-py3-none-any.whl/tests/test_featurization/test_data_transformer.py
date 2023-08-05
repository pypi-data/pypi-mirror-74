from typing import Any
import copy
import logging
import unittest
import pickle
import sys
import itertools
from unittest.mock import patch

from ddt import ddt, file_data
from sklearn.pipeline import make_pipeline
import pandas as pd
import numpy as np

from azureml.automl.core.constants import FeatureType, SupportedTransformers
from azureml.automl.core._experiment_observer import ExperimentObserver
from azureml.automl.runtime import preprocess as pp
from azureml.automl.runtime._engineered_feature_names import _FeatureTransformers
from azureml.automl.runtime.column_purpose_detection import ColumnPurposeDetector
from azureml.automl.core.constants import FeatureType as _FeatureType
from azureml.automl.core.featurization import FeaturizationConfig
from azureml.automl.runtime.featurizer.transformer import TextFeaturizers, CategoricalFeaturizers
from azureml.automl.runtime.featurizer.transformer.data import AbstractWordEmbeddingsProvider
from azureml.automl.core.shared.exceptions import DataException, FitException, TransformException

from ..utilities import MockAutoMLFeatureConfigManager, assert_automl_exception_fields
from .mock_identity_transformer import MockIdentityTransformer


class MockWordEmbeddingsProvider(AbstractWordEmbeddingsProvider):
    """Mock word embeddings provider for test usage."""

    def _get_model(self) -> Any:
        self.initialize()
        return self._model

    def _is_lower(self):
        pass

    def __init__(self, vector_size=10):
        """Mock word embeddings provider."""
        self._vector_size = vector_size
        super().__init__("")

    def _get_vector_size(self):
        """Gets vector size."""
        return self._vector_size

    def initialize(self) -> None:
        """
        Overridden method of the base class.

        :return: None
        """
        self._model = {}
        for i in range(self.vector_size):
            self._model[str(i)] = np.random.rand(self.vector_size)


class UnserializableLogger(logging.Logger):
    def __dict__(self):
        raise AssertionError('Object should not have been serialized.')

    def __getstate__(self):
        raise AssertionError('Object should not have been serialized.')

    def __setstate__(self, state):
        raise AssertionError('Object should not have been serialized.')

    def log(self, lvl, msg, *args, **kwargs):
        pass

    def write(self, msg):
        pass


class DataTransformerTests(unittest.TestCase):

    def __init__(self, *args, **kwargs):
        super(DataTransformerTests, self).__init__(*args, **kwargs)
        logger = UnserializableLogger('')
        observer = ExperimentObserver(file_handler=logger)
        self.tr = pp.DataTransformer("classification", logger=logger, observer=observer)

    def test_transform_without_learn_and_fit(self):
        """
        Test that calling transform function on data transformer without
        executing learning method should result in an exception.
        """
        train_array = np.repeat(['cat', 'bear'], 100)
        train_df = pd.DataFrame(data=train_array)

        # Call to transform() should fail since learn was
        # not called
        with self.assertRaises(Exception):
            self.tr.transform(train_df)

    def test_fit_transform_with_learn_and_fit(self):
        """
        Test that calling transform function on data transformer after
        executing learning method should not result in an exception.
        """
        train_array = np.repeat(['cat', 'bear'], 100)
        train_df = pd.DataFrame(data=train_array)

        # Call to fit_transform() shouldn't fail since learn was
        # called
        self.tr.fit_transform(train_df)

        # Call to transform() shouldn't fail since learn was
        # called
        self.tr.transform(train_df)

    def test_fit_transform_with_external_sweeping(self):
        train_array = np.repeat(['cat', 'bear'], 100)
        train_df = pd.DataFrame(data=train_array)
        tr_1 = pp.DataTransformer("classification", logger=logging, observer=None)
        feature_config, columns_types_mapping, column_purposes, feature_names = tr_1.configure_featurizers(train_df)
        tr_2 = pp.DataTransformer("classification", logger=logging, observer=None)

        result1 = tr_1.fit_transform(train_df)
        result2 = tr_2.fit_transform_with_logger(train_df,
                                                 feature_config=feature_config,
                                                 columns_types_mapping=columns_types_mapping,
                                                 column_purposes=column_purposes,
                                                 engineered_feature_names=feature_names)

        assert np.array_equal(result1, result2)

    def test_fit_transform_with_learn_and_fit_with_memory_over_limit(self):
        """
        Test that calling transform function on data transformer after
        executing learning method should not result in an exception.
        """
        logger = UnserializableLogger('')
        observer = ExperimentObserver(file_handler=logger)
        tr = pp.DataTransformer("classification", logger=logger, observer=observer)
        idenitity_transformer = MockIdentityTransformer(memory_estimate=sys.maxsize)
        # print(idenitity_transformer.__class__)
        train_array = np.repeat(['cat', 'bear'], 100)
        train_df = pd.DataFrame(data=train_array)

        tr._add_test_transforms([(0, [idenitity_transformer], {'alias': '1'})])
        # Call to fit_transform() shouldn't fail since learn was
        # called
        tr.fit_transform(train_df)

        # Call to transform() shouldn't fail since learn was
        # called
        transformerd_data = tr.transform(train_df)
        self.assertEqual(train_df.shape, transformerd_data.shape)

        self.assertFalse(idenitity_transformer.if_transform_called)

    def test_fit_transform_with_learn_and_fit_with_memory_in_limit(self):
        """
        Test that calling transform function on data transformer after
        executing learning method should not result in an exception.
        """
        logger = UnserializableLogger('')
        observer = ExperimentObserver(file_handler=logger)
        tr = pp.DataTransformer("classification", logger=logger, observer=observer)
        idenitity_transformer = MockIdentityTransformer(memory_estimate=10)
        # print(idenitity_transformer.__class__)
        train_array = np.repeat(['cat', 'bear'], 100)
        train_df = pd.DataFrame(data=train_array)

        tr._add_test_transforms([(0, [idenitity_transformer], {'alias': '1'})])
        # Call to fit_transform() shouldn't fail since learn was
        # called
        tr.fit_transform(train_df)

        # Call to transform() shouldn't fail since learn was
        # called
        transformerd_data = tr.transform(train_df)
        self.assertEqual(train_df.shape[0], transformerd_data.shape[0])
        self.assertEqual(transformerd_data.shape[1], 2)
        self.assertTrue(idenitity_transformer.if_transform_called)

    def test_categorical_train_data_and_numerical_retrained_data(self):
        """
        The data transformer has been trained with some data which looks like
        categorical but is retrained with data which looks like numerical. The
        data transformer should transform the retrained data as categorical data.
        """
        # Categorical data
        nparr = np.repeat([0, 1, 2], 100)
        df = pd.DataFrame(nparr)
        expected_shape = (nparr.shape[0], 3)

        # Transform categorical data
        transformed_data = self.tr.fit_transform(df)
        self.assertTrue(transformed_data.shape == expected_shape)

        # Craft numerical like data
        nparr = np.array([1, 2, 3, 4])
        expected_shape = (nparr.shape[0], 4)
        df = pd.DataFrame(nparr)

        # Even this numerical data should be expanded as categorical data
        transformed_data = self.tr.fit_transform(df)
        self.assertTrue(transformed_data.shape == expected_shape)

    def test_numerical_train_data_and_categorical_retrained_data(self):
        """
        The data transformer has been trained with some data which looks like
        numerical but is retrained with data which looks like categorical. The
        data transformer should transform the retrained data as numerical data.
        """
        # Numerical data
        nparr = np.repeat([0, 1, 2], 10)
        df = pd.DataFrame(nparr)
        expected_shape = (nparr.shape[0], 1)

        # Transform numerical data
        transformed_data = self.tr.fit_transform(df)
        self.assertTrue(transformed_data.shape == expected_shape)

        # Craft categorical like data
        nparr = np.repeat([1, 2, 3], 100)
        expected_shape = (nparr.shape[0], 1)

        # Even this categorical data should be treated as numerical data
        df = pd.DataFrame(nparr)
        transformed_data = self.tr.fit_transform(df)
        self.assertTrue(transformed_data.shape == expected_shape)

    def test_transformer_with_different_column_number_exception(self):
        tr = copy.deepcopy(self.tr)
        nparr = np.repeat([0, 1, 2], 10)
        df = pd.DataFrame(nparr)
        tr.fit(df)
        transformed_data = pd.DataFrame([[0, 1], [0, 1]])
        with self.assertRaises(DataException) as de:
            tr.transform(transformed_data)
        self.assertIn("The fitted data has 1 columns but the input data has 2 columns.", str(de.exception))

    def test_transformer_with_different_column_name_exception(self):
        tr = copy.deepcopy(self.tr)
        nparr = np.repeat([0, 1, 2], 10)
        df = pd.DataFrame(nparr)
        tr.fit(df)
        transformed_data = pd.DataFrame(np.repeat([0, 1, 2], 10), columns=['a'])
        with self.assertRaises(DataException) as de:
            tr.transform(transformed_data)
        self.assertIn("Input column not found in the fitted columns.", str(de.exception))

    def test_transformer_with_different_convertable_data_type(self):
        tr = copy.deepcopy(self.tr)
        nparr = np.repeat([1, 2, 3], 10)
        df = pd.DataFrame(nparr)
        tr.fit(df)
        expected_data = tr.transform(df)
        transformed_input_data = pd.DataFrame(np.repeat([1, 2, 3], 10))
        transformed_input_data[0] = transformed_input_data[0].astype(np.double)
        transformed_data = tr.transform(transformed_input_data)
        self.assertTrue(expected_data.shape == transformed_data.shape)
        self.assertTrue(tr._columns_types_mapping is not None and len(tr._columns_types_mapping) > 0)

    def test_transformer_with_different_unconvertable_data_exception(self):
        tr = copy.deepcopy(self.tr)
        nparr = np.repeat([0, 1, 2], 10)
        df = pd.DataFrame(nparr)
        tr.fit(df)
        transformed_data = pd.DataFrame(np.repeat(['a', 'b', 'c'], 10))
        with self.assertRaises(DataException) as de:
            tr.transform(transformed_data)
        self.assertIn("Error converting the input column as column does not match the fitted column type.",
                      str(de.exception))

    @patch('sklearn_pandas.dataframe_mapper.DataFrameMapper.fit')
    def test_fit_exceptions(self, fit_mock):
        fit_mock.side_effect = ValueError('Some error while fitting with potential PII')

        df = pd.DataFrame({'data': [0, 1, 2, 3]})

        with self.assertRaises(FitException) as fe:
            self.tr.fit_transform_with_logger(df)

        self.assertTrue('Failed while fitting the learned transformations' in str(fe.exception))

    @patch('sklearn_pandas.dataframe_mapper.DataFrameMapper.transform')
    def test_transform_exceptions(self, transform_mock):
        transform_mock.side_effect = ValueError('Some error while transforming with potential PII')

        train_array = np.repeat(['cat', 'bear'], 100)
        df = pd.DataFrame(data=train_array)

        with self.assertRaises(TransformException) as fe:
            self.tr.fit_transform_with_logger(df)

        assert_automl_exception_fields(
            exception=fe.exception,
            message='Failed while applying the learned transformations.',
            target='DataTransformer', reference_code='data_transformer.DataTransformer.transform', has_pii=False)


@ddt
class TransformTests(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TransformTests, self).__init__(*args, **kwargs)
        self.tr = pp.DataTransformer("classification")

    def test_numeric_with_nans(self):
        # impute numeric data
        nparr = np.zeros((3, 4))
        nparr[0, 0] = np.nan
        nparr[1, 0] = 1
        nparr[0, 1] = 1
        nparr[0, 2] = 1
        nparr[0, 3] = 1
        df = pd.DataFrame(nparr)
        expected_output = np.zeros((3, 5))
        # Since we have nan in the first row which is > 0.01% of the data
        # We will end up adding a "is imputed" column and will have that
        # bit set for the first row
        expected_output[0, 0] = 0.5
        expected_output[1, 0] = 1
        expected_output[0, 1] = 1  # for the imputation marker
        expected_output[0, 2] = 1
        expected_output[0, 3] = 1
        expected_output[0, 4] = 1

        transformed_data = self.tr.fit_transform(df)
        self.assertTrue(np.all(transformed_data == expected_output))

    def test_numeric_without_nans(self):
        # impute numeric data
        nparr = np.zeros((3, 4))
        nparr[0] = np.ones(4)
        df = pd.DataFrame(nparr)
        expected_output = np.zeros((3, 4))
        expected_output[0] = np.ones(4)

        transformed_data = self.tr.fit_transform(df)
        self.assertTrue(np.all(transformed_data == expected_output))

    def test_catints(self):
        # ints that should be categorical
        nparr = np.zeros((3000, 4), dtype=int)
        nparr[0] = np.ones(4)
        df = pd.DataFrame(nparr)
        expected_shape = (nparr.shape[0], 4)

        transformed_data = self.tr.fit_transform(df)
        self.assertTrue(transformed_data.shape == expected_shape)

    def test_high_cardinality(self):
        text = [["foo", "bar"], ["foo2", "bar2"]]
        df = pd.DataFrame(text)
        # features would be foo, bar, foo2, oo2, ar2. foo and bar would get
        # ommitted since max_df cut off is 0.95
        y = np.array([0, 1])
        with self.assertRaises(DataException):
            self.tr.fit_transform(df, y)

    def test_unichar_text(self):
        text = [["a", "b"], ["c", "d"]]
        df = pd.DataFrame(text)
        y = np.array([0, 1])
        # This is considered to be hashes because of unique cardinality
        with self.assertRaises(DataException):
            self.tr.fit_transform(df, y)

    def test_unhashabletype_in_col(self):
        # string, and nd.array type that also would throw an unhashable type exception if we didn't handle it
        df = pd.DataFrame([["a", 1], ["b", np.array(["a", "b"])], ["b", 2]], columns=['a', 'b'])
        y = np.array([0, 1, 1])
        self.tr.fit_transform(df, y)

        # # int
        df2 = pd.DataFrame([[1, 1], [2, [1, 0]], [3, 0], [3, 1], [3, 1],
                            [1, 0], [1, 1], [2, 1], [1, 0], [2, 0]], columns=['a', 'b'])

        ColumnPurposeDetector.get_raw_stats_and_column_purposes(df2)
        self.tr.fit_transform(df2)

        # int with categorical level cardinality ratio so it's treated as a categorical
        mat1 = np.array([[2, 2], [2, 3], [1, 3], [2, 0], [2, 0], [1, 3], [0, 3], [3, 3],
                         [0, 1], [2, 3], [0, 3], [1, 0], [2, 3], [0, 2], [3, 0], [2, 1],
                         [2, 3], [1, 2], [0, 2], [2, 1]])
        arr1 = np.array([3, 3, 0, 2, 1, 3, 0, 1, 0, 1, 3, 1, 3, 0, 2, 3, 1, 2, 0, 0])
        mylist = []
        for i in range(mat1.shape[0]):
            mylist.append([arr1[i], list(mat1[i, :])])
        df3 = pd.DataFrame(mylist, columns=('a', 'b'))
        self.assertEqual(ColumnPurposeDetector.get_raw_stats_and_column_purposes(df3)[1][1],
                         _FeatureType.CategoricalHash)
        self.tr.fit_transform(df3)

    def test_dates(self):
        dates = [["2018-01-02", 2.], ["2018-02-01", 3.]]
        df = pd.DataFrame(dates)
        # dates year, month, day and hour go as features.
        # Floats are scaled by min max.
        expected_output = np.array([[2.018e3, 1, 2, 1, 2, 1, 1, 0, 0, 0, 2],
                                    [2.018e3, 2, 1, 3, 32, 1, 1, 0, 0, 0, 3]])
        self.assertTrue(np.all(self.tr.fit_transform(df) == expected_output))

    def test_wrong_dates(self):
        dates = ["2018-01-02", "-"]
        series = pd.Series(dates)
        dt = pp.DateTimeFeaturesTransformer()
        mindate = pd.Timestamp.min
        expected_output = np.array([
            [2.018e3, 1, 2, 1, 2, 1, 1, 0, 0, 0],
            [
                mindate.year,
                mindate.month,
                mindate.day,
                mindate.dayofweek,
                mindate.dayofyear,
                3,
                3,
                mindate.hour,
                mindate.minute,
                mindate.second
            ]
        ])
        self.assertTrue(np.all(dt.transform(series) == expected_output))

    def test_hashes_with_one_column_strings_with_safe_conversion_to_text(self):
        # test with strings having identical lengths
        n = 10000
        s1 = pd.Series(np.random.rand(n))
        df = pd.DataFrame(s1)

        df[0] = df[0].astype(str)
        transformed_data = self.tr.fit_transform(df)
        assert (transformed_data.shape[0] == n)

    @file_data("test_data_transformer_data.json")
    def test_hashes_with_one_column_strings_with_safe_convertion_to_text_okcupid_dataset(self, X):
        df = pd.DataFrame(X)
        transformed_data = self.tr.fit_transform(df)
        assert transformed_data is not None

    def test_hashes_multiple_columns(self):
        # Test with strings that are in multiple columns
        n = 100
        sl = pd.DataFrame(np.random.rand(n, 2))
        df = pd.DataFrame(sl)

        df[0] = df[0].astype(str)
        df[1] = df[1].astype(str)
        with self.assertRaises(DataException):
            self.tr.fit_transform(df)

    def test_categoricals_with_single_category(self):
        # Test with training data
        train_set_category_array = np.repeat('bear', 100)
        train_df = pd.DataFrame(data=train_set_category_array)
        # Since there is only one category, there is no data to transform
        # so test is exception got thrown
        with self.assertRaises(DataException):
            self.tr.fit_transform(train_df)

        # Test with test data
        test_set_category_array = np.array(['bear', 'bear'])
        # Since the fit stage failed, calling transform on test data
        # should throw an exception
        with self.assertRaises(Exception):
            self.tr.transform(test_set_category_array)

    def test_categoricals_with_two_categories(self):
        # Test if training data is correctly label encoded
        train_set_category_array = np.repeat(['cat', 'bear'], 100)
        expected_train_set_label_array = np.repeat([1, 0], 100).transpose()
        expected_train_set_label_array.shape = (
            len(expected_train_set_label_array), 1)
        train_df = pd.DataFrame(data=train_set_category_array)
        single_category_transformed_data = self.tr.fit_transform(train_df)
        self.assertTrue(np.all(expected_train_set_label_array ==
                               single_category_transformed_data))

        # Test if test data is correctly label encoded
        test_set_category_array = np.array(['bear', 'cat'])
        expected_test_set_label_array = np.array([[0], [1]])
        actual_test_set_label_array = self.tr.transform(test_set_category_array)
        self.assertTrue(np.all(expected_test_set_label_array ==
                               actual_test_set_label_array))

    def test_categoricals_with_two_categories_with_Nans(self):
        # Test if training data is correctly label encoded
        train_set_category_array = np.repeat(['cat', 'bear', None], 100)
        expected_train_set_label_array = \
            np.repeat([1, 0, 0], 100).transpose()
        expected_train_set_label_array.shape = \
            (len(expected_train_set_label_array), 1)
        train_df = pd.DataFrame(data=train_set_category_array)
        single_category_transformed_data = self.tr.fit_transform(train_df)
        self.assertTrue(
            np.all(
                expected_train_set_label_array ==
                single_category_transformed_data))

        # Test if test data is correctly label encoded
        test_set_category_array = np.array(['bear', 'cat', None])
        expected_test_set_label_array = np.array([[0], [1], [0]])
        actual_test_set_label_array = \
            self.tr.transform(test_set_category_array)
        self.assertTrue(
            np.all(
                expected_test_set_label_array ==
                actual_test_set_label_array))

    def test_newsgroups_transform(self):
        from sklearn.datasets import fetch_20newsgroups
        from sklearn.model_selection import train_test_split

        removedata = ('headers', 'footers', 'quotes')
        categories = ['alt.atheism', 'talk.religion.misc', 'comp.graphics', 'sci.space']

        data_train = fetch_20newsgroups(subset='train', categories=categories, shuffle=True, random_state=42,
                                        remove=removedata)
        X_train, _, y_train, _ = train_test_split(data_train.data, data_train.target, test_size=0.33,
                                                  random_state=42)

        X_train = pd.DataFrame(data=X_train)
        features = self.tr.fit_transform(X_train, y_train)
        assert features is not None

    def test_text_no_terms_remain_trichar_transform(self):
        # Column Purpose Detection: Text
        # if raw_stats.cardinality_ratio > 0.85 and raw_stats.average_number_spaces > 1.0:
        words = ['aaaaaaabbb', 'aaaaaabbbb', 'aaaaabbbbb', 'aaaabbbbbb', 'aaabbbbbbb']
        train_text_array = np.array([' '.join(perm) for perm in itertools.permutations(words)])
        label_array = np.repeat([1, 0, 0], 120).transpose()
        label_array.shape = (len(label_array), 1)
        train_df = pd.DataFrame(data=train_text_array, columns=['col1'])
        transformed_data = self.tr.fit_transform(train_df)
        assert transformed_data is not None
        self.assertEqual(1.0, self.tr.transformer_and_mapper_list[0].transformers[1].max_df)

    def test_text_no_terms_remain_trichar_more_than_10000_transform(self):
        # Column Purpose Detection: Text
        # raw_stats.average_number_spaces > 1.0
        words = ['aaaaaaaaaabbb', 'aaaaaaaaabbbb', 'aaaaaaaabbbbb', 'aaaaaaabbbbbb',
                 'aaaaaabbbbbbb', 'aaaaabbbbbbbb', 'aaaabbbbbbbbb', 'aaabbbbbbbbbb']
        train_text_array = [' '.join(perm) for perm in itertools.permutations(words)]
        train_text_big_array = np.repeat(train_text_array, 10)

        label_array = np.repeat([1, 0, 0], 120).transpose()
        label_array.shape = (len(label_array), 1)
        train_df = pd.DataFrame(data=train_text_big_array)
        transformed_data = self.tr.fit_transform(train_df)
        assert transformed_data is not None
        self.assertEqual(1.0, self.tr.transformer_and_mapper_list[0].transformers[1].max_df)

    def test_feat_sweep_disabling(self):
        self.tr = pp.DataTransformer("classification", enable_feature_sweeping=False)
        new_column_names = [str(i) for i in range(10)]
        dt = pd.DataFrame(np.random.rand(100, 10))
        stats_and_cp = ColumnPurposeDetector.get_raw_stats_and_column_purposes(dt)
        trs = self.tr._perform_feature_sweeping(pd.DataFrame(
            np.random.rand(100, 10)), np.random.rand(100), stats_and_cp, new_column_names)
        assert len(trs) == 0

    def test_feat_sweep_enabled(self):
        mock_feature_config_manager = MockAutoMLFeatureConfigManager()
        feature_sweeping_config = mock_feature_config_manager.get_feature_sweeping_config(task_type="classification")
        tr = pp.DataTransformer("classification",
                                enable_feature_sweeping=True,
                                feature_sweeping_config=feature_sweeping_config)

        X, y = TransformTests._get_newsgroups_test_data()
        feat_data = tr.fit_transform_with_logger(X, y)
        assert feat_data is not None

    def test_customization_with_sweeping(self):
        featurization_config = FeaturizationConfig()
        featurization_config.blocked_transformers = [SupportedTransformers.LabelEncoder]
        tr = pp.DataTransformer("classification", enable_feature_sweeping=True,
                                featurization_config=featurization_config)

        X, y = TransformTests._get_newsgroups_test_data()
        feat_data = tr.fit_transform_with_logger(X, y)
        assert feat_data is not None

    def test_empty_featurization_config(self):
        featurization_config = FeaturizationConfig()
        tr = pp.DataTransformer("classification", enable_feature_sweeping=True,
                                featurization_config=featurization_config)

        df = pd.DataFrame([1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                           1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                           1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                           1, 1, 1, 1, 2, 2, 2, 2, 2, 2,
                           2, 2, 2, 2, 2, 2, 2, 2, 2, 2], dtype='int64')

        feat_data = tr.fit_transform(df)
        assert feat_data is not None
        assert tr.stats_and_column_purposes[0][1] == FeatureType.Categorical

    def test_column_purpose_update(self):
        featurization_config = FeaturizationConfig()
        featurization_config.add_column_purpose('cat_column', FeatureType.Categorical)
        tr = pp.DataTransformer("classification", enable_feature_sweeping=True,
                                featurization_config=featurization_config)

        df = pd.DataFrame([1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                           1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                           1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                           1, 1, 1, 1, 2, 2, 2, 2, 2, 2,
                           2, 2, 2, 2, 3, 3, 5, 5, 5, 5], columns=['cat_column'])

        stats_and_cp = ColumnPurposeDetector.get_raw_stats_and_column_purposes(df)
        assert stats_and_cp[0][1] == FeatureType.Numeric

        feat_data = tr.fit_transform(df)
        assert feat_data is not None
        assert tr.stats_and_column_purposes[0][1] == FeatureType.Categorical

    def test_transformer_param_update(self):
        featurization_config = FeaturizationConfig()
        featurization_config.add_transformer_params('Imputer', ['col1'], {"strategy": "median"})
        featurization_config.add_transformer_params('Imputer', ['col3'], {"strategy": "median"})
        featurization_config.add_transformer_params('Imputer', ['col4'], {"strategy": "most_frequent"})
        featurization_config.add_transformer_params('HashOneHotEncoder', [], {'number_of_bits': 3})

        df = pd.DataFrame({'col1': [0, 1, 3, 1, 2, 3, np.nan, 0, 1],
                           'col2': ['a', 'b', 'a', 'c', 'b', 'c', 'a', 'a', 'b'],
                           'col3': [2.0, 5.3, 3.2, 1.7, np.nan, 3.8, 5.9, 0.3, 4.7],
                           'col4': [2, 0, 3, np.nan, 2, 3, 5, 0, np.nan],
                           'col5': np.arange(9),
                           'label': [0, 1, 0, 1, 1, 1, 0, 1, 1]})

        tr = pp.DataTransformer("classification", enable_feature_sweeping=True,
                                featurization_config=featurization_config)

        feat_data = tr.fit_transform(df)
        assert feat_data is not None

        # Transformer param update check
        self.assertEqual(["col1"], tr.transformer_and_mapper_list[0].mapper.features[0][0])
        self.assertEqual("median", tr.transformer_and_mapper_list[0].transformers[0].strategy)
        self.assertEqual(["col3"], tr.transformer_and_mapper_list[2].mapper.features[0][0])
        self.assertEqual("median", tr.transformer_and_mapper_list[2].transformers[0].strategy)
        self.assertEqual(["col4"], tr.transformer_and_mapper_list[4].mapper.features[0][0])
        self.assertEqual("most_frequent", tr.transformer_and_mapper_list[4].transformers[0].strategy)
        self.assertEqual(["col5"], tr.transformer_and_mapper_list[6].mapper.features[0][0])
        self.assertEqual("mean", tr.transformer_and_mapper_list[6].transformers[0].strategy)
        self.assertEqual("col2", tr.transformer_and_mapper_list[8].mapper.features[0][0])
        # number_of_columns = pow(2, number_of_bits) = 8
        self.assertEqual(8, tr.transformer_and_mapper_list[8].transformers[1]._num_cols)

        # Engineered feature names check
        self.assertEqual('median',
                         tr.get_featurization_summary(is_user_friendly=False)[0]['TransformationParams']
                         ['Transformer1']['TransformationParams'].get('strategy'))
        self.assertEqual(8,
                         tr.get_featurization_summary(is_user_friendly=False)[5]['TransformationParams']
                         ['Transformer2']['TransformationParams'].get('num_cols'))

    def test_transformer_param_update_Imputer(self):
        featurization_config = FeaturizationConfig()

        df = pd.DataFrame({'col1': [0, 1, 3, 1, 2, 3, np.nan, 0, 1],
                           'label': [0, 1, 0, 1, 1, 1, 0, 1, 1]})

        # non existent column, should silently ignore
        featurization_config.add_transformer_params(
            SupportedTransformers.Imputer, ['col_not_exist'], {"strategy": "median"})
        tr = pp.DataTransformer("classification", enable_feature_sweeping=True,
                                featurization_config=featurization_config)

        feat_data = tr.fit_transform(df)
        assert feat_data is not None

        # non existent strategy type, imputer throws ValueError in fit()
        featurization_config.remove_transformer_params(SupportedTransformers.Imputer)
        featurization_config.add_transformer_params(
            SupportedTransformers.Imputer, ['col1'], {"strategy": "test_strategy"})
        tr = pp.DataTransformer("classification", enable_feature_sweeping=True,
                                featurization_config=featurization_config)
        with self.assertRaises(FitException):
            tr.fit_transform(df)

        # non existent parameter, should use default parameters
        featurization_config.remove_transformer_params(SupportedTransformers.Imputer)
        featurization_config.add_transformer_params(
            SupportedTransformers.Imputer, ['col1'], {"some_param_key": "value"})
        tr = pp.DataTransformer("classification", enable_feature_sweeping=True,
                                featurization_config=featurization_config)
        feat_data = tr.fit_transform(df)
        assert feat_data is not None
        # Transformer param update check
        self.assertEqual(["col1"], tr.transformer_and_mapper_list[0].mapper.features[0][0])
        self.assertEqual("mean", tr.transformer_and_mapper_list[0].transformers[0].strategy)
        self.assertEqual('mean',
                         tr.get_featurization_summary(is_user_friendly=False)[0]['TransformationParams']
                         ['Transformer1']['TransformationParams'].get('strategy'))

    def test_transformer_param_update_HashOneHotEncoder(self):
        featurization_config = FeaturizationConfig()

        df = pd.DataFrame({'col1': ['a', 'b', 'a', 'c', 'b', 'c', 'a', 'a', 'b'],
                           'label': [0, 1, 0, 1, 1, 1, 0, 1, 1]})

        # HashOneHotEncoder wrong parameter
        featurization_config.add_transformer_params(
            SupportedTransformers.HashOneHotEncoder, ['col1'], {"some_param_key": "value"})
        tr = pp.DataTransformer("classification", enable_feature_sweeping=True,
                                featurization_config=featurization_config)
        feat_data = tr.fit_transform(df)
        assert feat_data is not None
        self.assertEqual(2, tr.transformer_and_mapper_list[0].transformers[1]._num_cols)

        # HashOneHotEncoder invalid value, use default
        featurization_config.add_transformer_params(
            SupportedTransformers.HashOneHotEncoder, ['col1'], {"number_of_bits": "string_value"})
        tr = pp.DataTransformer("classification", enable_feature_sweeping=True,
                                featurization_config=featurization_config)
        feat_data = tr.fit_transform(df)
        assert feat_data is not None
        self.assertEqual(2, tr.transformer_and_mapper_list[0].transformers[1]._num_cols)

        # HashOneHotEncoder other values after number_of_bits, use number_of_bits but discard others
        featurization_config.add_transformer_params(
            SupportedTransformers.HashOneHotEncoder, ['col1'], {"number_of_bits": 3, "invalid_param": "value"})
        tr = pp.DataTransformer("classification", enable_feature_sweeping=True,
                                featurization_config=featurization_config)
        feat_data = tr.fit_transform(df)
        assert feat_data is not None
        self.assertEqual(8, tr.transformer_and_mapper_list[0].transformers[1]._num_cols)

    def test_transformer_param_update_TfIdf(self):
        words = ['abc', 'def', 'ghi', 'jkl']
        train_text_array = np.array([' '.join(perm) for perm in itertools.permutations(words)])
        train_df = pd.DataFrame({'col1': train_text_array})

        self.tr.fit_transform(train_df)
        self.assertEqual(1, self.tr.transformer_and_mapper_list[0].transformers[1].min_df)
        self.assertEqual(0.95, self.tr.transformer_and_mapper_list[0].transformers[1].max_df)

        featurization_config = FeaturizationConfig()
        # TfIdf Parameter max_df uses default TFIDF_VECTORIZER_CONFIG.MAX_DF = 0.95
        featurization_config.add_transformer_params(
            SupportedTransformers.TfIdf, ['col1'], {"max_df": 0.9, "min_df": 2})

        tr = pp.DataTransformer("classification",
                                featurization_config=featurization_config)
        feat_data = tr.fit_transform(train_df)
        assert feat_data is not None
        self.assertEqual(0.9, tr.transformer_and_mapper_list[0].transformers[1].max_df)
        self.assertEqual(2, tr.transformer_and_mapper_list[0].transformers[1].min_df)

    def test_blockedlist_no_replacement(self):
        featurization_config = FeaturizationConfig()
        featurization_config.blocked_transformers = [SupportedTransformers.TfIdf]
        tr = pp.DataTransformer("classification", enable_feature_sweeping=True,
                                featurization_config=featurization_config)

        df = pd.DataFrame(['txt one', 'txt two', 'txt three', 'txt four', 'txt five'], columns=['txt_column'])

        # No other transformer to replace
        with self.assertRaises(DataException):
            tr.fit_transform(df)

    def test_numeric_no_column_sweep_replacement(self):
        featurization_config = FeaturizationConfig()
        featurization_config.blocked_transformers = [SupportedTransformers.LabelEncoder]
        tr = pp.DataTransformer("classification", enable_feature_sweeping=True,
                                featurization_config=featurization_config)

        df = pd.DataFrame([1, 1, 1, 1, 5, 1, 1, 1, 1, 1,
                           1, 1, 1, 1, 1, 7, 1, 1, 1, 1,
                           1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                           1, 1, 1, 1, 2, 2, 2, 2, 2, 2,
                           2, 2, 2, 2, 2, 2, 2, 2, 2, 2], dtype='int64')

        stats_and_cp = ColumnPurposeDetector.get_raw_stats_and_column_purposes(df)
        assert stats_and_cp[0][1] == FeatureType.Numeric

        feat_data = tr.fit_transform(df)
        assert feat_data is not None
        assert tr.stats_and_column_purposes[0][1] == FeatureType.Numeric

    def test_blocklist_column_sweep_replacement(self):
        featurization_config = FeaturizationConfig()
        featurization_config.blocked_transformers = [SupportedTransformers.LabelEncoder]
        tr = pp.DataTransformer("classification", enable_feature_sweeping=True,
                                featurization_config=featurization_config)

        df = pd.DataFrame([1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                           1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                           1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                           1, 1, 1, 1, 2, 2, 2, 2, 2, 2,
                           2, 2, 2, 2, 2, 2, 2, 2, 2, 2], dtype='int64')

        stats_and_cp = ColumnPurposeDetector.get_raw_stats_and_column_purposes(df)
        assert stats_and_cp[0][1] == FeatureType.Categorical

        feat_data = tr.fit_transform(df)
        assert feat_data is not None
        assert tr.stats_and_column_purposes[0][1] == FeatureType.Numeric

    def test_customization_with_sweeping_not_added(self):
        featurization_config = FeaturizationConfig()
        featurization_config.blocked_transformers = [SupportedTransformers.LabelEncoder,
                                                     SupportedTransformers.CountVectorizer]
        featurization_config.add_column_purpose('cat_column', FeatureType.Categorical)
        tr = pp.DataTransformer("classification", enable_feature_sweeping=True,
                                featurization_config=featurization_config)

        df = pd.DataFrame(np.random.rand(20, 5))
        df['cat_column'] = pd.Series([11, 11, 11, 22, 22, 33, 44, 55, 55, 66,
                                      77, 77, 77, 77, 77, 88, 88, 99, 99, 99])

        feat_data = tr.fit_transform_with_logger(df, np.random.rand(20))
        assert feat_data is not None

    def test_customization_no_sweeping(self):
        featurization_config = FeaturizationConfig()
        featurization_config.blocked_transformers = [SupportedTransformers.LabelEncoder,
                                                     SupportedTransformers.CountVectorizer]
        featurization_config.add_column_purpose('cat_column', FeatureType.Categorical)
        tr = pp.DataTransformer("classification", enable_feature_sweeping=False,
                                featurization_config=featurization_config)

        df = pd.DataFrame(np.random.rand(20, 5))
        df['cat_column'] = pd.Series([11, 11, 11, 22, 22, 33, 44, 55, 55, 66,
                                      77, 77, 77, 77, 77, 88, 88, 99, 99, 99])

        feat_data = tr.fit_transform_with_logger(df, np.random.rand(20))
        assert feat_data is not None

    @staticmethod
    def _get_newsgroups_test_data():
        removedata = ('headers', 'footers', 'quotes')
        categories = ['alt.atheism', 'talk.religion.misc', 'comp.graphics', 'sci.space']

        from sklearn.datasets import fetch_20newsgroups

        # TODO: fetch some regression dataset for regression tasks
        data_train = fetch_20newsgroups(subset='test', categories=categories, shuffle=True, random_state=42,
                                        remove=removedata)
        sampled_X = data_train.data[:300]
        sampled_y = data_train.target[:300]

        X = pd.DataFrame(sampled_X)
        y = sampled_y

        return X, y


class PreprocessingLoggerTests(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(PreprocessingLoggerTests, self).__init__(*args, **kwargs)
        logger = UnserializableLogger('')
        observer = ExperimentObserver(file_handler=logger)
        self.tr = pp.DataTransformer("classification", logger=logger, observer=observer)

    def test_serialization(self):
        """
        Test to make sure serialization works as expected.
        """
        df = pd.DataFrame(data=[[1, 2, 9, 8], [4, 5, 2, 9], [7, 8, 2, 3]],
                          columns=['Column1', 'Column2', 'Column3', 'Column4'])

        # Transform the input data using the pre-processors
        try:
            self.tr.fit_transform_with_logger(df,
                                              logger=UnserializableLogger(''))
            pickle.loads(pickle.dumps(self.tr))
        except pickle.PickleError:
            self.fail('(De)serialization of DataTransformer failed!')


@ddt
class TestMemoryAwareFeaturization(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestMemoryAwareFeaturization, self).__init__(*args, **kwargs)

    @patch('azureml.automl.runtime.shared.memory_utilities.get_available_physical_memory')
    def test_transforms_memory_available(self, get_available_physical_memory_mock):
        tr = pp.DataTransformer("classification")
        get_available_physical_memory_mock.return_value = 90

        from sklearn import datasets

        digits = datasets.load_digits()

        # Exclude the first 100 rows from training so that they can be used for test.
        X_train = digits.data[100:, :]
        y_train = digits.target[100:]

        features = tr.fit_transform(X_train, y_train)
        assert len(features) > 0

    @patch('azureml.automl.runtime.shared.memory_utilities.get_available_physical_memory')
    def test_transforms_memory_unavailable(self, get_available_physical_memory_mock):
        tr = pp.DataTransformer("classification")
        get_available_physical_memory_mock.return_value = -1

        from sklearn import datasets
        digits = datasets.load_digits()

        # Exclude the first 100 rows from training so that they can be used for test.
        X_train = digits.data[100:, :]
        y_train = digits.target[100:]

        with self.assertRaises(Exception):
            tr.fit_transform(X_train, y_train)

    @file_data("test_data_transformer_data.json")
    @patch('azureml.automl.runtime.featurizer.transformer.text.wordembedding_transformer.WordEmbeddingTransformer.'
           'get_memory_footprint')
    @patch('azureml.automl.runtime.shared.memory_utilities.get_available_physical_memory')
    def test_actual_transform_memory_available(self, get_available_physical_memory_mock,
                                               get_memory_foot_print_mock, X):
        get_available_physical_memory_mock.return_value = 1000
        get_memory_foot_print_mock.return_value = 100

        mock_feature_config_manager = MockAutoMLFeatureConfigManager()
        feature_sweeping_config = mock_feature_config_manager.get_feature_sweeping_config(task_type="classification")
        tr = pp.DataTransformer("classification",
                                enable_feature_sweeping=True,
                                feature_sweeping_config=feature_sweeping_config)

        X = pd.DataFrame(X)
        y = np.random.rand(X.shape[0])

        tr._add_test_transforms(
            [(X.columns[0], make_pipeline(TextFeaturizers.string_cast(), TextFeaturizers.word_embeddings(
                **{"embeddings_provider": MockWordEmbeddingsProvider()}
            )), {"alias": "3"})])

        feat_data = tr.fit_transform_with_logger(X, y)
        assert feat_data is not None
        # Mock word embeddings added with vector size of 10
        assert feat_data.shape == (23, 224)

    @file_data("test_data_transformer_data.json")
    @patch('azureml.automl.runtime.featurizer.transformer.text.wordembedding_transformer.WordEmbeddingTransformer.'
           'get_memory_footprint')
    @patch('azureml.automl.runtime.shared.memory_utilities.get_available_physical_memory')
    def test_actual_transform_memory_unavailable(self, get_available_physical_memory_mock,
                                                 get_memory_foot_print_mock, X):
        get_available_physical_memory_mock.return_value = 1000
        get_memory_foot_print_mock.return_value = 10000

        mock_feature_config_manager = MockAutoMLFeatureConfigManager()
        feature_sweeping_config = mock_feature_config_manager.get_feature_sweeping_config(task_type="classification")
        tr = pp.DataTransformer("classification",
                                enable_feature_sweeping=True,
                                feature_sweeping_config=feature_sweeping_config)

        X = pd.DataFrame(X)
        y = np.random.rand(X.shape[0])

        tr._add_test_transforms(
            [(X.columns[0], make_pipeline(TextFeaturizers.string_cast(), TextFeaturizers.word_embeddings(
                **{"embeddings_provider": MockWordEmbeddingsProvider()}
            )), {"alias": "3"})])

        feat_data = tr.fit_transform_with_logger(X, y)
        assert feat_data is not None
        assert feat_data.shape == (23, 214)


@ddt
class TestColumnPurposeSweeping(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestColumnPurposeSweeping, self).__init__(*args, **kwargs)
        logger = UnserializableLogger('')
        observer = ExperimentObserver(file_handler=logger)
        self.tr = pp.DataTransformer("classification", logger=logger, observer=observer)

    @file_data("../test_columnpurpose_detection/test_dogbreeds_vs_fruit.json")
    def test_single_hashes_columns(self, X, y):
        df = pd.DataFrame(data=X, columns=['a'])
        tr = pp.DataTransformer("classification", enable_feature_sweeping=False)
        stats_and_cp = ColumnPurposeDetector.get_raw_stats_and_column_purposes(df)
        assert stats_and_cp[0][1] == FeatureType.Hashes
        feat_data = tr.fit_transform_with_logger(df)
        assert feat_data is not None
        assert tr.stats_and_column_purposes[0][1] == FeatureType.Text


if __name__ == "__main__":
    unittest.main()
