// Mosh gave:

//const array = [0, null, undefined, '', 2, 3];
//console.log countTruthy(array)); ==> output will be 2
//Falsy values: undefined, null, '', false, 0, NaN

/** function countTruthy(array) {
  }
 */

//My exercise:

const array1 = [1, 2, 3, null, 0, "Julian", false, true]; // eg. output => 5

function countTruthy(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      counter++;
    }
  }
  console.log(counter);
}

countTruthy(array1);

//Mosh approach:
const array2 = [1, 2, 3, null, 0, "Julian", false, true]; // eg. output => 5

function countTruthy2(array2) {
  let count = 0;
  for (let value of array2) if (value) count++;
  return count;
}

countTruthy2(array2); // check on the console
