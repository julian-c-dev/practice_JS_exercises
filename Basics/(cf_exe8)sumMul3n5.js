// Mosh gave:

//console.log(sum(10))
//multiples of 3: 3, 6, 9
//multiples of 5: 5, 10

/** function sum(limit) {
  }
 */

//My exercise:
function sum(limit) {
  let mul3 = 0;
  let mul5 = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0) mul3 = i + mul3;
    if (i % 5 === 0) mul5 = i + mul5;
  }

  return mul3 + mul5;
}
console.log(sum(10));

//Mosh approach:
function sum2(limit2) {
  let sum = 0;

  for (let i = 0; i <= limit2; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(sum2(10));
