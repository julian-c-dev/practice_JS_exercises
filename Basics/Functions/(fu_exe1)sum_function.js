// sum (1,2,3,4) => 10

function sum1(...items) {
  return items.reduce((a, b) => a + b);
}

console.log(sum1(1, 2, 3, 4));

// sum ([1,2,3,4]) => 10
//we should use array.isArray
// Mosh approach:

function sum2(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];

  return items.reduce((a, b) => a + b);
}
