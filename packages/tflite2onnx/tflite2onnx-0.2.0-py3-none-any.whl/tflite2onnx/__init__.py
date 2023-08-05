"""Converting TensorFlow Lite models (*.tflite) to ONNX models (*.onnx)"""

from tflite2onnx.convert import convert
from tflite2onnx.common import LayoutApproach

# package metadata
NAME = 'tflite2onnx'
VERSION = '0.2.0'
DESCRIPTION = "Convert TensorFlow Lite models to ONNX models"

__all__ = [
    convert,
    LayoutApproach,
    NAME,
    VERSION,
    DESCRIPTION,
]
