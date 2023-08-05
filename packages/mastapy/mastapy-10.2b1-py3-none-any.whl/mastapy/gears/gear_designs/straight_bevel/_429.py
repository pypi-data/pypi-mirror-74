﻿'''_429.py

StraightBevelGearMeshDesign
'''


from typing import List

from mastapy.gears.gear_designs.straight_bevel import _364, _445, _950
from mastapy._internal import constructor, conversion
from mastapy.gears.gear_designs.bevel import _1006
from mastapy._internal.python_net import python_net_import

_STRAIGHT_BEVEL_GEAR_MESH_DESIGN = python_net_import('SMT.MastaAPI.Gears.GearDesigns.StraightBevel', 'StraightBevelGearMeshDesign')


__docformat__ = 'restructuredtext en'
__all__ = ('StraightBevelGearMeshDesign',)


class StraightBevelGearMeshDesign(_1006.BevelGearMeshDesign):
    '''StraightBevelGearMeshDesign

    This is a mastapy class.
    '''

    TYPE = _STRAIGHT_BEVEL_GEAR_MESH_DESIGN
    __hash__ = None

    def __init__(self, instance_to_wrap: 'StraightBevelGearMeshDesign.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def straight_bevel_gear_set(self) -> '_364.StraightBevelGearSetDesign':
        '''StraightBevelGearSetDesign: 'StraightBevelGearSet' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_364.StraightBevelGearSetDesign)(self.wrapped.StraightBevelGearSet) if self.wrapped.StraightBevelGearSet else None

    @property
    def straight_bevel_gears(self) -> 'List[_445.StraightBevelGearDesign]':
        '''List[StraightBevelGearDesign]: 'StraightBevelGears' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.StraightBevelGears, constructor.new(_445.StraightBevelGearDesign))
        return value

    @property
    def straight_bevel_meshed_gears(self) -> 'List[_950.StraightBevelMeshedGearDesign]':
        '''List[StraightBevelMeshedGearDesign]: 'StraightBevelMeshedGears' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.StraightBevelMeshedGears, constructor.new(_950.StraightBevelMeshedGearDesign))
        return value
