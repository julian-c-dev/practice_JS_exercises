// Mosh gave:

//const marks = [80, 80, 50];

//Average = 70

// 1 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

/** console.log(calculateGrade(marks));
 * function calculateGrade(marks){
 }
 */

//My exercise:
const marks = [90, 100, 90];

function calculateGrade(marks) {
  let sum = 0;

  for (let value of marks) {
    sum += value;
  }

  let average = sum / 3;

  if (average <= 59) return "F";
  else if (average <= 69) return "D";
  else if (average <= 79) return "C";
  else if (average <= 89) return "B";
  else if (average <= 100) return "A";
}

console.log(calculateGrade(marks));

//Mosh 1st approach: ALMOST the SAME

function calculateGrade2(marks) {
  let sum = 0;

  for (let mark of marks) {
    sum += mark;
  }

  let average = sum / marks.lenght;

  if (average < 59) return "F";
  if (average < 69) return "D";
  if (average < 79) return "C";
  if (average < 89) return "B";
  return "A";
}

console.log(calculateGrade2(marks));

//Mosh 2nd approach: He explained that we should split our functions in more specific funtions in order to reuse in the future.

function calculateAvarage(array) {
  let sum = 0;
  for (let value of array) sum += value;
  return sum / array.lenght;
}

function calculateGrade2(marks) {
  const average = calculateAvarage(marks);
  if (average < 59) return "F";
  if (average < 69) return "D";
  if (average < 79) return "C";
  if (average < 89) return "B";
  return "A";
}

console.log(calculateGrade2(marks));
