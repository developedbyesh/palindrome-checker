# Palindrome Checker

A simple web application that checks if a given word or phrase is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and case).

## Features

- Allows users to enter a word or phrase.
- Checks whether the input is a palindrome.
- Displays the result dynamically on the page with color-coded feedback.
- Handles case sensitivity and ignores spaces and special characters.

## Technologies Used

- **HTML**: Provides the structure for the input field, button, and result display.
- **CSS**: Styles the application to make it visually appealing.
- **JavaScript**: Implements the logic for checking whether the input is a palindrome.

## How It Works

1. The user types a word or phrase into the input field.
2. When the user clicks the **Check** button, the app checks if the input is a palindrome:
   - It removes non-alphanumeric characters.
   - Converts the remaining characters to lowercase.
   - Compares the input to its reversed version.
3. The result is displayed:
   - **Green** message if the input is a palindrome.
   - **Red** message if the input is not a palindrome.
   - **Orange** message if no input is provided.

## Project Structure

- **index.html**: The main HTML file containing the structure of the app.
- **style.css**: The CSS file that provides styling to the app's elements.
- **script.js**: The JavaScript file that contains the palindrome checking logic and DOM manipulation.

## Installation

To run the Palindrome Checker locally:

1. Clone or download this repository:
   ```bash
   git clone https://github.com/developedbyesh/palindrome-checker.git
   ```
