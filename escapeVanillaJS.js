document.addEventListener("DOMContentLoaded", () => {
  // Fixed bug: Correct ID used for attaching the event listener
  document.getElementById("solveRoom1").addEventListener("click", () => {
    fetch("books.json")
      .then((response) => response.json())
      .then((books) => {
        const mostRecentBook = findMostRecentBook(books);
        // Fixed bug: Correct element ID
        document.getElementById(
          "room1Result"
        ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });

  document.getElementById("solveRoom2").addEventListener("click", () => {
    const jsConcepts = new Set([
      "closure",
      "scope",
      "hoisting",
      "async",
      "this",
    ]); // Added 'this' to JS concepts
    const reactConcepts = new Set(["components", "jsx", "hooks", "async"]);
    // Fixed bug: Correct function call
    const commonConcepts = findIntersection(jsConcepts, reactConcepts);
    document.getElementById(
      "room2Result"
    ).textContent = `The code to unlock the door is: ${Array.from(
      commonConcepts
    ).join(", ")}`;
  });

  // Fixed bug: Asynchronous function handled correctly
  document.getElementById("solveRoom3").addEventListener("click", async () => {
    try {
      const directions = await fetch("directions.json").then((response) =>
        response.json()
      );
      const message = await navigateLabyrinth(directions);
      document.getElementById("room3Result").textContent = message;
    } catch (error) {
      console.error(error);
    }
  });
});

function findMostRecentBook(books) {
  // Fixed bug: Logic error corrected
  return books.reduce((mostRecent, book) => {
    const mostRecentDate = new Date(mostRecent.published);
    const bookDate = new Date(book.published);
    return bookDate > mostRecentDate ? book : mostRecent;
  }, books[0]);
}

function findIntersection(setA, setB) {
  // Fixed bug: Correct logic
  return new Set([...setA].filter((item) => setB.has(item)));
}

async function navigateLabyrinth(directions) {
  for (let direction of directions) {
    // Fixed bug: Added delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Navigating: ${direction.step}`);
  }
  return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
