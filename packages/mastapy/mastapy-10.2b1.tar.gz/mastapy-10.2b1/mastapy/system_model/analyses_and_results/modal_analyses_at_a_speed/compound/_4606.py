﻿'''_4606.py

BevelDifferentialGearSetCompoundModalAnalysisAtASpeed
'''


from typing import List

from mastapy.system_model.part_model.gears import _2072
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.modal_analyses_at_a_speed.compound import _4604, _4605, _4611
from mastapy.system_model.analyses_and_results.modal_analyses_at_a_speed import _4484
from mastapy._internal.python_net import python_net_import

_BEVEL_DIFFERENTIAL_GEAR_SET_COMPOUND_MODAL_ANALYSIS_AT_A_SPEED = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.ModalAnalysesAtASpeed.Compound', 'BevelDifferentialGearSetCompoundModalAnalysisAtASpeed')


__docformat__ = 'restructuredtext en'
__all__ = ('BevelDifferentialGearSetCompoundModalAnalysisAtASpeed',)


class BevelDifferentialGearSetCompoundModalAnalysisAtASpeed(_4611.BevelGearSetCompoundModalAnalysisAtASpeed):
    '''BevelDifferentialGearSetCompoundModalAnalysisAtASpeed

    This is a mastapy class.
    '''

    TYPE = _BEVEL_DIFFERENTIAL_GEAR_SET_COMPOUND_MODAL_ANALYSIS_AT_A_SPEED

    __hash__ = None

    def __init__(self, instance_to_wrap: 'BevelDifferentialGearSetCompoundModalAnalysisAtASpeed.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2072.BevelDifferentialGearSet':
        '''BevelDifferentialGearSet: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2072.BevelDifferentialGearSet)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def assembly_design(self) -> '_2072.BevelDifferentialGearSet':
        '''BevelDifferentialGearSet: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2072.BevelDifferentialGearSet)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def bevel_differential_gears_compound_modal_analysis_at_a_speed(self) -> 'List[_4604.BevelDifferentialGearCompoundModalAnalysisAtASpeed]':
        '''List[BevelDifferentialGearCompoundModalAnalysisAtASpeed]: 'BevelDifferentialGearsCompoundModalAnalysisAtASpeed' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.BevelDifferentialGearsCompoundModalAnalysisAtASpeed, constructor.new(_4604.BevelDifferentialGearCompoundModalAnalysisAtASpeed))
        return value

    @property
    def bevel_differential_meshes_compound_modal_analysis_at_a_speed(self) -> 'List[_4605.BevelDifferentialGearMeshCompoundModalAnalysisAtASpeed]':
        '''List[BevelDifferentialGearMeshCompoundModalAnalysisAtASpeed]: 'BevelDifferentialMeshesCompoundModalAnalysisAtASpeed' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.BevelDifferentialMeshesCompoundModalAnalysisAtASpeed, constructor.new(_4605.BevelDifferentialGearMeshCompoundModalAnalysisAtASpeed))
        return value

    @property
    def load_case_analyses_ready(self) -> 'List[_4484.BevelDifferentialGearSetModalAnalysisAtASpeed]':
        '''List[BevelDifferentialGearSetModalAnalysisAtASpeed]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_4484.BevelDifferentialGearSetModalAnalysisAtASpeed))
        return value

    @property
    def assembly_modal_analysis_at_a_speed_load_cases(self) -> 'List[_4484.BevelDifferentialGearSetModalAnalysisAtASpeed]':
        '''List[BevelDifferentialGearSetModalAnalysisAtASpeed]: 'AssemblyModalAnalysisAtASpeedLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.AssemblyModalAnalysisAtASpeedLoadCases, constructor.new(_4484.BevelDifferentialGearSetModalAnalysisAtASpeed))
        return value
