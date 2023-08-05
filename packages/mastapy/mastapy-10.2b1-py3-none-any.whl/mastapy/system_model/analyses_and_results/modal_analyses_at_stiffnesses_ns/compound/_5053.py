﻿'''_5053.py

BearingCompoundModalAnalysesAtStiffnesses
'''


from typing import List

from mastapy.system_model.part_model import _1908
from mastapy._internal import constructor, conversion
from mastapy.system_model.analyses_and_results.modal_analyses_at_stiffnesses_ns import _4930
from mastapy.system_model.analyses_and_results.modal_analyses_at_stiffnesses_ns.compound import _5081
from mastapy._internal.python_net import python_net_import

_BEARING_COMPOUND_MODAL_ANALYSES_AT_STIFFNESSES = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.ModalAnalysesAtStiffnessesNS.Compound', 'BearingCompoundModalAnalysesAtStiffnesses')


__docformat__ = 'restructuredtext en'
__all__ = ('BearingCompoundModalAnalysesAtStiffnesses',)


class BearingCompoundModalAnalysesAtStiffnesses(_5081.ConnectorCompoundModalAnalysesAtStiffnesses):
    '''BearingCompoundModalAnalysesAtStiffnesses

    This is a mastapy class.
    '''

    TYPE = _BEARING_COMPOUND_MODAL_ANALYSES_AT_STIFFNESSES
    __hash__ = None

    def __init__(self, instance_to_wrap: 'BearingCompoundModalAnalysesAtStiffnesses.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_1908.Bearing':
        '''Bearing: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_1908.Bearing)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None

    @property
    def load_case_analyses_ready(self) -> 'List[_4930.BearingModalAnalysesAtStiffnesses]':
        '''List[BearingModalAnalysesAtStiffnesses]: 'LoadCaseAnalysesReady' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.LoadCaseAnalysesReady, constructor.new(_4930.BearingModalAnalysesAtStiffnesses))
        return value

    @property
    def component_modal_analyses_at_stiffnesses_load_cases(self) -> 'List[_4930.BearingModalAnalysesAtStiffnesses]':
        '''List[BearingModalAnalysesAtStiffnesses]: 'ComponentModalAnalysesAtStiffnessesLoadCases' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.ComponentModalAnalysesAtStiffnessesLoadCases, constructor.new(_4930.BearingModalAnalysesAtStiffnesses))
        return value

    @property
    def planetaries(self) -> 'List[BearingCompoundModalAnalysesAtStiffnesses]':
        '''List[BearingCompoundModalAnalysesAtStiffnesses]: 'Planetaries' is the original name of this property.

        Note:
            This property is readonly.
        '''

        value = conversion.pn_to_mp_objects_in_list(self.wrapped.Planetaries, constructor.new(BearingCompoundModalAnalysesAtStiffnesses))
        return value
