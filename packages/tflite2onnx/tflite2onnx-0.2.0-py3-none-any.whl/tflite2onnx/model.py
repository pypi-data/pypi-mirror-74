import logging
import tflite
import onnx
from onnx import helper

from tflite2onnx.common import T2OBase
from tflite2onnx.graph import Graph

logger = logging.getLogger('tflite2onnx')


class Model(T2OBase):
    """Everything helps to convert TFLite model to ONNX model"""
    def __init__(self, model: tflite.Model):
        super().__init__(model)
        self.tflite = model
        self.graphes = []
        self.setInited()

    def parse(self, explicit_layouts):
        logger.debug("Parsing the Model...")
        graph_count = self.model.SubgraphsLength()
        if (graph_count != 1):
            raise NotImplementedError("ONNX supports one graph per model only, while TFLite has ",
                                      graph_count)
        tflg = self.model.Subgraphs(0)
        graph = Graph(self.model, tflg)
        self.graphes.append(graph)

        for g in self.graphes:
            g.parse(explicit_layouts)

        self.setParsed()

    def convert(self, layout_approach, explicit_layouts):
        self.parse(explicit_layouts)
        logger.debug("Converting...")
        for g in self.graphes:
            g.convert(layout_approach)

        # ONNXRuntime restrictions
        opset = helper.make_operatorsetid(onnx.defs.ONNX_DOMAIN, 11)
        attrs = {
                'producer_name': 'tflite2onnx',
                'ir_version': 6,
                'opset_imports': [opset],
                }

        self.onnx = helper.make_model(self.graphes[0].onnx, **attrs)
        self.setConverted()

    def save(self, path: str):
        logger.debug("saving model as %s", path)
        assert(self.status.converted)
        onnx.checker.check_model(self.onnx)
        onnx.save(self.onnx, path)
