//constructor functions

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("I am an object with the color", this.color);
  };
}
const Circle1 = new Function(
  "radius",
  ` this.radius = radius;
    this.draw = function () {
      console.log("I am an object");
  };
}`
);

const objRed = new CreateObj2(red);

const now = new Date();
const date1 = new Date();
