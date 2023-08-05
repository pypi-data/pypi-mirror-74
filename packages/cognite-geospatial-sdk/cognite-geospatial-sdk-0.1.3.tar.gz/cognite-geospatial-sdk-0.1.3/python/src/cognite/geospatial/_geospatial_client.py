# Copyright 2020 Cognite AS
"""Cognite Geospatial API store and query spatial data.

 Spatial objects represent a revision of an object present in a geographic position at a point
 in time (or for all time if no time is specified). The object has a position according to a
 specific coordinate reference system and can be a point, linestring, polygon, or surface
 defined by a position in 3-dimensional space. Within the defined area, the object can have
 attributes or values associated with more specific points or areas.

"""
import asyncio
import base64
import concurrent
import os
import threading
from functools import partial
from typing import Dict, List

import cognite.geospatial._client
import numpy as np
from cognite.geospatial._client import (
    AttributeTypeDTO,
    CoreGeometrySpatialItemDTO,
    CreateSpatialItemsDTO,
    ExternalIdDTO,
    FeatureLayersFilterDTO,
    GeometryProjectionDTO,
    InternalIdDTO,
    SpatialDataDTO,
    SpatialDataRequestDTO,
    SpatialDatasDTO,
    SpatialIdsDTO,
    SpatialItemsProjectionDTO,
    SpatialRelationshipDTO,
    SpatialSearchRequestDTO,
)
from cognite.geospatial._client.rest import ApiException
from cognite.geospatial._spatial_filter_object import SpatialFilterObject
from cognite.geospatial._spatial_object import SpatialObject
from cognite.geospatial.types import Geometry, SpatialRelationship
from tornado.ioloop import IOLoop

TORNADO_TIMEOUT_ERROR = 599
TORNADO_MESSAGE = "Could not get a response from the server. The server is down or timeout happens."


def _check_id(id: int):
    if id is not None and id > 9007199254740991:
        raise ValueError("Invalid value for `id`, must be a value less than or equal to `9007199254740991`")
    if id is not None and id < 1:
        raise ValueError("Invalid value for `id`, must be a value greater than or equal to `1`")


def _check_external_id(external_id: str):
    if external_id is None:
        raise ValueError("Invalid value for `external_id`, must not be `None`")
    if external_id is not None and len(external_id) > 255:
        raise ValueError("Invalid value for `external_id`, length must be less than or equal to `255`")


def _throw_exception(ex):
    # check for tornado timout exception code
    if ex.status == TORNADO_TIMEOUT_ERROR:
        raise ApiException(status=TORNADO_TIMEOUT_ERROR, reason=TORNADO_MESSAGE)
    raise ex


def _check_id_geometry(id: int = None, external_id: str = None, wkt=None, crs=None):
    if id is None and external_id is None and wkt is None:
        raise ValueError("Either id or external_id or wkt must be provided")
    if wkt is not None and crs is None:
        raise ValueError("crs must be provided")


def _check_either_external_id(id: int = None, external_id: str = None):
    if id is None and external_id is None:
        raise ValueError("Either id or external_id must be provided")


def _create_projection(projection: str = None):
    if projection is None or projection == "2d":
        proj = GeometryProjectionDTO._2D
    elif projection == "3d":
        proj = GeometryProjectionDTO._3D
    else:
        raise ValueError("Projection must be 2d or 3d")
    return proj


def _first_item(response):
    if response is None or response.items is None or len(response.items) == 0:
        return None
    return response.items[0]


def _create_spatial_ids(id: int = None, external_id: str = None):
    _check_either_external_id(id, external_id)
    if id is not None:
        item = InternalIdDTO(id=id)
    elif external_id is not None:
        item = ExternalIdDTO(external_id=external_id)
    return SpatialIdsDTO(items=[item])


def _is_primitive(obj: object):
    return isinstance(obj, str) or isinstance(obj, int) or isinstance(obj, float)


class CogniteGeospatialClient:
    """
    Main class for the seismic client
    """

    def __init__(
        self,
        api_key: str = None,
        base_url: str = None,
        port: int = None,
        api_token: str = None,
        project: str = None,
        timeout: int = 600,  # seconds
    ):
        # configure env
        api_key = api_key or os.getenv("COGNITE_API_KEY")
        if (api_key is None or not api_key.strip()) and api_token is None:
            raise ValueError(
                "You have either not passed an api key or not set the COGNITE_API_KEY environment variable."
            )
        self.configuration = cognite.geospatial._client.Configuration()
        self.configuration.client_side_validation = False
        if api_token is None and api_key is not None:
            self.configuration.api_key["api-key"] = api_key.strip()
        self.configuration.access_token = api_token

        base_url = base_url or "api.cognitedata.com"
        base_url = base_url.strip("/")
        port = port or 443

        if not base_url.startswith("http://") and not base_url.startswith("https://"):
            if port == 443:
                base_url = "https://" + base_url
            else:
                base_url = "http://" + base_url

        self.configuration.host = base_url + ":" + str(port)

        self.project = project or os.getenv("COGNITE_PROJECT")
        if self.project is None:
            raise ValueError("Project must be provided")

        api_client = cognite.geospatial._client.ApiClient(self.configuration)
        api_client.user_agent = "Cognite-Geospatial-SDK/python"
        self.api = cognite.geospatial._client.SpatialApi(api_client)
        self.timeout = timeout

    async def get_spatial_info_async(self, id: int = None, external_id: str = None):
        """Retrieves spatial item information by internal ids or external ids.
        """
        spatial_by_ids = _create_spatial_ids(id, external_id)
        try:
            response = await self.api.by_ids_spatial_items(self.project, spatial_by_ids, _request_timeout=self.timeout)
            return _first_item(response)
        except ApiException as e:
            _throw_exception(e)

    def get_spatial_info(self, id: int = None, external_id: str = None):
        """Retrieves spatial item information by internal ids or external ids.
        """
        run_func = partial(self.get_spatial_info_async, id, external_id)
        item = IOLoop.current().run_sync(run_func, self.timeout)
        return item

    async def delete_spatial_async(self, id: int = None, external_id: str = None):
        """Delete spatial item by internal ids or external ids.
        """
        spatial_delete_ids = _create_spatial_ids(id, external_id)
        try:
            response = await self.api.delete_spatial(self.project, spatial_delete_ids, _request_timeout=self.timeout)
            return _first_item(response)
        except ApiException as e:
            _throw_exception(e)

    def delete_spatial(self, id: int = None, external_id: str = None):
        """Delete spatial item by internal ids or external ids.
        """
        run_func = partial(self.delete_spatial_async, id, external_id)
        item = IOLoop.current().run_sync(run_func, self.timeout)
        return item

    async def get_spatial_async(self, id: int = None, external_id: str = None):
        """Retrieves spatial item data by internal ids or external ids.
        """
        _check_either_external_id(id, external_id)
        if id is not None:
            item = InternalIdDTO(id=id)
        elif external_id is not None:
            item = ExternalIdDTO(external_id=external_id)

        spatial_item = await self.get_spatial_info_async(id=id, external_id=external_id)
        if spatial_item is None:
            return None

        geometry = None
        attributes = spatial_item.attributes
        if attributes is not None:
            if "geometry" in attributes:
                geometry = attributes["geometry"]
            elif "coverage" in attributes:
                geometry = attributes["coverage"]
        spatial_object = SpatialObject(
            client=self,
            id=spatial_item.id,
            external_id=spatial_item.external_id,
            name=spatial_item.name,
            description=spatial_item.description,
            source=spatial_item.source,
            crs=spatial_item.crs,
            metadata=spatial_item.metadata,
            layer=spatial_item.layer,
            asset_ids=spatial_item.asset_ids,
            geometry=geometry,
            last_updated_time=spatial_item.last_updated_time,
            created_time=spatial_item.created_time,
        )

        try:
            layerFilter = FeatureLayersFilterDTO(names=[spatial_item.layer])
            response = await self.api.find_feature_layer(self.project, layerFilter, _request_timeout=self.timeout)
            layer = _first_item(response)
            if layer is not None:
                for data_item in layer.attributes:
                    data_request = SpatialDataRequestDTO(spatial_id=item, name=data_item.name)
                    data = await self.api.get_spatial_items_data(
                        self.project, data_request, _request_timeout=self.timeout
                    )
                    if data is not None and len(data.items) > 0:
                        ditem = data.items[0]
                        byte_buffer = base64.urlsafe_b64decode(ditem.value)
                        if data_item.type == AttributeTypeDTO.DOUBLE:
                            vector = np.frombuffer(byte_buffer, dtype=">d")
                            spatial_object.add_double(data_item.name, vector)
                        elif data_item.type == AttributeTypeDTO.INT:
                            vector = np.frombuffer(byte_buffer, dtype=">i")
                            spatial_object.add_integer(data_item.name, vector)
                        elif data_item.type == AttributeTypeDTO.BOOLEAN:
                            vector = np.frombuffer(byte_buffer, dtype=np.uint8)
                            bit_array = np.unpackbits(vector, bitorder="little")
                            spatial_object.add_boolean(data_item.name, np.array(bit_array, dtype=bool))
                        elif data_item.type == AttributeTypeDTO.STRING:
                            spatial_object.add_text(data_item.name, str(byte_buffer, "utf-8"))

        except ApiException as e:
            _throw_exception(e)

        return spatial_object

    def get_spatial(self, id: int = None, external_id: str = None):
        """Retrieves spatial item data by internal ids or external ids.
        """
        run_func = partial(self.get_spatial_async, id, external_id)
        result = IOLoop.current().run_sync(run_func, self.timeout)
        return result

    async def find_spatial_async(
        self,
        layer: str,
        spatial_relationship: SpatialRelationship = None,
        geometry: Geometry = None,
        distance: float = None,
        name: str = None,
        asset_ids: List[int] = None,
        attributes: List[str] = None,
        metadata: Dict[str, str] = None,
        source: str = None,
        external_id_prefix: str = None,
        limit: int = 10,
    ):
        """Searches and returns the spatial items based on resource type content or coordinates.
        """

        def _create_geometry(geometry: Geometry):
            _check_id_geometry(geometry.id, geometry.external_id, geometry.wkt, geometry.crs)
            if geometry.id is not None:
                _check_id(geometry.id)
            if geometry.external_id is not None:
                _check_external_id(geometry.external_id)
            return cognite.geospatial._client.GeometryDTO(
                id=geometry.id,
                external_id=geometry.external_id,
                wkt=geometry.wkt,
                crs=geometry.crs,
                local_vars_configuration=self.configuration,
            )

        spatial_filter = None
        if spatial_relationship is not None:
            geometry = _create_geometry(geometry)
            spatial_relationship = SpatialRelationshipDTO(
                name=spatial_relationship.value, distance=distance, local_vars_configuration=self.configuration
            )
            spatial_filter = SpatialFilterObject(
                spatial_relationship, geometry, local_vars_configuration=self.configuration
            )
        spatial_search_request = SpatialSearchRequestDTO(
            limit=limit,
            name=name,
            asset_ids=asset_ids,
            metadata=metadata,
            source=source,
            external_id_prefix=external_id_prefix,
            spatial_filter=spatial_filter,
            layer=layer,
            attributes=attributes,
        )

        try:
            response = await self.api.search_spatial(
                self.project, spatial_search_request_dto=spatial_search_request, _request_timeout=self.timeout
            )
            return response.items if response is not None else None
        except ApiException as e:
            _throw_exception(e)

    async def get_coverage_async(self, id: int = None, external_id: str = None, projection: str = None):
        """Retrieves spatial item information by internal ids or external ids.
        """
        spatial_by_ids = _create_spatial_ids(id, external_id)
        proj = _create_projection(projection)
        spatialite_projection = SpatialItemsProjectionDTO(ids=spatial_by_ids, projection=proj)
        try:
            response = await self.api.get_spatial_coverage(
                self.project, spatialite_projection, _request_timeout=self.timeout
            )
            return _first_item(response)
        except ApiException as e:
            _throw_exception(e)

    def get_coverage(self, id: int = None, external_id: str = None, projection: str = None):
        """Retrieves spatial item information by internal ids or external ids.
        """
        run_func = partial(self.get_coverage_async, id, external_id, projection)
        item = IOLoop.current().run_sync(run_func, self.timeout)
        return item

    def find_spatial(
        self,
        layer: str,
        spatial_relationship: SpatialRelationship = None,
        geometry: Geometry = None,
        distance=None,
        name: str = None,
        asset_ids: List[int] = None,
        attributes: List[str] = None,
        metadata: Dict[str, str] = None,
        source: str = None,
        external_id_prefix: str = None,
        limit: int = 10,
    ):
        """Searches and returns the spatial items based on resource type content or coordinates.
        """
        run_func = partial(
            self.find_spatial_async,
            layer,
            spatial_relationship,
            geometry,
            distance,
            name,
            asset_ids,
            attributes,
            metadata,
            source,
            external_id_prefix,
            limit,
        )
        result = IOLoop.current().run_sync(run_func, self.timeout)
        return result

    def create_geometry(
        self,
        name: str = None,
        external_id: str = None,
        description: str = None,
        metadata=None,
        layer: str = None,
        source: str = None,
        crs: str = None,
        geometry: str = None,
        asset_ids: List[int] = None,
    ):
        attributes = {"geometry": geometry}
        run_func = partial(
            self.create_spatial_async,
            name,
            external_id,
            description,
            metadata,
            layer,
            source,
            crs,
            attributes,
            asset_ids,
        )
        result = IOLoop.current().run_sync(run_func, self.timeout)
        return result

    async def create_spatial_async(
        self,
        name: str = None,
        external_id: str = None,
        description: str = None,
        metadata: dict = None,
        layer: str = None,
        source: str = None,
        crs: str = None,
        attributes: dict = None,
        asset_ids: List[int] = None,
    ):
        spatial_item = CoreGeometrySpatialItemDTO(
            name=name,
            external_id=external_id,
            description=description,
            metadata=metadata,
            asset_ids=asset_ids,
            layer=layer,
            source=source,
            attributes=attributes,
            crs=crs,
        )

        create_spatial_items = CreateSpatialItemsDTO(items=[spatial_item])
        try:
            response = await self.api.create_spatial(self.project, create_spatial_items, _request_timeout=self.timeout)
            return _first_item(response)
        except ApiException as e:
            _throw_exception(e)

    def create_spatial(
        self,
        name: str = None,
        external_id: str = None,
        description: str = None,
        metadata=None,
        layer: str = None,
        source: str = None,
        crs: str = None,
        attributes: dict = None,
        asset_ids: List[int] = None,
    ):
        run_func = partial(
            self.create_spatial_async,
            name,
            external_id,
            description,
            metadata,
            layer,
            source,
            crs,
            attributes,
            asset_ids,
        )
        result = IOLoop.current().run_sync(run_func, self.timeout)
        return result

    async def add_spatial_item_data_async(self, id: int, name: str, value):
        value_buff = None
        if isinstance(value, str):
            value_buff = bytearray(value, encoding="utf-8")
        elif value.dtype == "float64":
            value_buff = value.astype(">f8").tobytes()
        elif value.dtype == "float32":
            value_buff = value.astype(">f4").tobytes()
        elif value.dtype == "int64":
            value_buff = value.astype(">i8").tobytes()
        elif value.dtype == "int32":
            value_buff = value.astype(">i4").tobytes()
        elif value.dtype == "bool":
            end_value = np.append(value.astype(np.uint8), 1)
            pack_int = np.packbits(end_value, bitorder="little")  # uint8
            value_buff = pack_int.tobytes()

        byte_buffer = base64.urlsafe_b64encode(value_buff)
        spatial_data = SpatialDatasDTO(
            items=[SpatialDataDTO(item_id=InternalIdDTO(id=id), name=name, value=str(byte_buffer, "utf-8"))]
        )
        try:
            response = await self.api.add_spatial_item_data(self.project, spatial_data, _request_timeout=self.timeout)
            if response is not None:
                return response.items
            return None
        except ApiException as e:
            _throw_exception(e)

    async def calculate_spatial_coverage_async(self, id: int = None, external_id: str = None):
        """Calculate spatial item coverage by internal ids or external ids.
        """
        spatial_by_ids = _create_spatial_ids(id, external_id)
        try:
            response = await self.api.calculate_spatial_coverage(
                self.project, spatial_by_ids, _request_timeout=self.timeout
            )
            return response
        except ApiException as e:
            _throw_exception(e)

    def calculate_spatial_coverage(self, id: int = None, external_id: str = None):
        """Calculate spatial item coverage by internal ids or external ids.
        """
        run_func = partial(self.calculate_spatial_coverage_async, id, external_id)
        result = IOLoop.current().run_sync(run_func, self.timeout)
        return result

    async def save_spatial_async(
        self,
        name: str = None,
        external_id: str = None,
        description: str = None,
        metadata=None,
        layer: str = None,
        source: str = None,
        crs: str = None,
        attributes: Dict = None,
        asset_ids: List[int] = None,
    ):
        item = None
        if external_id is not None:
            item = await self.get_spatial_info_async(external_id=external_id)
        if item is None:
            simple_attr = {}
            for name in attributes:
                val = attributes[name]
                if _is_primitive(val):
                    simple_attr[name] = val

            item = await self.create_spatial_async(
                name, external_id, description, metadata, layer, source, crs, simple_attr, asset_ids
            )
        if item is not None:
            for name in attributes:
                value = attributes[name]
                if not _is_primitive(value):
                    _ = await self.add_spatial_item_data_async(item.id, name, value)
        await self.calculate_spatial_coverage_async(id=item.id)
        return item

    def save_spatial(
        self,
        name: str = None,
        external_id: str = None,
        description: str = None,
        metadata=None,
        layer: str = None,
        source: str = None,
        crs: str = None,
        attributes=None,
        asset_ids: List[int] = None,
    ):
        run_func = partial(
            self.save_spatial_async, name, external_id, description, metadata, layer, source, crs, attributes, asset_ids
        )
        result = IOLoop.current().run_sync(run_func, self.timeout)
        return result
