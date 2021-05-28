/*
const numbers = [1, 2, 3, 4];
console.log(numbers.includes(1));

function includes (array, searchElement){
   
}
*/

//My exercise: It doesnt work :(
const numbers = [1, 2, 3, 4];

function includes(array, searchElement) {
  array.some(function (value) {
    return value === searchElement;
  });
}

includes(numbers, 1);

//Mosh approach:

const numbers2 = [1, 2, 3, 4];

function includes2(array2, searchElement2) {
  for (let element of array2) if (element === searchElement2) return true;
  return false;
}

includes2(numbers2, 1);
