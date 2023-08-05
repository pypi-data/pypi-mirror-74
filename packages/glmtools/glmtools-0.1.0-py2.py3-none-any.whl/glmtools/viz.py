#!/usr/bin/python

# vim: set expandtab ts=4 sw=4:

import numpy as np
import matplotlib.pyplot as plt
from matplotlib import cm


def print_contrast_table(contrasts,
                         contrast_names=None, regressor_names=None,
                         f_tests=None, ftest_names=None):

    num_contrasts, num_regressors = contrasts.shape

    if contrast_names is None:
        np.arange(num_contrasts).astype(str)

    if regressor_names is None:
        np.arange(num_regressors).astype(str)

    if f_tests is None:
        num_ftests = None

    elif ftest_names is None:
        ftest_names = np.arange(num_ftests).astype(str)

    print()
    print("{:15}".format('%s Regressors' % num_regressors))
    print("{:15}".format('%s Contrasts' % num_contrasts))
    if num_ftests is None:
        print("{:15}".format('0 F-tests'))
    else:
        print("{:15}".format('%s F-test' % num_ftests))
    print()

    template = "{:^25}" + "{:^15}" * (num_regressors)
    tmp = ['Contrast Table'] + regressor_names

    print(template.format(*tmp))
    print('-'*len(template.format(*tmp)))
    for ii in range(num_contrasts):
        tmp = [contrast_names[ii]] + contrasts[ii, :].tolist()
        print(template.format(*tmp))

    if num_ftests is not None:
        template = "{:^25}" + "{:^15}" * (num_ftests)
        tmp = ['F Table'] + ftest_names

        print(template.format(*tmp))
        print('-'*len(template.format(*tmp)))
        for ii in range(num_contrasts):
            tmp = [ftest_names[ii]] + f_tests[ii, :].tolist()
            print(template.format(*tmp))


def plot_design_efficiency(corr_mat, singular_values, num_regressors,
                           regressor_names=None, normalise_singlar_values=True,
                           figargs=dict()):

    # Set some figure defaults
    if 'figsize' not in figargs:
        figargs['figsize'] = (12, 6)

    f = plt.figure(**figargs)

    # Plot regressor correlations
    ax = plt.subplot(121)
    cax = ax.pcolormesh(corr_mat, cmap=cm.hot)
    ax.grid(False)
    ax.set_yticks(np.arange(1, num_regressors+1)-.5)
    ax.set_yticklabels(np.arange(1, num_regressors+1))
    ax.set_xticks(np.arange(1, num_regressors+1)-.5)
    ax.set_xticklabels(np.arange(1, num_regressors+1))
    ax.set_xlabel('Regressors')
    ax.set_ylabel('Regressors')
    cb = plt.colorbar(cax, orientation='horizontal')
    cb.set_label('Correlation Coefficient')
    plt.title('Regressor Correlation')

    if normalise_singlar_values:
        # Normalise so that the largest value is 1
        singular_values = singular_values / singular_values.max()
    singular_values = np.round(singular_values, 3)  # Limit decimal places for display

    # Plot design matrix singular values
    ax = plt.subplot(122)
    for tag in ['top', 'right']:
        ax.spines[tag].set_visible(False)
    ax.bar(np.arange(len(singular_values))+.5, singular_values)
    ax.set_xticks(np.arange(1, num_regressors+1)-.5)
    ax.set_xticklabels(np.arange(1, num_regressors+1))
    ax.set_xlabel('Regressors')
    ax.set_ylabel('Singular Values')
    for ii in range(len(singular_values)):
        ax.text(ii+.5, singular_values[ii],
                str(np.round(singular_values[ii], 3)),
                horizontalalignment='center', verticalalignment='bottom')
    plt.title('Design Matrix Singular Values')

    return f


def plot_design_summary(design_matrix, regressor_names,
                        contrasts=None, contrast_names=None,
                        ftests=None, ftest_names=None,
                        summary_lines=True, figargs=dict()):

    num_observations, num_regressors = design_matrix.shape

    # Set some figure defaults
    if 'figsize' not in figargs:
        figargs['figsize'] = (12, 6)

    f = plt.figure(**figargs)

    if contrasts is not None:
        # Add rows for contrast matrix, one contrast takes about 5% of the design matrix
        step = .05*design_matrix.shape[0]
        new_rows = len(contrast_names) + 1
        new_rows = int(new_rows*step)
        pad = np.zeros((new_rows, len(regressor_names)))
        pad.fill(np.nan)
        pad_design = np.r_[pad, design_matrix]

        # Add extra column for contrast names
        pad = np.zeros((1, pad_design.shape[0]))
        pad.fill(np.nan)
        pad_design = np.r_[pad, pad_design.T].T
        new_cols = 1
    else:
        new_rows = 0
        new_cols = 0
        pad_design = design_matrix

    if ftests is not None:
        # Add columns for f tests
        new_fcols = len(ftest_names)+1
        pad = np.zeros((len(ftest_names)+1, pad_design.shape[0]))
        pad.fill(np.nan)
        pad_design = np.r_[pad_design.T, pad].T
    else:
        new_fcols = 0

    vm = np.max((design_matrix.min(), design_matrix.max()))

    # Plot design matrix
    ax = plt.axes([.1, .05, .8, .85])
    #cax = ax.pcolor( pad_design,cmap=cm.binary )
    cax = ax.pcolor(pad_design, cmap=cm.coolwarm,
                    vmin=-vm, vmax=vm)
    ax.set_xlabel('Regressors')
    ax.set_ylabel('Observations')
    tks = np.arange(1, len(regressor_names)+1)
    ax.set_xticks(tks-.5+new_cols)
    ax.set_xticklabels(tks)
    ax.xaxis.tick_top()
    ax.xaxis.set_label_position('top')

    # Space y-ticks depending on the number of observations
    if num_observations < 11:
        tkstep = 1
    elif num_observations < 21:
        tkstep = 2
    elif num_observations < 51:
        tkstep = 5
    elif num_observations < 101:
        tkstep = 10
    elif num_observations < 501:
        tkstep = 25
    else:
        tkstep = 100

    tks = np.arange(new_rows, new_rows+num_observations, tkstep)
    ax.set_yticks(tks+.5)
    ax.set_yticklabels(tks-new_rows)

    cb_step_y = new_rows / pad_design.shape[0]
    cb_step_y *= 1.3
    cb_step_x = new_fcols/pad_design.shape[1]
    cb_step_x = .92 - cb_step_x + cb_step_x/3

    cb_ax = f.add_axes([cb_step_x, cb_step_y, .025, .9-cb_step_y])
    plt.colorbar(cax, ax=ax, cax=cb_ax)

    # Turn box off
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    ax.spines['bottom'].set_visible(False)
    ax.spines['left'].set_visible(False)

    for ii in range(num_regressors):
        if summary_lines:
            x = design_matrix[:, ii]
            if np.abs(np.diff(x)).sum() != 0:
                rn = np.max((np.abs(x.max()), np.abs(x.min())))
                if (x.max() > 0) and (x.min() < 0):
                    rn = rn*2
                y = (x-x.min()) / (rn) * .8 + .1
            else:
                # Constant regressor
                y = np.ones_like(x) * .9
            if num_observations > 50:
                ax.plot(y+ii+new_cols, np.arange(new_rows, new_rows+num_observations)+.5, 'k')
            else:
                ax.plot(y+ii+new_cols, np.arange(new_rows, new_rows+num_observations)+.5, 'k|', markersize=5)

        # Add white dividing line
        if ii < num_regressors-1:
            ax.plot([ii+1+new_cols, ii+1+new_cols], [new_rows, new_rows+num_observations], 'w', linewidth=4)

    for ii in range(len(regressor_names)):
        ax.text(1.5+ii, (new_rows)-step, regressor_names[ii], horizontalalignment='center')

    if contrasts is not None:
        for ii in range(len(regressor_names)):
            for jj in range(len(contrast_names)):
                if ii == 0:
                    ax.text(.5, new_rows-((2+jj) * step), 'C: ' + contrast_names[jj],
                            horizontalalignment='center')

                ax.text(1.5+ii, new_rows-((2+jj)*step), str(contrasts[jj, ii]),
                        horizontalalignment='center')

    if ftest_names is not None:
        for ii in range(len(ftest_names)):
            ax.text(num_regressors+2.5+ii, new_rows-step, 'F: ' + ftest_names[ii],
                    horizontalalignment='center')
            for jj in range(len(contrast_names)):
                ax.text(num_regressors+2.5+ii, new_rows-((2+jj)*step), str(ftests[ii, jj]))

    return f
