import sys
import typing
import bpy.types

from . import types
from . import ops
from . import props
from . import app
from . import context
from . import path
from . import utils

data: 'bpy.types.BlendData' = None
''' Access to Blender's internal data
'''
