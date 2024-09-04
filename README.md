SIGN LANGUAGE DETECTION (Detection of ASL Alphabets)  
This project involves training a deep learning model to recognize and classify images of hand signs representing numbers (0-9) and letters (A-Z) in American Sign Language (ASL). The model is based on the MobileNetV2 architecture, fine-tuned for this specific classification task. The dataset consists of images organized into directories, each corresponding to a particular letter or number.

The model is built using a pre-trained MobileNetV2 architecture as a base model. The final layers are fine-tuned for ASL sign classification.
Base Model: MobileNetV2 (pre-trained on ImageNet)
Additional Layers:
Global Average Pooling
Batch Normalization
Dense Layer with 512 units and ReLU activation
Dropout with a 50% rate
Final Dense Layer with 26 units and softmax activation (for classification)

The model is trained with the following steps:
Data Augmentation: Image data is augmented using transformations such as rotation, zoom, and flips.
Training: The model is trained using the Adam optimizer with a learning rate of 0.001.
Callbacks: The training process includes early stopping and learning rate reduction on plateau.

A web interface has been developed to allow users to interact with the model. 
The trained model was converted to TensorFlow.js format and deployed on a web page. The web page allows users to use their webcam for real-time sign language recognition.
As you sign letters or digits in front of the camera, the model predicts and displays the corresponding character.
The web interface can be accessed through this link:
https://aisign-lojx.vercel.app/asl.html
