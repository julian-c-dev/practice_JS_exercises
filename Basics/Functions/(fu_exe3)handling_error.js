//exercise to practice the handling error based in a previous array exercise (ar_exe5 - countOccurrences.js)

try {
  const numbers2 = true;
  const count2 = countOccurrences2(numbers2, 1);
  console.log(count2);
} catch (e) {
  console.log(e.message);
}

function countOccurrences2(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("value is not a array");

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement;
    return accumulator + occurrence;
  }, 0);
}
