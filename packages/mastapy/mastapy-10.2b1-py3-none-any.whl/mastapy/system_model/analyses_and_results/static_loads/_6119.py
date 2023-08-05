﻿'''_6119.py

DatumLoadCase
'''


from mastapy.system_model.part_model import _2008
from mastapy._internal import constructor
from mastapy.system_model.analyses_and_results.static_loads import _6091
from mastapy._internal.python_net import python_net_import

_DATUM_LOAD_CASE = python_net_import('SMT.MastaAPI.SystemModel.AnalysesAndResults.StaticLoads', 'DatumLoadCase')


__docformat__ = 'restructuredtext en'
__all__ = ('DatumLoadCase',)


class DatumLoadCase(_6091.ComponentLoadCase):
    '''DatumLoadCase

    This is a mastapy class.
    '''

    TYPE = _DATUM_LOAD_CASE

    __hash__ = None

    def __init__(self, instance_to_wrap: 'DatumLoadCase.TYPE'):
        super().__init__(instance_to_wrap)

    @property
    def component_design(self) -> '_2008.Datum':
        '''Datum: 'ComponentDesign' is the original name of this property.

        Note:
            This property is readonly.
        '''

        return constructor.new(_2008.Datum)(self.wrapped.ComponentDesign) if self.wrapped.ComponentDesign else None
