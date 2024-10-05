import http.client
import json

# Function to get a response from the API
def get_chatgpt_response(user_input):
    conn = http.client.HTTPSConnection("chatgpt-42.p.rapidapi.com")

    # Create the payload using user input
    payload = json.dumps({
        "messages": [{"role": "user", "content": user_input}],
        "system_prompt": "",
        "temperature": 0.9,
        "top_k": 5,
        "top_p": 0.9,
        "max_tokens": 256,
        "web_access": False
    })

    headers = {
        'x-rapidapi-key': "3856f23521msh77fdc9ff3cda7c4p1b35f9jsn687b3a16ca64",  # Replace with your RapidAPI key
        'x-rapidapi-host': "chatgpt-42.p.rapidapi.com",
        'Content-Type': "application/json"
    }

    conn.request("POST", "/conversationgpt4-2", payload, headers)

    res = conn.getresponse()
    data = res.read()

    return data.decode("utf-8")

# Get user input
user_input = input("Enter your message: ")

# Call the function and print the response
response = get_chatgpt_response(user_input)
print(response)