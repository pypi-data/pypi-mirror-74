import itertools
# Not sure why Eclipse highlights the below as an unused input; it is certainly used
import logging  # @UnusedImport
import logging.config
import os
import re

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import pandas.plotting
import sklearn.linear_model
import sklearn.metrics

import thalesians.tsa.checks as checks

class DataSet(object):
    class DataSubset(object):
        class InputAndOutput(object):
            def __init__(self, input_df, output_df, output_base_df):
                self.__input_df = input_df
                self.__output_df = output_df
                self.__output_base_df = output_base_df
                self.__forecast_horizon = None
            
            @property
            def input(self):
                return self.__input_df
            
            @property
            def output(self):
                return self.__output_df
            
            @property
            def output_base(self):
                return self.__output_base_df
            
            def __len__(self):
                return len(self.__input_df)
            
        def __init__(self, input_df, output_df, output_base_df, purpose, split_purposes, split_starts_inclusive, split_ends_exclusive):
            self.__input_df = input_df
            self.__output_df = output_df
            self.__output_base_df = output_base_df
            self.__purpose = purpose
            self.__split_purposes = split_purposes
            self.__split_starts_inclusive = split_starts_inclusive
            self.__split_ends_exclusive = split_ends_exclusive
        
        def __getitem__(self, index):
            j = [i for i, x in enumerate(self.__split_purposes) if x == self.__purpose][index]
            return DataSet.DataSubset.InputAndOutput(
                    self.__input_df.iloc[self.__split_starts_inclusive[j]:self.__split_ends_exclusive[j]],
                    self.__output_df.iloc[self.__split_starts_inclusive[j]:self.__split_ends_exclusive[j]],
                    self.__output_base_df.iloc[self.__split_starts_inclusive[j]:self.__split_ends_exclusive[j]])
        
        def __len__(self):
            return len([i for i, x in enumerate(self.__split_purposes) if x == self.__purpose])
    
    def __init__(self, df):
        self.__input_df = df.copy()
        self.__output_df = None
        self.__output_base_df = None
        self.__original_columns = tuple(df.columns)
        self.__is_split = False
        self.__split_purposes = None
        self.__split_starts_inclusive = None
        self.__split_ends_exclusive = None
        self.__truncate_from_above = 0
        self.__truncate_from_below = 0
    
    @property
    def original_columns(self):
        return self.__original_columns
    
    def add_derived_column(self, name, func, vectorized=False):
        if vectorized:
            result = func(self.__input_df)
        else:
            result = self.__input_df.apply(func, axis=1)
        self.__input_df[name] = result
        try:
            self.__truncate_from_above = max(self.__truncate_from_above, list(self.__input_df[name].isnull().values).index(False))
        except ValueError:
            self.__truncate_from_above = max(self.__truncate_from_above, len(self.__input_df))
        
    def remove_input_column(self, column):
        if not checks.is_iterable_not_string(column): column = [column]
        for c in column:
            del self.__input_df[c]
        
    def keep_input_column(self, column):
        if not checks.is_iterable_not_string(column): column = [column]
        for c in self.__input_df.columns:
            if c not in column:
                del self.__input_df[c]
    
    def add_diff(self, column=None, prefix='diff(', suffix=')', exclude_column_re=None, include_column_re=None):
        logger = logging.getLogger()
        if column is None: column = self.__input_df.columns
        if not checks.is_iterable_not_string(column): column = [column]
        if exclude_column_re is not None: exclude_column_re = re.compile(exclude_column_re)
        if include_column_re is not None: include_column_re = re.compile(include_column_re)
        for c in column:
            if include_column_re is not None and not include_column_re.match(c):
                logger.info('- Excluding column due to include_column_re: %s' % c)
                continue
            if exclude_column_re is not None and exclude_column_re.match(c):
                logger.info('- Excluding column due to exclude_column_re: %s' % c)
                continue
            new_column_name = prefix + c + suffix
            logger.info('- Adding new diff column: %s' % new_column_name)
            self.__input_df[new_column_name] = self.__input_df[c].diff()
            try:
                self.__truncate_from_above = max(self.__truncate_from_above, list(self.__input_df[new_column_name].isnull().values).index(False))
            except ValueError:
                self.__truncate_from_above = max(self.__truncate_from_above, len(self.__input_df))
    
    def add_lag(self, lag, column=None, prefix='lag(${LAG},', suffix=')', exclude_column_re=None, include_column_re=None):
        logger = logging.getLogger()
        checks.check_not_none(lag)
        if not checks.is_iterable(lag): lag = [lag]
        if column is None: column = self.__input_df.columns
        if not checks.is_iterable_not_string(column): column = [column]
        if exclude_column_re is not None: exclude_column_re = re.compile(exclude_column_re)
        if include_column_re is not None: include_column_re = re.compile(include_column_re)
        for c in column:
            if include_column_re is not None and not include_column_re.match(c):
                logger.info('- Excluding column due to include_column_re: %s' % c)
                continue
            if exclude_column_re is not None and exclude_column_re.match(c):
                logger.info('- Excluding column due to exclude_column_re: %s' % c)
                continue
            for l in lag:
                c_prefix = prefix.replace('${LAG}', str(l))
                c_suffix = suffix.replace('${LAG}', str(l))
                new_column_name = c_prefix + c + c_suffix
                logger.info('- Adding new lag column: %s' % new_column_name)
                self.__input_df[new_column_name] = self.__input_df[c].shift(l)
                try:
                    self.__truncate_from_above = max(self.__truncate_from_above, list(self.__input_df[new_column_name].isnull().values).index(False))
                except ValueError:
                    self.__truncate_from_above = max(self.__truncate_from_above, len(self.__input_df))

    def add_ma(self, window, column=None, prefix='ma(${WINDOW},', suffix=')', exclude_column_re=None, include_column_re=None):
        logger = logging.getLogger()
        checks.check_not_none(window)
        if not checks.is_iterable(window): window = [window]
        if column is None: column = self.__input_df.columns
        if not checks.is_iterable_not_string(column): column = [column]
        if exclude_column_re is not None: exclude_column_re = re.compile(exclude_column_re)
        if include_column_re is not None: include_column_re = re.compile(include_column_re)
        for c in column:
            if include_column_re is not None and not include_column_re.match(c):
                logger.info('- Excluding column due to include_column_re: %s' % c)
                continue
            if exclude_column_re is not None and exclude_column_re.match(c):
                logger.info('- Excluding column due to exclude_column_re: %s' % c)
                continue
            for w in window:
                c_prefix = prefix.replace('${WINDOW}', str(w))
                c_suffix = suffix.replace('${WINDOW}', str(w))
                new_column_name = c_prefix + c + c_suffix
                logger.info('- Adding new MA column: %s' % new_column_name)
                self.__input_df[new_column_name] = self.__input_df[c].rolling(window=w, center=False).mean()
                try:
                    self.__truncate_from_above = max(self.__truncate_from_above, list(self.__input_df[new_column_name].isnull().values).index(False))
                except ValueError:
                    self.__truncate_from_above = max(self.__truncate_from_above, len(self.__input_df))

    def add_ln(self, column=None, prefix='ln(', suffix=')', exclude_column_re=None, include_column_re=None, exclude_columns_with_negative_values=True):
        logger = logging.getLogger()
        if column is None: column = self.__input_df.columns
        if not checks.is_iterable_not_string(column): column = [column]
        if exclude_column_re is not None: exclude_column_re = re.compile(exclude_column_re)
        if include_column_re is not None: include_column_re = re.compile(include_column_re)
        for c in column:
            if include_column_re is not None and not include_column_re.match(c):
                logger.info('- Excluding column due to include_column_re: %s' % c)
                continue
            if exclude_column_re is not None and exclude_column_re.match(c):
                logger.info('- Excluding column due to exclude_column_re: %s' % c)
                continue
            if exclude_columns_with_negative_values and any(self.__input_df[c] < 0.):
                logger.info('- Excluding column since it contains negative values: %s' % c)
                continue
            new_column_name = prefix + c + suffix
            logger.info('- Adding new ln column: %s' % new_column_name)
            self.__input_df[new_column_name] = self.__input_df[c].apply(np.log)
            
    def set_output(self, column, forecast_horizon=0, remove_from_input=None, difference_from_present=False):
        assert column is not None
        assert forecast_horizon is not None
        if not checks.is_iterable(forecast_horizon): forecast_horizon = [forecast_horizon]
        for fh in forecast_horizon: assert fh >= 0
        if remove_from_input is None:
            remove_from_input = not all(forecast_horizon)
        if difference_from_present:
            self.__output_df = pd.concat([self.__input_df[column].shift(-fh) - self.__input_df[column] for fh in forecast_horizon], axis=1)
        else:
            self.__output_df = pd.concat([self.__input_df[column].shift(-fh) for fh in forecast_horizon], axis=1)
        self.__output_df.columns = ['forecast(' + str(fh) + ',' + column + ')' if fh > 0 else column for fh in forecast_horizon]
        self.__output_base_df = self.__input_df[column].to_frame()
        self.__forecast_horizon = list(forecast_horizon)
        if remove_from_input:
            del self.__input_df[column]
        self.__truncate_from_below = max(forecast_horizon)

    @property    
    def input_dim(self):
        return np.shape(self.__input_df)[1]
    
    @property
    def output_dim(self):
        return np.shape(self.__output_df)[1]
    
    @property
    def input_all(self):
        return self.__input_df
    
    @property
    def output_all(self):
        return self.__output_df
    
    @property
    def output_base_all(self):
        return self.__output_base_df
        
    @property
    def input_working(self):
        return self.__input_df.iloc[self.__truncate_from_above:len(self.__input_df) - self.__truncate_from_below]
    
    @property
    def output_working(self):
        return None if self.__output_df is None else self.__output_df.iloc[self.__truncate_from_above:len(self.__input_df) - self.__truncate_from_below]
    
    @property
    def output_base_working(self):
        return None if self.__output_base_df is None else self.__output_base_df.iloc[self.__truncate_from_above:len(self.__input_df) - self.__truncate_from_below]
    
    @property
    def forecast_horizon(self):
        return self.__forecast_horizon
    
    @property
    def is_split(self):
        return self.__is_split
    
    def split(self, purpose=('training', 'validation', 'test'), fraction=(.5, .25, .25)):
        logger = logging.getLogger()
        
        if not checks.is_iterable_not_string(purpose): purpose = [purpose]
        if not checks.is_iterable(fraction): fraction = [fraction]

        split_purposes = []
        split_starts_inclusive = []
        split_ends_exclusive = []
        
        count_remaining = len(self.input_working)
        fraction_done = 0.
        count_done = 0
        for p, f in zip(purpose, fraction):
            assert p in ('training', 'validation', 'test')
            split_purposes.append(p)
            next_count = int(count_remaining * f / (1. - fraction_done))
            split_starts_inclusive.append(count_done)
            count_done += next_count
            split_ends_exclusive.append(count_done)
            count_remaining -= next_count
            fraction_done += f
            
            logger.info('A %s set: [%d, %d)' % (split_purposes[-1], split_starts_inclusive[-1], split_ends_exclusive[-1]))
        
        self.__is_split = True
        self.__split_purposes = tuple(split_purposes)
        self.__split_starts_inclusive = tuple(split_starts_inclusive)
        self.__split_ends_exclusive = tuple(split_ends_exclusive)

    @property    
    def training_set(self):
        assert self.__is_split
        return DataSet.DataSubset(self.input_working, self.output_working, self.output_base_working, 'training', self.__split_purposes, self.__split_starts_inclusive, self.__split_ends_exclusive)
    
    @property
    def validation_set(self):
        assert self.__is_split
        return DataSet.DataSubset(self.input_working, self.output_working, self.output_base_working, 'validation', self.__split_purposes, self.__split_starts_inclusive, self.__split_ends_exclusive)
    
    @property
    def test_set(self):
        assert self.__is_split
        return DataSet.DataSubset(self.input_working, self.output_working, self.output_base_working, 'test', self.__split_purposes, self.__split_starts_inclusive, self.__split_ends_exclusive)
    
    @property
    def all_training_sets(self):
        assert self.__is_split
        return DataSet.DataSubset.InputAndOutput(
                pd.concat([self.input_working[s:e] for (p, s, e) in zip(self.__split_purposes, self.__split_starts_inclusive, self.__split_ends_exclusive) if p == 'training']),
                pd.concat([self.output_working[s:e] for (p, s, e) in zip(self.__split_purposes, self.__split_starts_inclusive, self.__split_ends_exclusive) if p == 'training']),
                pd.concat([self.output_base_working[s:e] for (p, s, e) in zip(self.__split_purposes, self.__split_starts_inclusive, self.__split_ends_exclusive) if p == 'training']))
    
    @property
    def all_validation_sets(self):
        assert self.__is_split
        return DataSet.DataSubset.InputAndOutput(
                pd.concat([self.input_working[s:e] for (p, s, e) in zip(self.__split_purposes, self.__split_starts_inclusive, self.__split_ends_exclusive) if p == 'validation']),
                pd.concat([self.output_working[s:e] for (p, s, e) in zip(self.__split_purposes, self.__split_starts_inclusive, self.__split_ends_exclusive) if p == 'validation']),
                pd.concat([self.output_base_working[s:e] for (p, s, e) in zip(self.__split_purposes, self.__split_starts_inclusive, self.__split_ends_exclusive) if p == 'validation']))
    
    @property
    def all_test_sets(self):
        assert self.__is_split
        return DataSet.DataSubset.InputAndOutput(
                pd.concat([self.input_working[s:e] for (p, s, e) in zip(self.__split_purposes, self.__split_starts_inclusive, self.__split_ends_exclusive) if p == 'test']),
                pd.concat([self.output_working[s:e] for (p, s, e) in zip(self.__split_purposes, self.__split_starts_inclusive, self.__split_ends_exclusive) if p == 'test']),
                pd.concat([self.output_base_working[s:e] for (p, s, e) in zip(self.__split_purposes, self.__split_starts_inclusive, self.__split_ends_exclusive) if p == 'test']))
    
    def __len__(self):
        return len(self.__input_df)
    
    def __repr__(self):
        return repr(self.__input_df)
    
    def __str__(self):
        return str(self.__input_df)
    
class IterativeFeatureSelector(object):
    def __init__(self, model=sklearn.linear_model.LinearRegression(), metric=sklearn.metrics.r2_score, metric_improvement_threshold=.00025, weight_metric_by_forecast_horizon=False,
                 exclude_column_re=None, include_column_re=None):
        self.__model = model
        self.__metric = metric
        self.__metric_improvement_threshold = metric_improvement_threshold
        self.__weight_metric_by_forecast_horizon = weight_metric_by_forecast_horizon
        if exclude_column_re is not None: exclude_column_re = re.compile(exclude_column_re)
        self.__exclude_column_re = exclude_column_re
        if include_column_re is not None: include_column_re = re.compile(include_column_re)
        self.__include_column_re = include_column_re
    
    def select(self, ds):
        assert len(ds.training_set) > 0, 'Must have at least one training set in the dataset'
        assert len(ds.validation_set) > 0, 'Must have at least one validation set in the dataset'
        logger = logging.getLogger()
        included_columns = []
        for c in ds.input_working.columns:
            if self.__exclude_column_re is not None and self.__exclude_column_re.match(c):
                logger.info('- Excluding column due to exclude_column_re: %s' % c)
                continue
            if self.__include_column_re is not None and not self.__include_column_re.match(c):
                logger.info('- Including column due to include_column_re: %s' % c)
                continue
            included_columns.append(c)
        selected_columns = []
        prev_best_metric = None
        best_metric = None
        best_metric_column = None
        while len(selected_columns) < len(included_columns):
            for i, next_column in enumerate(included_columns):
                logger.info('- Trying column %d of %d, "%s"' % (i + 1, len(included_columns), next_column))
                if next_column in selected_columns:
                    logger.info('  Column "%s" already selected, continuing' % next_column)
                    continue
                current_columns = []
                current_columns.extend(selected_columns)
                current_columns.append(next_column)
                metrics = []
                if len(ds.training_set) == len(ds.validation_set):
                    for ts, vs in zip(ds.training_set, ds.validation_set):
                        x_train = ts.input[current_columns].values
                        y_train = ts.output.values
                        self.__model.fit(x_train, y_train)
                        x_validation = vs.input[current_columns].values
                        y_validation = vs.output.values
                        y_validation_pred = self.__model.predict(x_validation)
                        if self.__weight_metric_by_forecast_horizon:
                            metric = 0.
                            for k, fh in enumerate(ds.forecast_horizon):
                                metric += (fh / np.max(ds.forecast_horizon)) * self.__metric(y_validation[:,k], y_validation_pred[:,k])
                        else:
                            metric = self.__metric(y_validation, y_validation_pred)
                        metrics.append(metric)
                else:
                    x_train = ds.all_training_sets.input[current_columns].values
                    y_train = ds.all_training_sets.output.values
                    self.__model.fit(x_train, y_train)
                    for vs in ds.validation_set:
                        x_validation = vs.input[current_columns].values
                        y_validation = vs.output.values
                        y_validation_pred = self.__model.predict(x_validation)
                        if self.__weight_metric_by_forecast_horizon:
                            metric = 0.
                            for k, fh in enumerate(ds.forecast_horizon):
                                metric += (fh / np.max(ds.forecast_horizon)) * self.__metric(y_validation[:,k], y_validation_pred[:,k])
                        else:
                            metric = self.__metric(y_validation, y_validation_pred)
                        metrics.append(metric)
                mean_metric = np.mean(metrics)
                log_message = '  Achieved metric %05f' % mean_metric
                if best_metric is not None: log_message += ', the maximum being %05f' % best_metric
                logger.info('  Achieved metric %05f' % mean_metric)
                if best_metric is None or best_metric < mean_metric:
                    best_metric = mean_metric
                    best_metric_column = next_column
            if prev_best_metric is not None and best_metric - prev_best_metric < self.__metric_improvement_threshold:
                break
            selected_columns.append(best_metric_column)
            logger.info('*** Selected column "%s", which improved the metric to %05f' % (best_metric_column, best_metric))
            logger.info('*** So far, selected %d columns: %s' % (len(selected_columns), ', '.join(['"%s"' % sc for sc in selected_columns])))
            prev_best_metric = best_metric
        logger.info('*** Final metric: %05f' % best_metric)
        return selected_columns

def evaluate_metrics_by_forecast_horizon(ds, column=None, model=sklearn.linear_model.LinearRegression(), metric=sklearn.metrics.r2_score, fit_set='training', predict_set='test'):
    logger = logging.getLogger()
    
    if column is None: column = ds.input_all.columns
    if not checks.is_iterable_not_string(column): column = [column]
    
    assert fit_set in ('training', 'validation', 'test')
    assert predict_set in ('training', 'validation', 'test')
    
    if fit_set == 'training':
        fit_sets = ds.training_set
        all_fit_sets = ds.all_training_sets
    elif fit_set == 'validation':
        fit_sets = ds.validation_set
        all_fit_sets = ds.all_validation_sets
    else:
        fit_sets = ds.test_set
        all_fit_sets = ds.all_test_sets
        
    if predict_set == 'training':
        predict_sets = ds.training_set
    elif predict_set == 'validation':
        predict_sets = ds.validation_set
    else:
        predict_sets = ds.test_set
        
    logger.info('Evaluating the metric for column(s) %s' % ', '.join(['"%s"' % c for c in column]))
    metrics = []
    if len(fit_sets) == len(predict_sets):
        for fs, ps in zip(fit_sets, predict_sets):
            x_train = fs.input[column].values
            y_train = fs.output.values
            model.fit(x_train, y_train)
            x_predict = ps.input[column].values
            y_predict = ps.output.values
            y_predict_pred = model.predict(x_predict)
            predict_set_metrics = []
            for i in range(len(ds.forecast_horizon)):
                predict_set_metrics.append(metric(y_predict[:,i], y_predict_pred[:,i]))
            metrics.append(predict_set_metrics)
    else:
        x_train = all_fit_sets.input[column].values
        y_train = all_fit_sets.output.values
        model.fit(x_train, y_train)
        for ps in predict_sets:
            x_predict = ps.input[column].values
            y_predict = ps.output.values
            y_predict_pred = model.predict(x_predict)
            predict_set_metrics = []
            for i in range(len(ds.forecast_horizon)):
                predict_set_metrics.append(metric(y_predict[:,i], y_predict_pred[:,i]))
            metrics.append(predict_set_metrics)
    # The mean is taken over the predict sets
    return np.mean(metrics, axis=0)
    
def visualise_metrics_by_forecast_horizon(ds, column=None, model=sklearn.linear_model.LinearRegression(), metric=sklearn.metrics.r2_score, fit_set='training', predict_set='test', figure=None):
    if column is None: column = ds.input_all.columns
    if not checks.is_iterable_not_string(column): column = [column]
    assert fit_set in ('training', 'validation', 'test')
    assert predict_set in ('training', 'validation', 'test')
    if figure is None: figure = plt.figure(figsize=(12, 12))
    metrics_by_column = {}
    for c in column:
        metrics_by_column[c] = evaluate_metrics_by_forecast_horizon(ds, c, model, metric, fit_set, predict_set)
    combined_metrics = evaluate_metrics_by_forecast_horizon(ds, column, model, metric, fit_set, predict_set)
    ax = figure.add_subplot(111)
    markers = itertools.cycle(('.', ',', 'o', 'v', '^', '<', '>', '1', '2', '3', '4', '8', 's', 'p', 'P', '*', 'h', 'H', '+', 'x', 'X', 'D', 'd', '|', '_'))
    linestyles = itertools.cycle((':', '-.', '--', '-'))
    for c in column:
        ax.plot(ds.forecast_horizon, metrics_by_column[c], marker=next(markers), linestyle=next(linestyles), linewidth=1, alpha=.5, label=c)
    ax.plot(ds.forecast_horizon, combined_metrics, 'o-', linewidth=2, label='combined')
    # Shrink current axis's height by 10% on the bottom
    box = ax.get_position()
    ax.set_position([box.x0, box.y0 + box.height * 0.1, box.width, box.height * 0.9])
    # Put a legend below current axis
    ax.legend(loc='upper center', bbox_to_anchor=(0.5, -0.05), fancybox=True, shadow=True, ncol=5)
    return {'metrics_by_column': metrics_by_column, 'combined_metrics': combined_metrics}

def to_lstm_input(raw_input, timesteps):
    input_values = raw_input.values if isinstance(raw_input, pd.DataFrame) else raw_input
    result = np.empty((np.shape(input_values)[0] - timesteps + 1, timesteps, np.shape(input_values)[1]))
    for i in range(np.shape(input_values)[0] - timesteps + 1):
        result[i,:,:] = input_values[i:i+timesteps,:]
    return result

def to_lstm_output(raw_output, timesteps):
    output_values = raw_output.values if isinstance(raw_output, pd.DataFrame) else raw_output
    return output_values[timesteps - 1:,:]

def __init_logging():
	config = {
		'version': 1,
	    'loggers': {
	    	'keys': 'root'
	    },
	    'formatters': {
	    	'standard': {
		    	'format': '%(asctime)s %(name)-12s %(levelname)-8s %(message)s'
	    	}
	    },
	    'handlers': {
	    	'default': {
	    		'level': 'DEBUG',
	    		'formatter': 'standard',
	    		'class': 'logging.StreamHandler',
	    		'stream': 'ext://sys.stderr'
	    	}
	    },
	    'loggers': {
	    	'': {  # root logger
	    		'handlers': ['default'],
	    		'level': 'DEBUG'
	    	}
	    }
	}
	logging.config.dictConfig(config)

__init_logging()
logger = logging.getLogger()
logger.info('Initialising TSA')

logger.info('Registering Pandas Matplotlib converters')
pandas.plotting.register_matplotlib_converters()
