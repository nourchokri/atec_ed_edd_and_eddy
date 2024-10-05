import base64
import requests
import json
import os
import sys

# Get the image path from command line arguments
if len(sys.argv) != 2:
    print("Usage: python hazem.py <image_path>")
    exit(1)

image_path = sys.argv[1]

# API key (make sure to set this in your environment)
api_key = os.getenv('55307C4C-C643-4BA2-8B0C-86CD289A9B692668800D531C71-A7E0-4881-A736-86BBBC81BDA6')  # Use your environment variable name

if not api_key:
    raise ValueError("API key not found. Please set the ASTICA_API_KEY environment variable.")

# Read and encode the image as Base64
try:
    with open(image_path, "rb") as image_file:
        encoded_image = base64.b64encode(image_file.read()).decode('utf-8')
except FileNotFoundError:
    print(f"Error: Image file {image_path} not found.")
    exit(1)

# Prepare the payload
payload = {
    "tkn": api_key,
    "modelVersion": "1.0_full",
    "input": f"data:image/jpeg;base64,{encoded_image}",  # Base64 image data
    "visionParams": "describe",
    "objects_custom_kw": "",
    "gpt_prompt": "",
    "prompt_length": "90"
}

# API endpoint URL
url = 'https://vision.astica.ai/describe'

# Send the POST request and handle possible errors
try:
    response = requests.post(url, headers={'Content-Type': 'application/json'}, json=payload)
    response.raise_for_status()  # Raise an HTTPError for bad responses (4xx, 5xx)
    print(f"Response status code: {response.status_code}")
    print(json.dumps(response.json(), indent=4))  # Pretty print the JSON response
except requests.exceptions.RequestException as e:
    print(f"Error during the request: {e}")
