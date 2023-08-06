#!/usr/bin/env python
# -*- coding: utf-8 -*-

from __future__ import unicode_literals
from builtins import str as text

import uuid
from future.utils import iteritems

from lighttree import Node as OriginalNode

from pandagg.utils import DSLMixin


class Node(DSLMixin, OriginalNode):

    KEY = None
    _type_name = None

    NID_SIZE = 8

    def __init__(self, identifier=None):
        if identifier is None:
            identifier = self._craft_identifier()
        super(Node, self).__init__(identifier=identifier)

    @property
    def _identifier_prefix(self):
        return ""

    def _craft_identifier(self):
        return "%s%s" % (self._identifier_prefix, text(uuid.uuid4())[: self.NID_SIZE])

    @staticmethod
    def expand__to_dot(params):
        nparams = {}
        for pname, pvalue in iteritems(params):
            if "__" in pname:
                pname = pname.replace("__", ".")
            nparams[pname] = pvalue
        return nparams
