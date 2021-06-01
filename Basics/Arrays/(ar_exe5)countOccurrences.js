/*
const numbers = [1, 2, 3, 4];

const count = countOccurrences(numbers, 1);

console.log(count);


function countOccurrences(array, seachElement){
   
}*/

// My Exercise:
const numbersZ = [1, 2, 3, 4, 3, 3, 3, 3, 1, 1, 2];
const countZ = countOccurrencesZ(numbersZ, 1);
console.log(countZ);

function countOccurrencesZ(arrayZ, seachElementZ) {
  const outputZ = [];
  arrayZ.forEach((numbersZ) => {
    if (seachElementZ === numbersZ) outputZ.unshift(numbersZ);
  });
  return outputZ.length;
}

// Mosh approach:
// 1st
const numbers1 = [1, 2, 3, 4, 3, 3, 3, 3, 1, 1, 2];
const count1 = countOccurrences1(numbers1, 1);
console.log(count1);

function countOccurrences1(array, seachElement) {
  let count = 0;
  for (let element of array) if (element === seachElement) count++;
  return count;
}

// 2nd (using reduce)
const numbers2 = [1, 2, 3, 4, 3, 3, 3, 3, 1, 1, 2];
const count2 = countOccurrences2(numbers2, 1);
console.log(count2);

function countOccurrences2(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement;
    return accumulator + occurrence;
  }, 0);
}
