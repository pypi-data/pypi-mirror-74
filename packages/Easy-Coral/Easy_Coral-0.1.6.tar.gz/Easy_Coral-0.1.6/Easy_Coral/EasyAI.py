from threading import Thread
from edgetpu.classification.engine import ClassificationEngine
from edgetpu.detection.engine import DetectionEngine
import edgetpu
import time
from time import sleep
import re
import os
import collections 
dirname, filename = os.path.split(os.path.abspath(__file__))

class AI:
    def __init__(self, tpu_path):
        self.tpu_path = tpu_path
        self.models = []
        self.run_thread = Thread(target=self.run_models)
        self.run_thread.daemon = True
        self.run_thread.start()

    def add_model(self, model_type):
        engine, label = self.create_engine(model_type)
        model = AIModel(model_type, engine, label)
        self.models.append(model)
        return model

    def load_labels(self,path):
        LABEL_PATTERN = re.compile(r'\s*(\d+)(.+)')
        with open(path, 'r', encoding='utf-8') as f:
            lines = (LABEL_PATTERN.match(line).groups() for line in f.readlines())
            return {int(num): text.strip() for num, text in lines}
    
    def create_engine(self,model_type):
        if model_type not in self.models:
            engine = model_type.engine(model_type.model_path, self.tpu_path)
            labels = self.load_labels(model_type.label_path)
        return(engine, labels)
    
    def run_models(self):
        while True:
            for model in self.models:
                model.run()
            sleep(0.0001)

class AIModel():
    def __init__(self, model_type, engine, label):
        self.labels = label
        self.res = model_type.size
        self.engine = engine
        self.frame = None
        self.listeners = set()
        self.run_func = model_type.post_func

    def add(self, listener):
        self.listeners.add(listener)
        return self
    
    def remove(self, listener):
        self.listeners.discard(listener)
        return self
    
    def process_data(self, sender, data):
        self.frame = data

    def run(self):
        if self.frame is not None:
            results = self.run_func(self.frame, self.engine, self.labels)
            self.frame = None
            self.fire(self, results)

    def fire(self, sender, data=None):
        for listener in self.listeners:
            listener(sender, data)

    __iadd__ = add
    __isub__ = remove
    __call__ = fire
    
class ModelType:
    def run_classify(self, frame, engine, labels):
        start = time.monotonic()
        objs = engine.classify_with_input_tensor(frame)#add arguments
        inference_time = time.monotonic() - start
        tempArray = []
        for obj in objs:
            tempArray.append({"score":obj[1],"label":labels[obj[0]],"inference_time":inference_time})
        return(tempArray)
        
    def run_detect(frame, engine, labels):
        start = time.monotonic()
        objs = engine.detect_with_input_tensor(frame)
        inference_time = time.monotonic() - start
        tempArray = []
        for obj in objs:
            tempArray.append({"box":obj.bounding_box.flatten().tolist(),"score":obj.score,"label":labels[obj.label_id],"inference_time":inference_time})
        return(tempArray)
    
    model_type = collections.namedtuple('model_type',['engine','model_path','label_path','size','post_func'])
    DetectFace = model_type(DetectionEngine, f"{dirname}/models/mobilenet_ssd_v2_face_quant_postprocess_edgetpu.tflite", f"{dirname}/models/face_labels.txt",(320,320), run_detect)
    DetectFRC = model_type(DetectionEngine, f"{dirname}/models/mobilenet_v2_edgetpu_red.tflite", f"{dirname}/models/field_labels.txt", (300,300), run_detect)
    ClassifyRandom = model_type(ClassificationEngine, f"{dirname}/models/mobilenet_v2_1.0_224_quant_edgetpu.tflite", f"{dirname}/models/imagenet_labels.txt", (224,224), run_classify)

class TPUType:
    DEVBOARD = "/dev/apex_0"