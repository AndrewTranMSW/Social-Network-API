const usernames = [
  "John",
  "Jones",
  "Jayden",
  "Jen",
  "Jayce",
  "Nick",
  "Mark",
  "Sarah",
  "Ulysses",
];

const thoughts = [
  "Test test 123",
  "Bacon is delicious",
  "I like apples.",
  "I am going to pet the dog",
  "I like turtles",
];

const reactions = ["Good", "Bad", "Meh", "LOL", "Okay", "Nice"];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets random thought
const getRandomThought = () => `${getRandomArrItem(thoughts)}`;

// Gets random username
const getRandomUserName = () =>
  `${getRandomArrItem(usernames)}${Math.floor(Math.random() * 10 + 1)}`;

//Gets random reaction

const getRandomReaction = () => `${getRandomArrItem(reactions)}`;
// Export the functions for use in seed.js
module.exports = { getRandomThought, getRandomUserName, getRandomReaction };
