# Escape Vanilla JavaScript Challenge

## Project Overview

The Escape Vanilla JavaScript Challenge is an interactive web-based project designed to test and enhance understanding of Vanilla JavaScript, focusing on debugging skills, problem-solving, and the concept of abstraction. Participants will navigate through three themed "rooms," each presenting a unique challenge that requires debugging and correcting given JavaScript code to proceed. This adventure is themed around escaping the confines of Vanilla JavaScript to advance towards learning React.

## Project Brief

### Task Description

#### Room 1: The JSON Library
Scenario: You're in a library filled with books containing secrets to mastering JavaScript. To find the key to the next room, you must parse through a collection of JSON-encoded books to find the most recently published book on JavaScript.

**Logic:**
- Fetch the list of books from an external JSON file named books.json.
- Find the book with the most recent publication date.
- Display the title of this book as the key to proceed.

#### Room 2: The Set Chamber
Scenario: You encounter a chamber with two magical sets representing essential JavaScript and React concepts. To unlock the door, you must find the intersection of these sets, symbolizing the shared knowledge required for both Vanilla JavaScript and React.

**Logic:**
- Given two Sets of concepts, find the intersection.
- Display the common concepts as the code to unlock the door.

#### Room 3: The Asynchronous Labyrinth
Scenario: The final room challenges you to navigate through a labyrinth of asynchronous operations, a crucial skill for any React developer.

**Logic:**
- Fetch a sequence of directions from an external JSON file named directions.json.
- Apply these directions asynchronously to find your way through the labyrinth.
- The correct path will lead you to the React world. Display an encouraging message upon success.

### HTML Structure
The provided HTML template sets up a simple user interface for the challenge, including buttons for triggering each room's task and placeholders for displaying results.

## Lessons Learned
During the development of this project, several valuable lessons were learned, including:

- Debugging and fixing vanilla JavaScript code
- Fetching data from JSON files
- Understanding the concept of abstraction
- Working with data structures such as sets
- Implementing asynchronous JavaScript operations

## Challenges
The main challenge was debugging the given code and understanding how the logic works. Finding the correct function calls, updating the IDs of elements, and fixing the logic of the functions were all tasks that needed to be completed to pass all three rooms.

## Solutions
Several bugs in the code were fixed, including:

- In Room 1, updating the ID used for attaching the event listener and correcting the element ID for displaying the book title.
- In Room 2, adding a missing JavaScript concept to the set, calling the intersection function with the correct parameters, and correcting the function logic.
- In Room 3, adding a delay between each step, updating the ID for displaying the message, and updating the method used for setting the text.
- Also, fixing a bug in the findMostRecentBook function by adding an initial value for the most recent book and correcting the logic in the findIntersection function.

## Skills Obtained
Through this project, debugging and problem-solving skills in vanilla JavaScript were improved. Additionally, learning how to work with JSON files, asynchronous JavaScript, and sets was achieved.

## References
- [MDN: fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN: Sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
