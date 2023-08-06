import os

import pandas as pd
import geopandas as gpd


def save(obj, path, mode="w", **kwargs):
    """Save data in a GeoPackage at the given path.

    Args:
        obj (:py:class:`~gps_data_analyzer.gps_data._GpsBase` or ``pandas.DataFrame``):
            The object to save.
        path (str): The path to the GeoPackage.
        kwargs: The given kwargs will be passed to :func:`pandas.DataFrame.to_file`.

    Note:
        If the GeoPackage exists, it is possible to add a new layer with the 'layer'
        argument.
    """
    _create_dir(path)
    _format_ext(path, ".gpkg")
    tmp = obj.copy()

    # Convert datetime to string
    if obj._has_time:
        tmp["datetime"] = tmp["datetime"].apply(
            pd.Timestamp.strftime, args=[obj.datetime_format])

    # Save to GeoPackage
    tmp.to_file(path, driver="GPKG", encoding="utf-8", **kwargs)

    # TODO: Fiona>=0.19 will be able to store metadata in GPKG files. It would be nice
    # to store the data type in metadata so the load() function can know which class it
    # should call.


def _load(path):
    """Load data from a GeoPackage at the given path.

    Args:
        path (str): The path to the GeoPackage.

    Note:
        This function returns a ``pandas.DataFrame``. Use
        :func:`~gps_data_analyzer.gps_data.load_gps_points` or
        :func:`~gps_data_analyzer.gps_data.load_gps_points` to get a
        :py:class:`~gps_data_analyzer.gps_data.GpsPoints` or a
        :py:class:`~gps_data_analyzer.gps_data.PoiPoints` object.
    """
    data = gpd.read_file(path, driver="GPKG")

    # If everything could be imported properly, the new object is returned
    return data


def _create_dir(path):
    # Create directory if it does not exist
    dirname = os.path.dirname(path)
    if dirname:  # pragma: no cover - Not worth testing
        os.makedirs(dirname, exist_ok=True)


def _format_ext(path, ext):
    ext = os.path.splitext(path)[-1]
    if not ext:
        path += ".zrd"
