import random

# Define some basic responses
responses = {
    "hello": ["Hi there!", "Hello!", "Hey, how can I assist you today?"],
    "how are you": ["I'm doing great, thank you!", "I'm good, how about you?", "I'm just a bot, but I'm doing well!"],
    "bye": ["Goodbye!", "See you later!", "Take care!"],
    "default": ["I'm sorry, I didn't understand that.", "Can you please rephrase?", "I'm not sure what you mean."]
}

def get_response(user_input):
    # Normalize input to lowercase to handle case insensitivity
    user_input = user_input.lower()
    
    # Respond based on the user's input, default if no match
    return random.choice(responses.get(user_input, responses["default"]))

def chat():
    print("Hello! I am your chatbot. Type 'bye' to end the conversation.")
    
    while True:
        user_input = input("You: ")
        if user_input.lower() == "bye":
            print("Bot: Goodbye!")
            break
        
        response = get_response(user_input)
        print(f"Bot: {response}")

# Start the chatbot
chat()
