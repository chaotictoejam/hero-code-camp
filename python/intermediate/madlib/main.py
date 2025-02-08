import random


def get_user_input(prompt):
    return input(prompt)


def generate_mad_lib():
    nouns = [get_user_input("Enter a noun: ") for _ in range(2)]
    verb = get_user_input("Enter a verb: ")
    adjective = get_user_input("Enter an adjective: ")
    place = get_user_input("Enter a place: ")

    templates = [
        f"One day, a {adjective} {nouns[0]} went to {place} to {verb}. Everyone was amazed by the {nouns[1]}!",
        f"In {place}, a {adjective} {nouns[0]} decided to {verb} with a {nouns[1]}. It was the best day ever!",
        f"Have you ever seen a {adjective} {nouns[0]} {verb} at {place}? It’s even funnier when a {nouns[1]} joins in!"
    ]

    print("\nHere is your Mad Lib:")
    print(random.choice(templates))


if __name__ == "__main__":
    generate_mad_lib()
