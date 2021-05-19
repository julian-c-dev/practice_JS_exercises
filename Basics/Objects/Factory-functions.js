//factory functions

function createObj(number) {
  return {
    number,
    draw() {
      console.log("I am an object with the number", number);
    },
  };
}

const obj1 = createObj(1);
console.log(obj1.draw());

const obj2 = createObj(2);
console.log(obj2.draw());
