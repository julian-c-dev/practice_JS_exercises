// my exercise:

function giveMaxNumber(num1, num2) {
  if (num1 > num2) {
    console.log("the number ", num1, " is bigger than the number ", num2);
  } else if (num2 > num1) {
    console.log("the number " + num2 + " is bigger than the number " + num1);
  } else {
    console.log("You had introducced the same number");
  }
}

giveMaxNumber(3, 4);

// Mosh first approach:
function max(a, b) {
  if (a > b) return a;
  return b;
}

let number = max(4, 2);
console.log(number);

// Mosh second approach:

function max2(a, b) {
  return a > b ? a : b;
}

let number2 = max2(4, 22);
console.log(number2);
