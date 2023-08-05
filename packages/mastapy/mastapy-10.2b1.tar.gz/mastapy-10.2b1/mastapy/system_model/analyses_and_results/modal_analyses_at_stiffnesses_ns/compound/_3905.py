﻿'''_3905.py

CylindricalGearSetCompoundModalAnalysesAtStiffnesses
'''


from typing import List

from mastapy.system_model.part_model.gears import _2082
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.modal_analyses_at_stiffnesses_ns.compound import _3903, _3904, _3915
from mastapy.system_model.analyses_and_results.modal_analyses_at_stiffnesses_ns import _3782
from mastapy._internal.python_net import python_net_import

_CYLINDRICAL_GEAR_SET_COMPOUND_MODAL_ANALYSES_AT_STIFFNESSES = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.ModalAnalysesAtStiffnessesNS.Compound', 'CylindricalGearSetCompoundModalAnalysesAtStiffnesses')


__docformat__ = 'restructuredtext en'
__all__ = ('CylindricalGearSetCompoundModalAnalysesAtStiffnesses',)


class CylindricalGearSetCompoundModalAnalysesAtStiffnesses(_3915.GearSetCompoundModalAnalysesAtStiffnesses):
    '''CylindricalGearSetCompoundModalAnalysesAtStiffnesses

    This is a mastapy class.
    '''

    TYPE = _CYLINDRICAL_GEAR_SET_COMPOUND_MODAL_ANALYSES_AT_STIFFNESSES

    __hash__ = None

    def __init__(self, instance_to_wrap: 'CylindricalGearSetCompoundModalAnalysesAtStiffnesses.TYPE'):
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
    def cylindrical_gears_compound_modal_analyses_at_stiffnesses(self) -> 'List[_3903.CylindricalGearCompoundModalAnalysesAtStiffnesses]':
        '''List[CylindricalGearCompoundModalAnalysesAtStiffnesses]: 'CylindricalGearsCompoundModalAnalysesAtStiffnesses' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.CylindricalGearsCompoundModalAnalysesAtStiffnesses, constructor.new(_3903.CylindricalGearCompoundModalAnalysesAtStiffnesses))
        return value

    @property
    def cylindrical_meshes_compound_modal_analyses_at_stiffnesses(self) -> 'List[_3904.CylindricalGearMeshCompoundModalAnalysesAtStiffnesses]':
        '''List[CylindricalGearMeshCompoundModalAnalysesAtStiffnesses]: 'CylindricalMeshesCompoundModalAnalysesAtStiffnesses' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.CylindricalMeshesCompoundModalAnalysesAtStiffnesses, constructor.new(_3904.CylindricalGearMeshCompoundModalAnalysesAtStiffnesses))
        return value

    @property
    def load_case_analyses_ready(self) -> 'List[_3782.CylindricalGearSetModalAnalysesAtStiffnesses]':
        '''List[CylindricalGearSetModalAnalysesAtStiffnesses]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_3782.CylindricalGearSetModalAnalysesAtStiffnesses))
        return value

    @property
    def assembly_modal_analyses_at_stiffnesses_load_cases(self) -> 'List[_3782.CylindricalGearSetModalAnalysesAtStiffnesses]':
        '''List[CylindricalGearSetModalAnalysesAtStiffnesses]: 'AssemblyModalAnalysesAtStiffnessesLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.AssemblyModalAnalysesAtStiffnessesLoadCases, constructor.new(_3782.CylindricalGearSetModalAnalysesAtStiffnesses))
        return value
