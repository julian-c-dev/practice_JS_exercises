// Mosh gave:

//showPrimes(20);

//Prime (whose factors are only 1 and itself)
// 11 = 1, 11

//Composite
// 12 = 1, 2, 3, 4, 6, 12

/*function showPrimes(limit){
 }
*/

//Mosh exercise 1st part:  // I couldn't do it by myself, not idea about prime numbers

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

showPrimes(10);

//Mosh exercise 2st part:

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}
