// Mosh gave:

//showNumbers(10);

/** function showNumbers(limit) (speed) {
  }
 */

//My exercise:
showNumbers(6);

function showNumbers(limit) {
  let counter = 0;
  do {
    if (counter % 2 === 0) {
      console.log(counter, "EVEN");
    } else console.log(counter, "ODD");
    counter++;
  } while (counter <= limit);
}

//Mosh approach:
showNumbers2(6);
function showNumbers2(limit2) {
  for (let i = 0; i <= limit2; i++) {
    const message = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}
