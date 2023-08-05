﻿'''_5532.py

StraightBevelGearSingleMeshWhineAnalysis
'''


from mastapy.system_model.part_model.gears import _2103
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _6208
from mastapy.system_model.analyses_and_results.gear_whine_analyses.single_mesh_whine_analyses import _5444
from mastapy._internal.python_net import python_net_import

_STRAIGHT_BEVEL_GEAR_SINGLE_MESH_WHINE_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.GearWhineAnalyses.SingleMeshWhineAnalyses', 'StraightBevelGearSingleMeshWhineAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('StraightBevelGearSingleMeshWhineAnalysis',)


class StraightBevelGearSingleMeshWhineAnalysis(_5444.BevelGearSingleMeshWhineAnalysis):
    '''StraightBevelGearSingleMeshWhineAnalysis

    This is a mastapy class.
    '''

    TYPE = _STRAIGHT_BEVEL_GEAR_SINGLE_MESH_WHINE_ANALYSIS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'StraightBevelGearSingleMeshWhineAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2103.StraightBevelGear':
        '''StraightBevelGear: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2103.StraightBevelGear)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def component_load_case(self) -> '_6208.StraightBevelGearLoadCase':
        '''StraightBevelGearLoadCase: 'ComponentLoadCase' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_6208.StraightBevelGearLoadCase)(self.wrapped.ComponentLoadCase) if self.wrapped.ComponentLoadCase else None
