﻿'''_813.py

ConicalSetMicroGeometryConfig
'''


from typing import List

from mastapy.gears.manufacturing.bevel import _798, _807, _814
from mastapy._internal import constructor, conversion
from mastapy._internal.python_net import python_net_import

_CONICAL_SET_MICRO_GEOMETRY_CONFIG = python_net_import('SMT.MastaAPI.Gears.Manufacturing.Bevel', 'ConicalSetMicroGeometryConfig')


__docformat__ = 'restructuredtext en'
__all__ = ('ConicalSetMicroGeometryConfig',)


class ConicalSetMicroGeometryConfig(_814.ConicalSetMicroGeometryConfigBase):
    '''ConicalSetMicroGeometryConfig

    This is a mastapy class.
    '''

    TYPE = _CONICAL_SET_MICRO_GEOMETRY_CONFIG
    __hash__ = None

    def __init__(self, instance_to_wrap: 'ConicalSetMicroGeometryConfig.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def gear_micro_geometry_configuration(self) -> 'List[_798.ConicalGearMicroGeometryConfig]':
        '''List[ConicalGearMicroGeometryConfig]: 'GearMicroGeometryConfiguration' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.GearMicroGeometryConfiguration, constructor.new(_798.ConicalGearMicroGeometryConfig))
        return value

    @property
    def meshes(self) -> 'List[_807.ConicalMeshMicroGeometryConfig]':
        '''List[ConicalMeshMicroGeometryConfig]: 'Meshes' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.Meshes, constructor.new(_807.ConicalMeshMicroGeometryConfig))
        return value
