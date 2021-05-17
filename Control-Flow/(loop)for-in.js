/**
 * for
 * while
 * do-while
 *
 * Repeat an action a number of times (even infinite)
 */

//In order to iterate on items of an objetc or array we have:
// for-in

// for-in over object
const person = {
  name: "Mosh",
  age: 30,
};

for (let key in person) console.log(key, person[key]);

// for-in over array
const colors = ["red", "green", "blue"];
for (let index in colors) console.log(index, colors[index]);
