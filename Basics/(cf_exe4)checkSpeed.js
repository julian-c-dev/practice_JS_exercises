// Mosh gave:

// Speed Limit = 70
// 5 -> 1 point
// math.floor(1.3)
// 12 points -> suspended

/** CheckSpeed(50)
 *
 * function checkSpeed (speed) {
 * }
 */

// my exercise:
let output = checkSpeed(150);
console.log(output);

function checkSpeed(speed) {
  if (speed <= 70) return "OK";
  else if (speed <= 75) return "point 1";
  else if (speed <= 80) return "point 2";
  else if (speed <= 85) return "point 3";
  else if (speed <= 90) return "point 4";
  else if (speed <= 95) return "point 5";
  else if (speed <= 100) return "point 6";
  else if (speed <= 105) return "point 7";
  else if (speed <= 110) return "point 8";
  else if (speed <= 115) return "point 9";
  else if (speed <= 120) return "point 10";
  else if (speed <= 125) return "point 11";
  else if (speed <= 130) return "point 12";
  else {
    return "License suspended";
  }
}

// Mosh approach:

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed <= speedLimit + kmPerPoint) {
    console.log("OK");
    return;
  }

  const points = Math.floor((speed - speedLimit) / kmPerPoint); // eg 125 - 70 = 55 / 5 = 11
  if (points >= 12) console.log("License suspended");
  else console.log("Points ", points);
}
