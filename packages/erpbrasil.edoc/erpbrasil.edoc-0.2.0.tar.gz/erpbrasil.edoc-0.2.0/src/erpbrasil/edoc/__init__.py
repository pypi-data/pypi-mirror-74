# -*- encoding: utf-8 -*-
# See http://peak.telecommunity.com/DevCenter/setuptools#namespace-packages
try:
    __import__("pkg_resources").declare_namespace(__name__)
except ImportError:
    from pkgutil import extend_path

    __path__ = extend_path(__path__, __name__)
__version__ = '0.2.0'

import abc

ABC = abc.ABCMeta('ABC', (object,), {})

from erpbrasil.edoc.nfe import NFe
from erpbrasil.edoc.nfse import NFSe

def importar_documento(xml):
    pass
