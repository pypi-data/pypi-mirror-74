﻿'''_5607.py

StraightBevelGearSetCompoundModalAnalysisAtAStiffness
'''


from typing import List

from mastapy.system_model.part_model.gears import _1964
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.modal_analyses_at_a_stiffness.compound import _5630, _5631, _5543
from mastapy.system_model.analyses_and_results.modal_analyses_at_a_stiffness import _5508
from mastapy._internal.python_net import python_net_import

_STRAIGHT_BEVEL_GEAR_SET_COMPOUND_MODAL_ANALYSIS_AT_A_STIFFNESS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.ModalAnalysesAtAStiffness.Compound', 'StraightBevelGearSetCompoundModalAnalysisAtAStiffness')


__docformat__ = 'restructuredtext en'
__all__ = ('StraightBevelGearSetCompoundModalAnalysisAtAStiffness',)


class StraightBevelGearSetCompoundModalAnalysisAtAStiffness(_5543.BevelGearSetCompoundModalAnalysisAtAStiffness):
    '''StraightBevelGearSetCompoundModalAnalysisAtAStiffness

    This is a mastapy class.
    '''

    TYPE = _STRAIGHT_BEVEL_GEAR_SET_COMPOUND_MODAL_ANALYSIS_AT_A_STIFFNESS
    __hash__ = None

    def __init__(self, instance_to_wrap: 'StraightBevelGearSetCompoundModalAnalysisAtAStiffness.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_1964.StraightBevelGearSet':
        '''StraightBevelGearSet: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1964.StraightBevelGearSet)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def assembly_design(self) -> '_1964.StraightBevelGearSet':
        '''StraightBevelGearSet: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1964.StraightBevelGearSet)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def straight_bevel_gears_compound_modal_analysis_at_a_stiffness(self) -> 'List[_5630.StraightBevelGearCompoundModalAnalysisAtAStiffness]':
        '''List[StraightBevelGearCompoundModalAnalysisAtAStiffness]: 'StraightBevelGearsCompoundModalAnalysisAtAStiffness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.StraightBevelGearsCompoundModalAnalysisAtAStiffness, constructor.new(_5630.StraightBevelGearCompoundModalAnalysisAtAStiffness))
        return value

    @property
    def straight_bevel_meshes_compound_modal_analysis_at_a_stiffness(self) -> 'List[_5631.StraightBevelGearMeshCompoundModalAnalysisAtAStiffness]':
        '''List[StraightBevelGearMeshCompoundModalAnalysisAtAStiffness]: 'StraightBevelMeshesCompoundModalAnalysisAtAStiffness' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.StraightBevelMeshesCompoundModalAnalysisAtAStiffness, constructor.new(_5631.StraightBevelGearMeshCompoundModalAnalysisAtAStiffness))
        return value

    @property
    def load_case_analyses_ready(self) -> 'List[_5508.StraightBevelGearSetModalAnalysisAtAStiffness]':
        '''List[StraightBevelGearSetModalAnalysisAtAStiffness]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_5508.StraightBevelGearSetModalAnalysisAtAStiffness))
        return value

    @property
    def assembly_modal_analysis_at_a_stiffness_load_cases(self) -> 'List[_5508.StraightBevelGearSetModalAnalysisAtAStiffness]':
        '''List[StraightBevelGearSetModalAnalysisAtAStiffness]: 'AssemblyModalAnalysisAtAStiffnessLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.AssemblyModalAnalysisAtAStiffnessLoadCases, constructor.new(_5508.StraightBevelGearSetModalAnalysisAtAStiffness))
        return value
