// My exercise:

const numbers = [1, 2, 3, 4];
const max1 = getMax1(numbers);
const max2 = getMax2(numbers);
const max3 = getMax3(numbers);
console.log(max1);
console.log(max2);
console.log(max3);

function getMax1(array) {
  if (array.length === 0) return undefined;
  let maxNumber = Math.max(...array);
  return maxNumber;
}

// Mosh  first approach:

function getMax2(array) {
  if (array.length === 0) return undefined;
  let max = array[0];
  for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];
  return max;
}

// Mosh second approach: (using reduce):
function getMax3(array) {
  if (array.length === 0) return undefined;
  array.reduce((a, b) => (a > b ? a : b));
}
