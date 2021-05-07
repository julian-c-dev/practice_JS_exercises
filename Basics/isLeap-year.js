let year = window.prompt("Introduce a year: ");

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap-year");
} else {
  console.log("Non-Leap-year");
}
