﻿'''_5683.py

ClutchCompoundGearWhineAnalysis
'''


from typing import List

from mastapy.system_model.part_model.couplings import _2113
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.gear_whine_analyses import _5272
from mastapy.system_model.analyses_and_results.gear_whine_analyses.compound import _5699
from mastapy._internal.python_net import python_net_import

_CLUTCH_COMPOUND_GEAR_WHINE_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.GearWhineAnalyses.Compound', 'ClutchCompoundGearWhineAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('ClutchCompoundGearWhineAnalysis',)


class ClutchCompoundGearWhineAnalysis(_5699.CouplingCompoundGearWhineAnalysis):
    '''ClutchCompoundGearWhineAnalysis

    This is a mastapy class.
    '''

    TYPE = _CLUTCH_COMPOUND_GEAR_WHINE_ANALYSIS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'ClutchCompoundGearWhineAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2113.Clutch':
        '''Clutch: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2113.Clutch)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def assembly_design(self) -> '_2113.Clutch':
        '''Clutch: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2113.Clutch)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def load_case_analyses_ready(self) -> 'List[_5272.ClutchGearWhineAnalysis]':
        '''List[ClutchGearWhineAnalysis]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_5272.ClutchGearWhineAnalysis))
        return value

    @property
    def assembly_gear_whine_analysis_load_cases(self) -> 'List[_5272.ClutchGearWhineAnalysis]':
        '''List[ClutchGearWhineAnalysis]: 'AssemblyGearWhineAnalysisLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.AssemblyGearWhineAnalysisLoadCases, constructor.new(_5272.ClutchGearWhineAnalysis))
        return value
