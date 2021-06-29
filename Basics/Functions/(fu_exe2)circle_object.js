// circle.radius = 2;
// console.log(circle.area);

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

console.log(circle.area);

//we can read (get) the area, but not modify (setter)
