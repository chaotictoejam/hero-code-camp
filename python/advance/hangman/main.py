import random

def hangman():
    word_list = ['hero', 'code', 'camp', 'icecream', 'party', 'popcorn', 'chocolate']
    word_to_guess = random.choice(word_list)
    guessed_letters = []
    attempts_left = 6
    display_word = ['_'] * len(word_to_guess)

    print("Welcome to Hangman!")
    print("Try to guess the word. You have 6 attempts.")
    print(" ".join(display_word))

    while attempts_left > 0:
        guess = input("\nGuess a letter: ").lower()

        if len(guess) != 1 or not guess.isalpha():
            print("Please enter a single valid letter.")
            continue

        if guess in guessed_letters:
            print("You already guessed that letter. Try another one.")
            continue

        guessed_letters.append(guess)

        if guess in word_to_guess:
            print(f"Good guess! The letter '{guess}' is in the word.")
            for i in range(len(word_to_guess)):
                if word_to_guess[i] == guess:
                    display_word[i] = guess
            print(" ".join(display_word))

            if ''.join(display_word) == word_to_guess:
                print("\nCongratulations! You guessed the word correctly.")
                break
        else:
            attempts_left -= 1
            print(f"Oops! The letter '{guess}' is not in the word.")
            print(f"You have {attempts_left} attempts left.")

    if attempts_left == 0:
        print(f"\nSorry, you lost! The word was '{word_to_guess}'.")

if __name__ == "__main__":
    hangman()