let role = "guest";

switch (role) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  default:
    console.log("Unknown User");
}

/** 
 *  Same as logic of previous program but with IF and ELSE
 * 
 if (role === "guest") {
  console.log("Guest User");
} else if (role === "moderator") {
  console.log("Moderator User");
} else console.log("Unknown User");
*/
