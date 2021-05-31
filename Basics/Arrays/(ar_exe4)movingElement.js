/*
const numbers = [1, 2, 3, 4];

const output = move (numbers, 0, 0);

console.log(output);


function move (array, index, offset){
   
}*/

// Mosh approach:
const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, 1);
console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || index < 0) {
    console.error("Invalid input");
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

//My exercise:
/*
const numbers = [1, 2, 3, 4];
const output = move(numbers, 0, 1);
console.log(output);

function move(array, index, offset) {
  let selectedNumber = array[index];
  let counter = index + offset;

  if (index > array.length - 1 || index < 0)
    return console.error("Invalid input");
  if (counter > 3 || counter < 0) return console.error("Invalid input");

  array.splice(counter, 0, array[index]);
  if (offset < 0) array.shift();
  if (offset > 0) array.pop();

  console.log("Index selected: ", index);
  console.log("Number selected: ", selectedNumber);
  console.log("Positions moving: ", offset);
  console.log("New index position: ", counter);
  console.log("New Array: ", array);
}
*/
