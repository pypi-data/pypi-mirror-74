from .snd import *
from .sndfactory import *
from .snddict import *
from .sndseq import *

from .tests import test

from ._version import get_versions
__version__ = get_versions()['version']
del get_versions
