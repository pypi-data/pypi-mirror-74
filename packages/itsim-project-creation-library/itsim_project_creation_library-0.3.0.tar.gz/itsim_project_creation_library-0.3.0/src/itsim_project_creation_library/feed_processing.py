from pathlib import Path
from typing import (
    Any,
    Dict,
    List,
    Optional,
    Set,
    Tuple,
    Union,
)
from gtfs_kit import Feed
from gtfs_kit import read_feed as read_gtfs
from pandas import (
    DataFrame,
    merge,
)
from .utils import log_progress


def extract_data_from_feed(feed: Feed) -> Tuple[DataFrame]:
    """Return the content of every feed's element into a dataframe.

    Retruns None value if the dataframe is optional and absent from feed.

    Args:
        feed: the feed to extract the dataframes from

    Returns:
        dataframes included into the given feed in the following order:
            agency, stops, routes, trips, stop_times,
            calendar, calendar_dates, fare_attributes, fare_rules,
            shapes, frequencies, transfers, feed_info
    """
    agency = feed.agency
    stops = feed.stops
    routes = feed.routes
    trips = feed.trips
    stop_times = feed.stop_times
    calendar = feed.calendar
    calendar_dates = feed.calendar_dates
    fare_attributes = feed.fare_attributes
    fare_rules = feed.fare_rules
    shapes = feed.shapes
    frequencies = feed.frequencies
    transfers = feed.transfers
    feed_info = feed.feed_info
    return (agency, stops, routes, trips, stop_times,
            calendar, calendar_dates, fare_attributes, fare_rules,
            shapes, frequencies, transfers, feed_info)


def add_suffix(
    data: DataFrame,
    column_name: str,
    to_suffix: List[bool],
    suffix: str,
) -> DataFrame:
    """Add a suffix to the indicated entries.

    Args:
        data: dataframe to modify (inplace)
        column_name: name of the column in which potential suffixes will be added
        to_suffix: a list that indicates the entries to suffix
        suffix: the suffix to add

    Returns:
        modified dataframe
    """
    if data is not None and len(to_suffix):
        entries_to_suffix = data.loc[:, column_name].isin(to_suffix)
        result = data.copy()
        result.loc[entries_to_suffix, column_name] = data.loc[:, column_name] + suffix
        return result
    else:
        return data


def append(df1: DataFrame, df2: DataFrame, column_name: str, suffix: str) -> Tuple[DataFrame, Set[Any]]:
    """Append df2 to df1, keeping a log of the updates on the id column.

    Args:
        df1: df to use
        df2: df to append (altered after processing)
        column_name: name of the column that might be suffixed
        suffix: suffix to add

    Returns:
        (
            completed DataFrame,
            log of the changes made to the index of df2,
        )
    """
    if df1 is not None:
        to_suffix = set(df1.loc[:, column_name].unique()) & set(df2.loc[:, column_name].unique())
        df2_suffix = add_suffix(df2, column_name, to_suffix, suffix)
        df = df1.append(df2_suffix)
        return df, to_suffix
    else:
        return df2, set()


def add_data(data: DataFrame, data_to_add: DataFrame) -> DataFrame:
    """Aggregate a dataframe to add to a given dataframe.

    Args:
        data: the origin dataframe
        data_to_add: the dataframe to aggregate

    Returns:
        the aggregated dataframe
    """
    if data_to_add is None:
        result_data = None if data is None else data.copy()
    else:
        result_data = data_to_add if data is None else data.append(data_to_add)
    return result_data


def append_and_suffix(data: DataFrame, data_to_add: DataFrame, column_ref: str, suffix: str, data_to_suffix: Tuple[DataFrame, str]) -> DataFrame:
    """Concatenate two dataframes and suffix the entries of the second dataframe that have an id that is already used in the first.

    Args:
        data: the first dataframe
        data_to_add: dataframe to concatenate to the first
        column_ref: the name of the column that will be used to make the join between the two dataframes
        suffix: the suffix to add
        data_to_suffix: values to suffix reference

    Returns:
        result of concatenation
    """
    data, to_suffix = append(data, data_to_add, column_ref, suffix)
    for df_to_suffix, column in data_to_suffix:
        add_suffix(df_to_suffix, column, to_suffix, suffix)
    return data


def merge_gtfs(origin_gtfs_path: Union[Path, str]) -> Feed:
    """Generate a new GTFS feed as a result of merging several GTFS feeds.

    Elements that have the same ID are suffixed.

    Args:
        origin_gtfs_path: directory path containing original GTFS files

    Returns:
        the merged feed
    """
    if not isinstance(origin_gtfs_path, Path):
        origin_gtfs_path = Path(origin_gtfs_path)
    if not origin_gtfs_path.is_dir():
        return None
    paths = [p for p in origin_gtfs_path.iterdir() if p.is_file()]
    files_count = len(paths)
    if not files_count:
        return None
    # Get dataframes of the first feed
    first_feed = read_gtfs(paths[0], dist_units='km')
    log_progress(f"Merging file 1/{files_count}: {paths[0]}")
    (
        agency, stops, routes, trips, stop_times,
        calendar, calendar_dates, fare_attributes, fare_rules,
        shapes, frequencies, transfers, feed_info
    ) = extract_data_from_feed(feed=first_feed)
    for i, path in enumerate(paths[1:], 1):
        log_progress(f"Merging file {i + 1}/{files_count}: {path}")
        feed_to_add = read_gtfs(path, dist_units='km')
        suffix = f'_{i}'
        # Aggregate dataframes
        (
            agency_to_add, stops_to_add, routes_to_add, trips_to_add, stop_times_to_add,
            calendar_to_add, calendar_dates_to_add, fare_attributes_to_add, fare_rules_to_add,
            shapes_to_add, frequencies_to_add, transfers_to_add, feed_info_to_add
        ) = extract_data_from_feed(feed=feed_to_add)
        agency = append_and_suffix(data=agency, data_to_add=agency_to_add,
                                   column_ref='agency_id', suffix=suffix,
                                   data_to_suffix=[
                                       (routes_to_add, 'agency_id'),
                                       (fare_attributes_to_add, 'agency_id')
                                   ])
        stops = append_and_suffix(data=stops, data_to_add=stops_to_add,
                                  column_ref='stop_id', suffix=suffix,
                                  data_to_suffix=[
                                      (stop_times_to_add, 'stop_id'),
                                      (transfers_to_add, 'from_stop_id'),
                                      (transfers_to_add, 'to_stop_id')
                                  ])
        routes = append_and_suffix(data=routes, data_to_add=routes_to_add,
                                   column_ref='route_id', suffix=suffix,
                                   data_to_suffix=[
                                       (trips_to_add, 'route_id'),
                                       (fare_rules_to_add, 'route_id')
                                   ])
        trips = append_and_suffix(data=trips, data_to_add=trips_to_add,
                                  column_ref='trip_id', suffix=suffix,
                                  data_to_suffix=[
                                      (stop_times_to_add, 'trip_id'),
                                      (frequencies_to_add, 'trip_id')
                                  ])
        stop_times = add_data(stop_times, stop_times_to_add)
        calendar = append_and_suffix(data=calendar, data_to_add=calendar_dates_to_add,
                                     column_ref='service_id', suffix=suffix,
                                     data_to_suffix=[
                                         (trips_to_add, 'service_id'),
                                         (calendar_dates_to_add, 'service_id')
                                     ])
        calendar_dates = add_data(calendar_dates, calendar_dates_to_add)
        fare_attributes = append_and_suffix(data=fare_attributes, data_to_add=fare_attributes_to_add,
                                            column_ref='fare_id', suffix=suffix,
                                            data_to_suffix=[
                                                (fare_rules_to_add, 'fare_id')
                                            ])
        fare_rules = add_data(fare_rules, fare_rules_to_add)
        shapes = append_and_suffix(data=shapes, data_to_add=shapes_to_add,
                                   column_ref='shape_id', suffix=suffix,
                                   data_to_suffix=[
                                       (trips_to_add, 'shape_id')
                                   ])
        frequencies = add_data(frequencies, frequencies_to_add)
        transfers = add_data(transfers, transfers_to_add)
        feed_info = add_data(feed_info, feed_info_to_add)
    return Feed(dist_units='km',
                agency=agency, stops=stops, routes=routes, trips=trips, stop_times=stop_times,
                calendar=calendar, calendar_dates=calendar_dates,
                fare_attributes=fare_attributes, fare_rules=fare_rules,
                shapes=shapes, frequencies=frequencies, transfers=transfers,
                feed_info=feed_info)


def clean_data_based_on_ref(data: DataFrame, data_ref: DataFrame, ref_column: str, data_column: Optional[str] = None) -> DataFrame:
    """Remove dataset entries by checking if referenced data in 'ref_column' exists in 'data_ref' dataframe.

    Args:
        data: the dataframe to clean (altered)
        data_ref: the dataframe on which the filter will be based
        ref_column: the column on which the filter is based
        data_column: the column(s) on which the filter is based on data side
            - to use when the column has a different name in 'data' dataframe

    Returns:
        cleaned dataframe
    """
    if data_ref is None:
        return None
    if data_column is None:
        data_column = ref_column
    if data is not None:
        data_to_keep_ids = data_ref.loc[:, ref_column].unique()
        data_to_keep = data.loc[:, data_column].isin(data_to_keep_ids)
        result = data.loc[data_to_keep, :]
    else:
        result = None
    return result


def get_feed_sample_from_bbox(feed: Feed, bbox: Dict[str, float]) -> Feed:
    """Return an original feed sample that is included into the given bounding box.

    This function will keep only the routes that have all their stops into the zone defined by the bounding box.

    Args:
        feed: the original feed to sample
        bbox: the bbox to use to get the feed sample
            Example:
            {
                'north_lat': 46
                'south_lat': 40
                'west_lon': -2
                'east_lon': 5
            }

    Returns:
        sample of the original feed that is included in the given bbox
    """
    (
        agency, stops, routes, trips, stop_times,
        calendar, calendar_dates, fare_attributes, fare_rules,
        shapes, frequencies, transfers, feed_info
    ) = extract_data_from_feed(feed=feed)
    # Evaluate which stops are located into the given bounding box
    stops_in_lat_range = (stops['stop_lat'] <= bbox['north_lat']) & (stops['stop_lat'] >= bbox['south_lat'])
    stops_in_lon_range = (stops['stop_lon'] >= bbox['west_lon']) & (stops['stop_lon'] <= bbox['east_lon'])
    stops_in_bbox = stops_in_lat_range & stops_in_lon_range
    stops.loc[~stops_in_bbox, 'is_not_in_bbox'] = 1
    # Add 'is_in_bbox' to 'stop_times' dataframe
    stop_times = stop_times.merge(stops, on='stop_id', how='left')
    trips_and_nb_stops_in = stop_times.groupby('trip_id', as_index=False).sum()
    # apply a filter on trips
    trips_and_nb_stops_in['to_keep'] = (trips_and_nb_stops_in.loc[:, ('is_not_in_bbox')] == 0)
    trips = merge(trips, trips_and_nb_stops_in[['trip_id', 'to_keep']], on='trip_id')
    trips = trips.loc[trips['to_keep']]
    del trips['to_keep']
    # clean routes, stop_times and stops
    routes = clean_data_based_on_ref(data=routes, data_ref=trips, ref_column='route_id')
    stop_times = clean_data_based_on_ref(data=stop_times, data_ref=trips, ref_column='trip_id')
    del stops['is_not_in_bbox']
    stops = clean_data_based_on_ref(data=stops, data_ref=stop_times, ref_column='stop_id')
    # clean parent stations
    if 'parent_station' not in stops.columns:
        stops.loc[:, 'parent_station'] = ''
    parent_ids_in_stop_ids = stops.loc[:, 'parent_station'].isin(stops.loc[:, 'stop_id'])
    stops.loc[~parent_ids_in_stop_ids, 'parent_station'] = None
    # clean dataframes
    agency = clean_data_based_on_ref(data=agency, data_ref=routes, ref_column='agency_id')
    calendar = clean_data_based_on_ref(data=calendar, data_ref=trips, ref_column='service_id')
    calendar_dates = clean_data_based_on_ref(data=calendar_dates, data_ref=calendar, ref_column='service_id')
    fare_attributes = clean_data_based_on_ref(data=fare_attributes, data_ref=fare_rules, ref_column='fare_id')
    fare_rules = clean_data_based_on_ref(data=fare_rules, data_ref=routes, ref_column='route_id')
    shapes = clean_data_based_on_ref(data=shapes, data_ref=trips, ref_column='shape_id')
    frequencies = clean_data_based_on_ref(data=frequencies, data_ref=trips, ref_column='trip_id')
    transfers = clean_data_based_on_ref(data=stops, data_ref=transfers, ref_column='stop_id')
    return Feed(dist_units='km',
                agency=agency, stops=stops, routes=routes, trips=trips, stop_times=stop_times,
                calendar=calendar, calendar_dates=calendar_dates,
                fare_attributes=fare_attributes, fare_rules=fare_rules,
                shapes=shapes, frequencies=frequencies, transfers=transfers,
                feed_info=feed_info)


def route_types_filter(feed: Feed, route_types: Optional[List[int]] = [], filter_type: Optional[str] = 'keep') -> Feed:
    """Apply a filter on given feed's routes based on route types.

    The 'keep' filter will only keep routes of given route types in feed.
    The 'remove' filter will remove routes of given route types from feed.
    Note that this function also removes the data linked to removed routes (trips, shapes and stop_times).

    Args:
        feed: feed that contains the routes
        route_type: type of the transport
        filter_type: 'keep' (default) or 'remove'

    Returns:
        feed that only contains routes from the given route type
    """
    (
        agency, stops, routes, trips, stop_times,
        calendar, calendar_dates, fare_attributes, fare_rules,
        shapes, frequencies, transfers, feed_info
    ) = extract_data_from_feed(feed=feed)
    if not isinstance(route_types, list):
        route_types = [route_types]
    routes_of_type = routes.loc[:, 'route_type'].isin(route_types)
    if filter_type == 'keep':
        routes = routes.loc[routes_of_type, :]
    elif filter_type == 'remove':
        routes = routes.loc[~routes_of_type, :]
    else:
        raise ValueError("Filter type on routes unknown")
    trips = clean_data_based_on_ref(data=trips, ref_data=routes, ref_column='route_id')
    shapes = clean_data_based_on_ref(data=shapes, ref_data=trips, ref_column='shape_id')
    stop_times = clean_data_based_on_ref(data=stop_times, ref_data=trips, ref_column='trip_id')
    return Feed(dist_units='km',
                agency=agency, stops=stops, routes=routes, trips=trips, stop_times=stop_times,
                calendar=calendar, calendar_dates=calendar_dates,
                fare_attributes=fare_attributes, fare_rules=fare_rules,
                shapes=shapes, frequencies=frequencies, transfers=transfers,
                feed_info=feed_info)


def remove_routes_from_feed_by_short_names(feed: Feed, routes_to_remove_short_names: Optional[Union[str, List[str]]] = []) -> Feed:
    """Remove routes from feed that are included in a list.

    The routes to remove sould be indicated with their short names in the list through the 'routes_to_remove_short_names' argument.
    It is also possible to give a single short name in the case there is only one route to remove.

    Args:
        feed: feed to remove the routes from
        routes_to_remove_short_names: the list of short names or the short name corresponding to the routes to remove from feed.
                                      It is also possible to give a single short name in the case there is only one
                                      route to remove.

    Returns:
        feed without given routes
    """
    (
        agency, stops, routes, trips, stop_times,
        calendar, calendar_dates, fare_attributes, fare_rules,
        shapes, frequencies, transfers, feed_info
    ) = extract_data_from_feed(feed=feed)
    if not isinstance(routes_to_remove_short_names, list):
        routes_to_remove_short_names = [routes_to_remove_short_names]
    # Remove routes
    routes_to_remove = routes['route_short_name'].isin(routes_to_remove_short_names)
    routes = routes.loc[~routes_to_remove, :]
    trips = clean_data_based_on_ref(data=trips, ref_data=routes, ref_column='route_id')
    shapes = clean_data_based_on_ref(data=shapes, ref_data=trips, ref_column='shape_id')
    stop_times = clean_data_based_on_ref(data=stop_times, ref_data=trips, ref_column='trip_id')
    return Feed(dist_units='km',
                agency=agency, stops=stops, routes=routes, trips=trips, stop_times=stop_times,
                calendar=calendar, calendar_dates=calendar_dates,
                fare_attributes=fare_attributes, fare_rules=fare_rules,
                shapes=shapes, frequencies=frequencies, transfers=transfers,
                feed_info=feed_info)


def group_routes(feed: Feed) -> Feed:
    """Regroup routes when they have the same short name and the same agency.

    Resolve the problem of patterns dispached in several routes.
    Add the agency id as a prefix to route short name.

    Args:
        feed: feed to correct

    Returns:
        corrected feed with regrouped routes
    """
    (
        agency, stops, routes, trips, stop_times,
        calendar, calendar_dates, fare_attributes, fare_rules,
        shapes, frequencies, transfers, feed_info
    ) = extract_data_from_feed(feed=feed)
    # Delete duplicate routes
    route_keep = routes.drop_duplicates(subset=['agency_id', 'route_short_name'], keep='first')
    # merge to have the corresponding route to every trip
    # inner merge delete trips that does not match a route
    trips = trips.merge(routes, on='route_id', how='inner')
    # merge to link trips to routes to keep (linked with 'route_short_name' and 'agency_id')
    trips = trips.merge(route_keep, on=['route_short_name', 'agency_id'], how='left')
    # Add name of agency in 'route_short_name'
    route_keep.loc[:, 'route_short_name'] = route_keep['route_short_name'].str.strip() + " - " + route_keep['agency_id']
    # clean to obtain final dataframe
    columns_to_keep = ['route_id_y', 'service_id', 'trip_id', 'trip_headsign', 'direction_id', 'block_id', 'shape_id']
    trips = trips.loc[:, columns_to_keep].rename(columns={'route_id_y': 'route_id'})
    return Feed(dist_units='km',
                agency=agency, stops=stops, routes=routes, trips=trips, stop_times=stop_times,
                calendar=calendar, calendar_dates=calendar_dates,
                fare_attributes=fare_attributes, fare_rules=fare_rules,
                shapes=shapes, frequencies=frequencies, transfers=transfers,
                feed_info=feed_info)


def remove_shapes(feed: Feed) -> Feed:
    """Remove shapes from a given feed.

    Use this function only when shapes are corrupted or not relevant.

    Args:
        feed: input feed

    Returns:
        new feed without shapes
    """
    (
        agency, stops, routes, trips, stop_times,
        calendar, calendar_dates, fare_attributes, fare_rules,
        shapes, frequencies, transfers, feed_info
    ) = extract_data_from_feed(feed=feed)
    return Feed(dist_units='km',
                agency=agency, stops=stops, routes=routes, trips=trips, stop_times=stop_times,
                calendar=calendar, calendar_dates=calendar_dates,
                fare_attributes=fare_attributes, fare_rules=fare_rules,
                shapes=None, frequencies=frequencies, transfers=transfers,
                feed_info=feed_info)
