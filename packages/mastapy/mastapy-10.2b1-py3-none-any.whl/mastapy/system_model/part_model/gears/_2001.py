﻿'''_2001.py

BevelGear
'''


from mastapy.gears.gear_designs.bevel import _1040
from mastapy._internal import constructor
from mastapy.gears.gear_designs.zerol_bevel import _437
from mastapy._internal.cast_exception import CastException
from mastapy.gears.gear_designs.straight_bevel_diff import _490
from mastapy.gears.gear_designs.straight_bevel import _435
from mastapy.gears.gear_designs.spiral_bevel import _442
from mastapy.system_model.part_model.gears import _1999
from mastapy._internal.python_net import python_net_import

_BEVEL_GEAR = python_net_import('SMT.MastaAPI.SystemModel.PartModel.Gears', 'BevelGear')


__docformat__ = 'restructuredtext en'
__all__ = ('BevelGear',)


class BevelGear(_1999.AGMAGleasonConicalGear):
    '''BevelGear

    This is a mastapy class.
    '''

    TYPE = _BEVEL_GEAR
    __hash__ = None

    def __init__(self, instance_to_wrap: 'BevelGear.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def conical_gear_design(self) -> '_1040.BevelGearDesign':
        '''BevelGearDesign: 'ConicalGearDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1040.BevelGearDesign)(self.wrapped.ConicalGearDesign) if self.wrapped.ConicalGearDesign else None

    @property
    def conical_gear_design_of_type_zerol_bevel_gear_design(self) -> '_437.ZerolBevelGearDesign':
        '''ZerolBevelGearDesign: 'ConicalGearDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.ConicalGearDesign.__class__.__qualname__ != 'ZerolBevelGearDesign':
            raise CastException('Failed to cast conical_gear_design to ZerolBevelGearDesign. Expected: {}.'.format(self.wrapped.ConicalGearDesign.__class__.__qualname__))

        return constructor.new(_437.ZerolBevelGearDesign)(self.wrapped.ConicalGearDesign) if self.wrapped.ConicalGearDesign else None

    @property
    def conical_gear_design_of_type_straight_bevel_diff_gear_design(self) -> '_490.StraightBevelDiffGearDesign':
        '''StraightBevelDiffGearDesign: 'ConicalGearDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.ConicalGearDesign.__class__.__qualname__ != 'StraightBevelDiffGearDesign':
            raise CastException('Failed to cast conical_gear_design to StraightBevelDiffGearDesign. Expected: {}.'.format(self.wrapped.ConicalGearDesign.__class__.__qualname__))

        return constructor.new(_490.StraightBevelDiffGearDesign)(self.wrapped.ConicalGearDesign) if self.wrapped.ConicalGearDesign else None

    @property
    def conical_gear_design_of_type_straight_bevel_gear_design(self) -> '_435.StraightBevelGearDesign':
        '''StraightBevelGearDesign: 'ConicalGearDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.ConicalGearDesign.__class__.__qualname__ != 'StraightBevelGearDesign':
            raise CastException('Failed to cast conical_gear_design to StraightBevelGearDesign. Expected: {}.'.format(self.wrapped.ConicalGearDesign.__class__.__qualname__))

        return constructor.new(_435.StraightBevelGearDesign)(self.wrapped.ConicalGearDesign) if self.wrapped.ConicalGearDesign else None

    @property
    def conical_gear_design_of_type_spiral_bevel_gear_design(self) -> '_442.SpiralBevelGearDesign':
        '''SpiralBevelGearDesign: 'ConicalGearDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.ConicalGearDesign.__class__.__qualname__ != 'SpiralBevelGearDesign':
            raise CastException('Failed to cast conical_gear_design to SpiralBevelGearDesign. Expected: {}.'.format(self.wrapped.ConicalGearDesign.__class__.__qualname__))

        return constructor.new(_442.SpiralBevelGearDesign)(self.wrapped.ConicalGearDesign) if self.wrapped.ConicalGearDesign else None

    @property
    def bevel_gear_design(self) -> '_1040.BevelGearDesign':
        '''BevelGearDesign: 'BevelGearDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1040.BevelGearDesign)(self.wrapped.BevelGearDesign) if self.wrapped.BevelGearDesign else None

    @property
    def bevel_gear_design_of_type_zerol_bevel_gear_design(self) -> '_437.ZerolBevelGearDesign':
        '''ZerolBevelGearDesign: 'BevelGearDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.BevelGearDesign.__class__.__qualname__ != 'ZerolBevelGearDesign':
            raise CastException('Failed to cast bevel_gear_design to ZerolBevelGearDesign. Expected: {}.'.format(self.wrapped.BevelGearDesign.__class__.__qualname__))

        return constructor.new(_437.ZerolBevelGearDesign)(self.wrapped.BevelGearDesign) if self.wrapped.BevelGearDesign else None

    @property
    def bevel_gear_design_of_type_straight_bevel_diff_gear_design(self) -> '_490.StraightBevelDiffGearDesign':
        '''StraightBevelDiffGearDesign: 'BevelGearDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.BevelGearDesign.__class__.__qualname__ != 'StraightBevelDiffGearDesign':
            raise CastException('Failed to cast bevel_gear_design to StraightBevelDiffGearDesign. Expected: {}.'.format(self.wrapped.BevelGearDesign.__class__.__qualname__))

        return constructor.new(_490.StraightBevelDiffGearDesign)(self.wrapped.BevelGearDesign) if self.wrapped.BevelGearDesign else None

    @property
    def bevel_gear_design_of_type_straight_bevel_gear_design(self) -> '_435.StraightBevelGearDesign':
        '''StraightBevelGearDesign: 'BevelGearDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.BevelGearDesign.__class__.__qualname__ != 'StraightBevelGearDesign':
            raise CastException('Failed to cast bevel_gear_design to StraightBevelGearDesign. Expected: {}.'.format(self.wrapped.BevelGearDesign.__class__.__qualname__))

        return constructor.new(_435.StraightBevelGearDesign)(self.wrapped.BevelGearDesign) if self.wrapped.BevelGearDesign else None

    @property
    def bevel_gear_design_of_type_spiral_bevel_gear_design(self) -> '_442.SpiralBevelGearDesign':
        '''SpiralBevelGearDesign: 'BevelGearDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        if self.wrapped.BevelGearDesign.__class__.__qualname__ != 'SpiralBevelGearDesign':
            raise CastException('Failed to cast bevel_gear_design to SpiralBevelGearDesign. Expected: {}.'.format(self.wrapped.BevelGearDesign.__class__.__qualname__))

        return constructor.new(_442.SpiralBevelGearDesign)(self.wrapped.BevelGearDesign) if self.wrapped.BevelGearDesign else None
