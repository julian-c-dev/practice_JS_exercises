/*
const numbers = arrayFromRange(-10, -4);
console.log(numbers);
*/

//My exercise

function arrayFromRange(min, max) {
  const array = [];

  while (min < max) {
    min++;
    array.push(min);
  }

  while (max < min) {
    max++;
    array.push(max);
  }
  console.log(array);
}

const numbers = arrayFromRange(-10, -1);
console.log(numbers);

//Mosh approach:

function arrayFromRange2(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

const numbers2 = arrayFromRange2(-10, -1);
console.log(numbers2);
