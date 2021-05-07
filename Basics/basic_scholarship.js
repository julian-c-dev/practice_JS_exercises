let studentFirstName = window.prompt("Enter your First name: ");
let studentLastName = window.prompt("Enter your Last name: ");
let studentMiles = window.prompt("Enter the miles between home and school: ");
let studentFamCredit = window.prompt(
  "Enter the family yearly income avarage: "
);
studentData();

function studentData(studentAway, studentCredit) {
  studentAway = studentMiles >= 5 ? "yes" : "";
  studentCredit = studentFamCredit <= 20000 ? "yes" : "";
  scholarship = studentAway && studentCredit ? "approved" : "canceled";
  console.log("The student: " + studentFirstName + " " + studentLastName + ".");
  console.log("Lives " + studentMiles + " miles away from the school. ");
  console.log(
    "The family credit is " + studentFamCredit + " pounds per year. "
  );
  console.log("The scholarship has been: " + scholarship + ".");
}
