"""Module containing functions that handle the results of an evaluator."""
import json
import os
import re

import matplotlib.pyplot as plt
from decimal import Decimal as Dec
import pandas as pd
from collections import defaultdict
import numpy as np

from .utils import LOGGER


def plot_gridsearch_parameter_gains(results,
                                    scoring='rank_test_score',
                                    invert=False):
    df = pd.DataFrame(results['cv_results']).fillna('None')
    parameter_keys = [x for x in df.columns if 'param_' in x]

    result = defaultdict(dict)
    fig, ax = plt.subplots()

    for parameter in parameter_keys:
        try:
            list(df.groupby([parameter]))
        except TypeError:
            df[parameter] = df[parameter].astype(str)
        for value, sub_df in df.groupby([parameter]):
            result[parameter][value] = sub_df[scoring].mean()

    ipos = 0
    ylabel = scoring
    for parameter, pavs in result.items():
        if len(pavs) < 2:
            LOGGER.warning(
                f'skipping less than 2 values for parameter {parameter}')
            continue
        s = sorted(pavs.items(), key=lambda x: x[1])
        values = np.array([x[1] for x in s])
        # this is required when 'rank' is selected for scoring, as a lower rank
        # means a higher performance
        if invert:
            values = 1 / values
            ylabel = f'1/{ylabel}'
        labels = []
        for label, value in s:
            ax.text(
                ipos,
                0,
                f'  {label}',
                rotation='vertical',
                ha='center',
                fontweight='bold',
                va='bottom')
            labels.append(ipos)
            ipos += 1
        ax.bar(labels, values, label=parameter)
    ax.set_ylabel(ylabel)
    ax.set_xticks([])
    ax.legend()
    plt.show()


def tex_escape(text):
    conv = {
        '&': r'\&',
        '%': r'\%',
        '$': r'\$',
        '#': r'\#',
        '_': r'\_',
        '{': r'\{',
        '}': r'\}',
        '~': r'\textasciitilde{}',
        '^': r'\^{}',
        '\\': r'\textbackslash{}',
        '<': r'\textless{}',
        '>': r'\textgreater{}',
    }
    return ''.join([conv.get(c, c) for c in str(text)])


def grid_to_latex_table(results,
                        params,
                        include_line='hline',
                        test_score_format='0.01'):
    """generates a table formatted for latex documents.

    Args:
        results: results generated by a gridsearch evaluator
        params: a list of strings containing the parameters that should be
            included (e.g., ['tfidf__ngram_range'])
        include_line: one of ['hline', 'midrule', None] to draw a line below
            the first row
    """

    if 'cv_results' not in results:
        return ''
    res = results['cv_results']
    ranks = sorted(res['rank_test_score'].items(), key=lambda x: x[1])
    columns = params + ['rank', 'test_score']
    columns = [tex_escape(c) for c in columns]
    result = '\\begin{tabular}{' + 'l' * len(columns) + '}\n'
    result += ' & '.join(columns) + '\\\\\n'
    if include_line == 'hline':
        result += '\\hline\n'
    elif include_line == 'midrule':
        result += '\\midrule\n'
    for rank in ranks:
        run_number = rank[0]
        position = rank[1]
        score = res['mean_test_score'][run_number]
        score_f = Dec(score).quantize(Dec(test_score_format))
        param_strings = []
        for p in params:
            if p not in res['params'][run_number]:
                param_strings.append('N/A')
            else:
                # these curly braces are required to prevent a square barcket
                # from being the first character in a table line, which latex
                # interprets as a parameter for a previous command
                param_strings.append(
                    '{' + tex_escape(res['params'][run_number][p]) + '}')
        params_string = ' & '.join(param_strings)
        result += f'  {params_string} & {position} & {score_f}\\\\\n'
    result += '\\end{tabular}\n'
    print()
    print(result)


def grid_to_csv_file(results,
                     filename,
                     sort_by_column='rank_test_score',
                     exclude_combined_params_field=True,
                     exclude_split_scores=False):
    """ stores grid search results into a csv file

    Args:
        results: result object generated by a gridsearch validator
        filename: where to store the resulting csv file
        sort_by_column: which column should be sorted by
        exclude_combined_params_field: in addition to each paramater passed to
            grid search, the grid search result contains a field 'params' which
            redundantly stores every parameter a second time. Set this
            parameter to False to include it in the resulting csv file.
    """

    if 'cv_results' not in results:
        LOGGER.warning(
            'grid_to_csv_file result handler could not write results, as it '
            'seemed to have received a non-gridsearch result object')
        return
    res = results['cv_results']
    df = pd.DataFrame(res).sort_values([sort_by_column])
    if exclude_combined_params_field:
        df = df.drop(['params'], axis=1)
    pat = r'split\d+_test_score'
    if exclude_split_scores:
        df = df.drop([str(x) for x in df.columns if re.match(pat, x)], axis=1)

    original_file = os.path.basename(filename)

    original_name = os.path.splitext(original_file)[0]
    original_ext = os.path.splitext(original_file)[1]
    counter = 1
    while os.path.isfile(filename):
        filename = f'{original_name}_{counter:02d}.{original_ext}'
        counter += 1

    df.to_csv(filename)
    LOGGER.info(f'wrote grid search results to {filename}.')


def print_gridsearch_results(results, include_cv_results=False):
    """Prints the results of a gridsearch.

    Args:
        results: the results passed from a gridsearch evaluator.
    """
    if include_cv_results:
        print(f'cv results:\n{json.dumps(results["cv_results"], indent=4)}')
    for key in results.keys():
        if not key == 'cv_results':
            print(f'{key}: {results[key]}')


def print_gridsearch_results_json(results):
    """Prints the results of a gridsearch.

    Args:
        results: the results passed from a gridsearch evaluator.
    """
    print(json.dumps(results['cv_results'], indent=4))


def plot_gridsearch_results(results, rank_filter='score', result_filter=None):
    """Plots the results of a gridsearch.

    Args:
        results: the results passed from a gridsearch evaluator.
        rank_filter: the measurement used to filter the results.
        result_filter: substring that must be contained in a column that the
        column is printed.
    """
    df = pd.DataFrame(results['cv_results'])

    result_cols = [name for name in df.columns if 'split' not in name]

    if result_filter:
        cols = [name for name in result_cols if result_filter in name]
    else:
        cols = result_cols
    cols.append("params")
    results = pd.DataFrame(df, columns=cols)
    results = results.rename(index=int, columns=str)
    results = results.sort_index(ascending=True)

    rank_filter = 'rank_test_' + rank_filter
    df = df[(df[rank_filter] == 1)]

    if results.shape[0] > 0:
        results.plot(kind='bar')
        plt.show()
    else:
        LOGGER.warning("No results")
