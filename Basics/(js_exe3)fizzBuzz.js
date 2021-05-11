/** Mosh gave:
 * Divisible by 3 => Fizz
 * Divisible by 5 => Buzz
 * Divisible by both 3 and 5  => FizzBuzz
 * Not divisible by 3 or 5 => input
 * not a number => 'not a number
 *
 * const output = fizzBuzz(false);
 * console.log(output);
 *
 * function fizzBuzz(input){
 * }
 * */

// my exercise:

function fizzBuzz(input) {
  // swap by typeof expression
  if (input === true) return "not a number";
  else if (input === false) return "not a number";

  if (input % 5 === 0 && input % 3 === 0) return "fizzBuzz";
  else if (input % 3 === 0) return "Fizz";
  else if (input % 5 === 0) return "Buzz";
  else if (input >= 0) return input;
  else {
    return "not a number";
  }
}

const output = fizzBuzz(false);
console.log(output);

// Mosh approach:

function fizzBuzz2(input2) {
  if (typeof input2 !== "number") return NaN;
  if (input % 5 === 0 && input % 3 === 0) return "fizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}

const output2 = fizzBuzz2(false);
console.log(output2);

// when you input 0 the output is "fizzBuzz" in both approachs, why?
