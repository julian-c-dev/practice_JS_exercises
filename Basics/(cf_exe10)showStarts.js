// Mosh gave:

//showStars(10);

/*function showStars(rows){
 }
*/

//My exercise: - Mine seems less complex thant Mosh approach! well Done!

function showStars(rows) {
  let stars = "";
  for (let i = 0; i < rows; i++) {
    stars += "*";
    console.log(stars);
  }
}

showStars(10);

//Mosh approach:

function showStars2(rows2) {
  for (let row = 1; row <= rows2; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*";
    console.log(pattern);
  }
}

showStars2(5);
