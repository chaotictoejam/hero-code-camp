import random

def magic_8_ball():
    responses = [
        "Yes, definitely!",
        "It is certain.",
        "Without a doubt.",
        "Most likely.",
        "Ask again later.",
        "Better not tell you now.",
        "Don't count on it.",
        "Very doubtful."
    ]
    
    while True:
        question = input("Ask the Magic 8-Ball a question (or type 'quit' to exit): ")
        if question.lower() == 'quit':
            print("Goodbye!")
            break
        print(random.choice(responses))
        print("-")

if __name__ == "__main__":
    magic_8_ball()
