A lane segmentation model. 
Requirement:
'torch>=1.4.0', 'PIL=6.2.x'

Usage:
from laneDetectionCV import infer
import matplotlib.pyplot as plt


result = infer(img, model_path)
plt.show(result)
