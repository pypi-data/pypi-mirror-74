﻿'''_4165.py

HypoidGearSetCompoundModalAnalysesAtSpeeds
'''


from typing import List

from mastapy.system_model.part_model.gears import _2091
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.modal_analyses_at_speeds_ns.compound import _4163, _4164, _4112
from mastapy.system_model.analyses_and_results.modal_analyses_at_speeds_ns import _4041
from mastapy._internal.python_net import python_net_import

_HYPOID_GEAR_SET_COMPOUND_MODAL_ANALYSES_AT_SPEEDS = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.ModalAnalysesAtSpeedsNS.Compound', 'HypoidGearSetCompoundModalAnalysesAtSpeeds')


__docformat__ = 'restructuredtext en'
__all__ = ('HypoidGearSetCompoundModalAnalysesAtSpeeds',)


class HypoidGearSetCompoundModalAnalysesAtSpeeds(_4112.AGMAGleasonConicalGearSetCompoundModalAnalysesAtSpeeds):
    '''HypoidGearSetCompoundModalAnalysesAtSpeeds

    This is a mastapy class.
    '''

    TYPE = _HYPOID_GEAR_SET_COMPOUND_MODAL_ANALYSES_AT_SPEEDS

    __hash__ = None

    def __init__(self, instance_to_wrap: 'HypoidGearSetCompoundModalAnalysesAtSpeeds.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2091.HypoidGearSet':
        '''HypoidGearSet: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2091.HypoidGearSet)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def assembly_design(self) -> '_2091.HypoidGearSet':
        '''HypoidGearSet: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2091.HypoidGearSet)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def hypoid_gears_compound_modal_analyses_at_speeds(self) -> 'List[_4163.HypoidGearCompoundModalAnalysesAtSpeeds]':
        '''List[HypoidGearCompoundModalAnalysesAtSpeeds]: 'HypoidGearsCompoundModalAnalysesAtSpeeds' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.HypoidGearsCompoundModalAnalysesAtSpeeds, constructor.new(_4163.HypoidGearCompoundModalAnalysesAtSpeeds))
        return value

    @property
    def hypoid_meshes_compound_modal_analyses_at_speeds(self) -> 'List[_4164.HypoidGearMeshCompoundModalAnalysesAtSpeeds]':
        '''List[HypoidGearMeshCompoundModalAnalysesAtSpeeds]: 'HypoidMeshesCompoundModalAnalysesAtSpeeds' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.HypoidMeshesCompoundModalAnalysesAtSpeeds, constructor.new(_4164.HypoidGearMeshCompoundModalAnalysesAtSpeeds))
        return value

    @property
    def load_case_analyses_ready(self) -> 'List[_4041.HypoidGearSetModalAnalysesAtSpeeds]':
        '''List[HypoidGearSetModalAnalysesAtSpeeds]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_4041.HypoidGearSetModalAnalysesAtSpeeds))
        return value

    @property
    def assembly_modal_analyses_at_speeds_load_cases(self) -> 'List[_4041.HypoidGearSetModalAnalysesAtSpeeds]':
        '''List[HypoidGearSetModalAnalysesAtSpeeds]: 'AssemblyModalAnalysesAtSpeedsLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.AssemblyModalAnalysesAtSpeedsLoadCases, constructor.new(_4041.HypoidGearSetModalAnalysesAtSpeeds))
        return value
