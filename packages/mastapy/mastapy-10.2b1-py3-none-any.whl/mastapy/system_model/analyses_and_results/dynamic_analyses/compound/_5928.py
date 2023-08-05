﻿'''_5928.py

BevelDifferentialGearSetCompoundDynamicAnalysis
'''


from typing import List

from mastapy.system_model.part_model.gears import _2055
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.dynamic_analyses.compound import _5926, _5927, _5933
from mastapy.system_model.analyses_and_results.dynamic_analyses import _5805
from mastapy._internal.python_net import python_net_import

_BEVEL_DIFFERENTIAL_GEAR_SET_COMPOUND_DYNAMIC_ANALYSIS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.DynamicAnalyses.Compound', 'BevelDifferentialGearSetCompoundDynamicAnalysis')


__docformat__ = 'restructuredtext en'
__all__ = ('BevelDifferentialGearSetCompoundDynamicAnalysis',)


class BevelDifferentialGearSetCompoundDynamicAnalysis(_5933.BevelGearSetCompoundDynamicAnalysis):
    '''BevelDifferentialGearSetCompoundDynamicAnalysis

    This is a mastapy class.
    '''

    TYPE = _BEVEL_DIFFERENTIAL_GEAR_SET_COMPOUND_DYNAMIC_ANALYSIS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'BevelDifferentialGearSetCompoundDynamicAnalysis.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2055.BevelDifferentialGearSet':
        '''BevelDifferentialGearSet: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2055.BevelDifferentialGearSet)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def assembly_design(self) -> '_2055.BevelDifferentialGearSet':
        '''BevelDifferentialGearSet: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2055.BevelDifferentialGearSet)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def bevel_differential_gears_compound_dynamic_analysis(self) -> 'List[_5926.BevelDifferentialGearCompoundDynamicAnalysis]':
        '''List[BevelDifferentialGearCompoundDynamicAnalysis]: 'BevelDifferentialGearsCompoundDynamicAnalysis' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.BevelDifferentialGearsCompoundDynamicAnalysis, constructor.new(_5926.BevelDifferentialGearCompoundDynamicAnalysis))
        return value

    @property
    def bevel_differential_meshes_compound_dynamic_analysis(self) -> 'List[_5927.BevelDifferentialGearMeshCompoundDynamicAnalysis]':
        '''List[BevelDifferentialGearMeshCompoundDynamicAnalysis]: 'BevelDifferentialMeshesCompoundDynamicAnalysis' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.BevelDifferentialMeshesCompoundDynamicAnalysis, constructor.new(_5927.BevelDifferentialGearMeshCompoundDynamicAnalysis))
        return value

    @property
    def load_case_analyses_ready(self) -> 'List[_5805.BevelDifferentialGearSetDynamicAnalysis]':
        '''List[BevelDifferentialGearSetDynamicAnalysis]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_5805.BevelDifferentialGearSetDynamicAnalysis))
        return value

    @property
    def assembly_dynamic_analysis_load_cases(self) -> 'List[_5805.BevelDifferentialGearSetDynamicAnalysis]':
        '''List[BevelDifferentialGearSetDynamicAnalysis]: 'AssemblyDynamicAnalysisLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.AssemblyDynamicAnalysisLoadCases, constructor.new(_5805.BevelDifferentialGearSetDynamicAnalysis))
        return value
