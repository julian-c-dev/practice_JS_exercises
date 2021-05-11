// generate secret number is a random integer between 1 and 12
const min = 1;
const max = 12;

let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min;

let guesses = 0; // for storing the number of guesses
let hint = ""; // for storing hint
let number = 0;
do {
  // get input from user
  let input = prompt(`Please enter a number between ${min} and ${max}` + hint);
  // get the integer
  number = parseInt(input);
  // increase the number of guesses
  guesses++;
  // check input number with the secret number
  // provide hint if needed
  if (number > secretNumber) {
    hint = ", and less than " + number;
  } else if (number < secretNumber) {
    hint = ", and greater than " + number;
  } else if (number == secretNumber) {
    alert(`Bravo! you're correct after ${guesses} guess(es).`);
  }
} while (number != secretNumber);
