"""
import http.client
import json

# Function to get a response from the API
def get_chatgpt_response(temperature, humidity, atmosphere_composition, soil_quality, water_availability, radiation_levels):
    conn = http.client.HTTPSConnection("chatgpt-42.p.rapidapi.com")

    # Create the payload using the ecosystem data
    user_input = (
        f"Generate an ecosystem status report in brief bullet points based on the following data:\n"
        f"Temperature: {temperature}°C\n"
        f"Humidity: {humidity}%\n"
        f"Atmosphere Composition: {atmosphere_composition}\n"
        f"Soil Quality: {soil_quality}\n"
        f"Water Availability: {water_availability}\n"
        f"Radiation Levels: {radiation_levels}\n"
        "Assess the potential habitability for human life and provide actionable recommendations in bullet points."
    )
    
    payload = json.dumps({
        "messages": [{"role": "user", "content": user_input}],
        "system_prompt": "You are a helpful assistant for generating ecosystem reports in bullet points.",
        "temperature": 0.9,
        "top_k": 5,
        "top_p": 0.9,
        "max_tokens": 512,  # Adjusted for potentially longer responses
        "web_access": False
    })

    headers = {
        'x-rapidapi-key': "ca931ee097msh6bfb8e539c545bfp1b847ajsnda1cf939b904",  # Replace with your RapidAPI key
        'x-rapidapi-host': "chatgpt-42.p.rapidapi.com",
        'Content-Type': "application/json"
    }

    conn.request("POST", "/conversationgpt4-2", payload, headers)

    res = conn.getresponse()
    data = res.read()

    return data.decode("utf-8")

# Example ecosystem data
temperature = -30  # Example temperature in Celsius
humidity = 20  # Example humidity percentage
atmosphere_composition = "20% Oxygen, 60% Nitrogen, 10% CO2"
soil_quality = "Poor in nutrients, high pH"
water_availability = "Limited to underground sources"
radiation_levels = "High"

# Call the function and print the response
response = get_chatgpt_response(temperature, humidity, atmosphere_composition, soil_quality, water_availability, radiation_levels)
print(response)
"""
import http.client
import json
import sys

# Function to get a response from the API
def get_chatgpt_response(temperature, humidity, atmosphere_composition, soil_quality, water_availability, radiation_levels):
    conn = http.client.HTTPSConnection("chatgpt-42.p.rapidapi.com")

    # Create the payload using the ecosystem data
    user_input = (
        f"Generate an ecosystem status report in brief bullet points based on the following data:\n"
        f"Temperature: {temperature}°C\n"
        f"Humidity: {humidity}%\n"
        f"Atmosphere Composition: {atmosphere_composition}\n"
        f"Soil Quality: {soil_quality}\n"
        f"Water Availability: {water_availability}\n"
        f"Radiation Levels: {radiation_levels}\n"
        "Assess the potential habitability for human life and provide actionable recommendations in bullet points."
    )
    
    payload = json.dumps({
        "messages": [{"role": "user", "content": user_input}],
        "system_prompt": "You are a helpful assistant for generating ecosystem reports in bullet points.",
        "temperature": 0.9,
        "top_k": 5,
        "top_p": 0.9,
        "max_tokens": 512,  # Adjusted for potentially longer responses
        "web_access": False
    })

    headers = {
        'x-rapidapi-key': "ca931ee097msh6bfb8e539c545bfp1b847ajsnda1cf939b904",  # Replace with your RapidAPI key
        'x-rapidapi-host': "chatgpt-42.p.rapidapi.com",
        'Content-Type': "application/json"
    }

    conn.request("POST", "/conversationgpt4-2", payload, headers)

    res = conn.getresponse()
    data = res.read()

    return data.decode("utf-8")

if __name__ == "__main__":
    # Read command-line arguments
    if len(sys.argv) != 7:
        print("Usage: python nour.py <temperature> <humidity> <atmosphere_composition> <soil_quality> <water_availability> <radiation_levels>")
        sys.exit(1)
    
    temperature = sys.argv[1]
    humidity = sys.argv[2]
    atmosphere_composition = sys.argv[3]
    soil_quality = sys.argv[4]
    water_availability = sys.argv[5]
    radiation_levels = sys.argv[6]

    # Call the function and print the response
    response = get_chatgpt_response(temperature, humidity, atmosphere_composition, soil_quality, water_availability, radiation_levels)
    print(response)
