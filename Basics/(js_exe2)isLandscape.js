// Mosh gave:
/** function isLandscape(width, height) {
 * }
 */

// my exercise:

function isLandscape(width, height) {
  return width > height ? true : false;
}

let picture = isLandscape(1000, 1500);
console.log(picture);

// Mosh first approach:

function isLandscape2(width, height) {
  return width > height; // NOT NECCESARY -> ? true : false;
}

let picture2 = isLandscape2(1500, 1000);
console.log(picture2);
