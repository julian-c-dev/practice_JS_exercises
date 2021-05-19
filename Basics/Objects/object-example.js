const circle = {
  radius: 1, // properties (variables, another object, arrays)
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function () {
    // method
    console.log("draw");
  },
};

console.log(circle);
circle.draw();
