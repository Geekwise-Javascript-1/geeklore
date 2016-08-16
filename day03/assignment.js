/*
Shane Eckert
JS1 Assignment
August 16 2016
shane@automattic.com
*/

// Prompt for user's name
var userFirst = prompt('What is your name?');

//Function is capUserName
function capUserName(uN){
  /*
  Take the value of userFirst as uN and set capName to be
  the uppercase letter at position 0 (charAt) and then append
  the rest of the letters in the string. Starting at position 1 since that will be
  after the 0 place which is the uppercase letter. Lowercase the letters just to be sure
  */
  var capName = uN.charAt(0).toUpperCase() + uN.substr(1).toLowerCase();
  // Return capName
  return capName;
// Everything after a return is ignored.
}

console.log( capUserName(userFirst) );
