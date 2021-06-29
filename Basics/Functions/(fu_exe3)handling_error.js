//exercise to practice the handling error based in a previous array exercise (ar_exe5 - countOccurrences.js)

try {
  const numbers = true;
  const count = countOccurrences(numbers, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("value is not a array");

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement;
    return accumulator + occurrence;
  }, 0);
}
