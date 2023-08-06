#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# =============================================================================
# ___  ___                       _____           _______
# |  \/  |                      |_   _|         | | ___ \
# | .  . |_   _ ___  ___  ___     | | ___   ___ | | |_/ / _____  __
# | |\/| | | | / __|/ _ \/ _ \    | |/ _ \ / _ \| | ___ \/ _ \ \/ /
# | |  | | |_| \__ \  __/ (_) |   | | (_) | (_) | | |_/ / (_) >  <
# \_|  |_/\__,_|___/\___|\___/    \_/\___/ \___/|_\____/ \___/_/\_\
#
# @author:  Nicolas Karasiak
# @site:    www.karasiak.net
# @git:     www.github.com/nkarasiak/MuseoToolBox
# =============================================================================
"""
The :mod:`museotoolbox.datasets` module gathers available datasets for testing
`MuseoToolBox`.
"""
import os

__pathFile = os.path.dirname(os.path.realpath(__file__)).replace("\\","/")

def load_historical_data(return_X_y=False, return_X_y_g=False,
                         centroid=False, low_res=False):
    """
    Get a sample of a french Historical map made by the army (carte d'état-major).
    These maps are used to identify forest in the 1800's.

    Field of the vector containning the label class is `Class`.

    ===================   ==============
    Classes                            5
    Samples total                  12647
    Number of polygons                17
    Dimensionality                     3
    Features                     integer
    ===================   ==============


    Parameters
    -----------
    return_X_y : boolean, optional (default=False).
        If True, returns ``(data, target)`` instead of a path of files.
    return_X_y_g : boolean, optional (default=False).
        If True, returns the polygon id for each feature.
    centroid : boolean, optional (default=False).
        If True, return the path of the centroid for each feature.
    low_res : boolean, optinal (default=False).
        If True returns a low resolution of the raster, so you will have also less features.

    Returns
    -------
    raster,vector : list of str.
        Return path of raster and vector files if
    (data, target) : tuple if ``return_X_y`` is True
    (data, target, group) : tuple if ``return_X_y_g`` is True

    References
    -----------
    https://github.com/nkarasiak/HistoricalMap

    Examples
    --------
    >>> X, y = load_historical_data(return_X_y=True)
    >>> X.shape, y.shape
    (12647, 3) (12647,)
    >>> raster,vector = load_historical_data()
    >>> raster
    /mnt/bigone/lib/MuseoToolBox/museotoolbox/datasets/_historicalmap/map_compress.tif
    >>> vector
    /mnt/bigone/lib/MuseoToolBox/museotoolbox/datasets/_historicalmap/train.gpkg
    """
    to_return = []
    separator = '/'
    if low_res:
        raster = __pathFile+'{0}_historicalmap{0}map_lowres.tif'.format(separator)
    else:
        raster = __pathFile+'{0}_historicalmap{0}map_compress.tif'.format(separator)
                
    vector = __pathFile+'{0}_historicalmap{0}train.gpkg'.format(separator)
    
    if return_X_y or return_X_y_g:
        from ..processing import extract_ROI
        if centroid:
            vector = __pathFile+'{0}_historicalmap{0}train_centroid.gpkg'.format(separator)
            
        if return_X_y_g:
            X, y, g = extract_ROI(raster, vector, 'Class', 'uniquefid')
            to_return = (X, y, g)
        else:
            X, y = extract_ROI(raster, vector, 'Class')
            to_return = (X, y)
    else:
        to_return.append(raster)
        if centroid:
            vectorCentroid = __pathFile+'{0}_historicalmap{0}train_centroid.gpkg'.format(separator)
            to_return.append(vectorCentroid)
        else:
            to_return.append(vector)

    return to_return
