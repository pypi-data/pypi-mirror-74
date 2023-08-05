﻿'''_3150.py

CylindricalGearSetCompoundSteadyStateSynchronousResponse
'''


from typing import List

from mastapy.system_model.part_model.gears import _2082
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.steady_state_synchronous_responses.compound import _3148, _3149, _3160
from mastapy.system_model.analyses_and_results.steady_state_synchronous_responses import _3024
from mastapy._internal.python_net import python_net_import

_CYLINDRICAL_GEAR_SET_COMPOUND_STEADY_STATE_SYNCHRONOUS_RESPONSE = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.SteadyStateSynchronousResponses.Compound', 'CylindricalGearSetCompoundSteadyStateSynchronousResponse')


__docformat__ = 'restructuredtext en'
__all__ = ('CylindricalGearSetCompoundSteadyStateSynchronousResponse',)


class CylindricalGearSetCompoundSteadyStateSynchronousResponse(_3160.GearSetCompoundSteadyStateSynchronousResponse):
    '''CylindricalGearSetCompoundSteadyStateSynchronousResponse

    This is a mastapy class.
    '''

    TYPE = _CYLINDRICAL_GEAR_SET_COMPOUND_STEADY_STATE_SYNCHRONOUS_RESPONSE

    __hash__ = None

    def __init__(self, instance_to_wrap: 'CylindricalGearSetCompoundSteadyStateSynchronousResponse.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2082.CylindricalGearSet':
        '''CylindricalGearSet: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2082.CylindricalGearSet)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def assembly_design(self) -> '_2082.CylindricalGearSet':
        '''CylindricalGearSet: 'AssemblyDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2082.CylindricalGearSet)(self.wrapped.AssemblyDesign) if self.wrapped.AssemblyDesign else None

    @property
    def cylindrical_gears_compound_steady_state_synchronous_response(self) -> 'List[_3148.CylindricalGearCompoundSteadyStateSynchronousResponse]':
        '''List[CylindricalGearCompoundSteadyStateSynchronousResponse]: 'CylindricalGearsCompoundSteadyStateSynchronousResponse' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.CylindricalGearsCompoundSteadyStateSynchronousResponse, constructor.new(_3148.CylindricalGearCompoundSteadyStateSynchronousResponse))
        return value

    @property
    def cylindrical_meshes_compound_steady_state_synchronous_response(self) -> 'List[_3149.CylindricalGearMeshCompoundSteadyStateSynchronousResponse]':
        '''List[CylindricalGearMeshCompoundSteadyStateSynchronousResponse]: 'CylindricalMeshesCompoundSteadyStateSynchronousResponse' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.CylindricalMeshesCompoundSteadyStateSynchronousResponse, constructor.new(_3149.CylindricalGearMeshCompoundSteadyStateSynchronousResponse))
        return value

    @property
    def load_case_analyses_ready(self) -> 'List[_3024.CylindricalGearSetSteadyStateSynchronousResponse]':
        '''List[CylindricalGearSetSteadyStateSynchronousResponse]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_3024.CylindricalGearSetSteadyStateSynchronousResponse))
        return value

    @property
    def assembly_steady_state_synchronous_response_load_cases(self) -> 'List[_3024.CylindricalGearSetSteadyStateSynchronousResponse]':
        '''List[CylindricalGearSetSteadyStateSynchronousResponse]: 'AssemblySteadyStateSynchronousResponseLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.AssemblySteadyStateSynchronousResponseLoadCases, constructor.new(_3024.CylindricalGearSetSteadyStateSynchronousResponse))
        return value
