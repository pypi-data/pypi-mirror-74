﻿'''_3339.py

StraightBevelGearSetPowerFlow
'''


from typing import List

from mastapy.system_model.part_model.gears import _2104
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.static_loads import _6210
from mastapy.gears.rating.straight_bevel import _203
from mastapy.system_model.analyses_and_results.power_flows import _3338, _3337, _3250
from mastapy._internal.python_net import python_net_import

_STRAIGHT_BEVEL_GEAR_SET_POWER_FLOW = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.PowerFlows', 'StraightBevelGearSetPowerFlow')


__docformat__ = 'restructuredtext en'
__all__ = ('StraightBevelGearSetPowerFlow',)


class StraightBevelGearSetPowerFlow(_3250.BevelGearSetPowerFlow):
    '''StraightBevelGearSetPowerFlow

    This is a mastapy class.
    '''

    TYPE = _STRAIGHT_BEVEL_GEAR_SET_POWER_FLOW

    __hash__ = None

    def __init__(self, instance_to_wrap: 'StraightBevelGearSetPowerFlow.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def assembly_design(self) -> '_2104.StraightBevelGearSet':
        '''StraightBevelGearSet: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2104.StraightBevelGearSet)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def assembly_load_case(self) -> '_6210.StraightBevelGearSetLoadCase':
        '''StraightBevelGearSetLoadCase: 'AssemblyLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6210.StraightBevelGearSetLoadCase)(self.wrapped.AssemblyLoadCase) if self.wrapped.AssemblyLoadCase else None

    @property
    def rating(self) -> '_203.StraightBevelGearSetRating':
        '''StraightBevelGearSetRating: 'Rating' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_203.StraightBevelGearSetRating)(self.wrapped.Rating) if self.wrapped.Rating else None

    @property
    def component_detailed_analysis(self) -> '_203.StraightBevelGearSetRating':
        '''StraightBevelGearSetRating: 'ComponentDetailedAnalysis' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_203.StraightBevelGearSetRating)(self.wrapped.ComponentDetailedAnalysis) if self.wrapped.ComponentDetailedAnalysis else None

    @property
    def gears_power_flow(self) -> 'List[_3338.StraightBevelGearPowerFlow]':
        '''List[StraightBevelGearPowerFlow]: 'GearsPowerFlow' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.GearsPowerFlow, constructor.new(_3338.StraightBevelGearPowerFlow))
        return value

    @property
    def straight_bevel_gears_power_flow(self) -> 'List[_3338.StraightBevelGearPowerFlow]':
        '''List[StraightBevelGearPowerFlow]: 'StraightBevelGearsPowerFlow' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.StraightBevelGearsPowerFlow, constructor.new(_3338.StraightBevelGearPowerFlow))
        return value

    @property
    def meshes_power_flow(self) -> 'List[_3337.StraightBevelGearMeshPowerFlow]':
        '''List[StraightBevelGearMeshPowerFlow]: 'MeshesPowerFlow' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.MeshesPowerFlow, constructor.new(_3337.StraightBevelGearMeshPowerFlow))
        return value

    @property
    def straight_bevel_meshes_power_flow(self) -> 'List[_3337.StraightBevelGearMeshPowerFlow]':
        '''List[StraightBevelGearMeshPowerFlow]: 'StraightBevelMeshesPowerFlow' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.StraightBevelMeshesPowerFlow, constructor.new(_3337.StraightBevelGearMeshPowerFlow))
        return value
