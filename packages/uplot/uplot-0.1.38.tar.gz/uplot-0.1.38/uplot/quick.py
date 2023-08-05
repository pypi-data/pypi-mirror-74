"""
quick.py
Written in Python3
author: C. Lockhart <chris@lockhartlab.org>
"""

from . import core

import pandas as pd
from typelike import ArrayLike


# Plot
def plot(data_or_x, y=None, xtitle=None, ytitle=None, xrotation=None, figsize=None, legend=False, marker=None, show=True):
    """


    Parameters
    ----------
    data_or_x : pandas.DataFrame or ArrayLike
        DataFrame to plot, or the `x` dimension for plotting.
    y : ArrayLike or None
        If present, `y` dimension for plotting. If this is an array of arrays, every interior array will be treated
        as a dependent variable to `x`.
    xtitle : str or None
        Title of the `x` axis.
    ytitle : str or None
        Title of the `y` axis.
    legend : bool or ArrayLike
        If bool, yes or no if the legend should be display. If this is ArrayLike, then these are the legend titles.
    show : bool
        Should the figure be shown?

    Returns
    -------
    matplotlib.pyplot.figure.Figure or None
        Figure or nothing, depending on `show`.
    """

    # Handle data_or_x
    if isinstance(data_or_x, pd.DataFrame):
        data = data_or_x
        x = None
    else:
        data = None
        x = data_or_x

    # Create figure
    figure = core.figure(data=data, x=x, y=y, style={
        'xtitle': xtitle,
        'ytitle': ytitle,
        'xrotation': xrotation,
        'figsize': figsize,
        'legend': legend
    })

    # Start building the figure
    figure += core.line(style={'marker': marker})

    # Return
    if show:
        figure.to_mpl(show=show)
    else:
        return figure.to_mpl(show=False)

