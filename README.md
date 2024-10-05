# Exoplanet Detection Model - `mystery_planet_99_8_cnn`

## Overview

This project leverages data from NASA’s Kepler telescope to predict the existence of exoplanets based on the variations in light intensity emitted from distant stars over time. The primary objective is to train a convolutional neural network (CNN) to detect possible exoplanets by analyzing the "light curves" (a measure of the brightness of a star as a function of time). 

The model was developed to achieve high accuracy in identifying exoplanets and flagging any potential false positives. Ultimately, the model is able to detect an exoplanet with over 99.8% accuracy, showcasing the power of deep learning techniques in the field of astronomy.

## Dataset

The dataset used in this project is sourced from the **NASA Kepler Space Telescope**. The Kepler mission is known for its role in exoplanet discovery, using the transit method. The dataset contains thousands of light curves from stars, where some have dips in brightness indicating potential planets passing in front of the star (transit events).

The input data includes:
- **Light Intensity Readings**: Time-series data representing how the brightness of a star changes over time.
- **Labels**: Binary values indicating the presence (`1`) or absence (`0`) of an exoplanet around the observed star.

## Project Phases

### 1. Data Preprocessing
The raw data is preprocessed to ensure it is suitable for model training:
- **Data Normalization**: The light intensity readings are normalized to bring them within a similar scale for model consistency.
- **Train/Test Split**: The dataset is split into training and testing sets for model evaluation.

### 2. Model Architecture
The model employed in this project is a **Convolutional Neural Network (CNN)**, designed to handle time-series data like light curves. The architecture includes:
- **Convolutional Layers**: These layers extract features from the input light curves.
- **Max Pooling**: This helps in down-sampling the data while retaining important features.
- **Fully Connected Layers**: These layers interpret the extracted features to classify the data as either containing an exoplanet or not.
- **Softmax Output Layer**: The final layer outputs a probability indicating the presence of a planet.

### 3. Training Process
The model is trained using the training dataset:
- **Loss Function**: Binary cross-entropy is used as the loss function to optimize the classification.
- **Optimizer**: Adam optimizer is utilized to minimize the loss and update weights.
- **Training Metrics**: Accuracy and validation loss are tracked to evaluate the performance of the model during training.

The training results showed a steady decrease in loss and an increase in validation accuracy, converging to over 99.8% accuracy on the test set.

### 4. Model Evaluation
After training, the model is evaluated on the test dataset. Key metrics used for evaluation include:
- **Accuracy**: The overall classification accuracy on the test set.
- **Confusion Matrix**: Used to identify false positives and false negatives in the predictions.
- **Precision and Recall**: Important metrics for understanding the sensitivity of the model in detecting exoplanets.

### 5. Results and Discovery
The model achieved a remarkable accuracy of 99.8% in detecting exoplanets from the light curves. During testing, one interesting result revealed a star that NASA's algorithms did not flag but was identified by the model. This was humorously claimed as a new exoplanet, named **Kaggle Alpha**.

## Web Interface

In addition to the exoplanet detection model, we developed a web interface that enhances user interaction with the model. The interface features:

1. **Image Description Model**: A model that describes an input image of a planet, providing insights into its features.
2. **Climate Report Generator**: A model that generates a comprehensive report about the climate conditions on the detected planet, offering suggestions on how to adapt to those changes.
3. **Chatbot Integration**: A chatbot that interacts with users, answering questions related to the project and providing information on exoplanets and climate conditions.

## Key Files and Usage

### 1. Notebook File: `mystery_planet_99_8_cnn.ipynb`
The primary file that contains the implementation of the entire project, including:
- Data preprocessing steps
- CNN model definition
- Training and evaluation logic
- Final model export

### 2. Model Weights: `model.h5`
The trained model is saved in this file and can be loaded for future predictions.

### 3. Predictions and Analysis
Upon running the notebook, you can visualize light curves and analyze the model's predictions, identifying potential exoplanets and investigating any false positives.

## How to Run

1. **Dependencies**: Ensure you have the following libraries installed:
   - TensorFlow/Keras
   - NumPy
   - Matplotlib
   - Scikit-learn

   Install them using the following command:
   ```bash
   pip install tensorflow numpy matplotlib scikit-learn

### Notes
- I added a section for the web interface that describes the three new features you implemented.
- Adjust any file names or specific implementation details according to your actual project structure.
- Ensure that the installation command for dependencies includes any additional libraries used for the web interface.

Feel free to modify the wording or structure as you see fit!
