/*
Shane Eckert
JS1 Day 03 assignment
*/

// Prompt user for what they would like to do. Store as userResp
var userResp = prompt('What would you like to do?');
// If the user clicks on cancel, we get NULL. So let's test for that and
// alert and console log that they did so.
if ( userResp == null){
  alert('You canceled!');
  console.log(userResp);
// Could use || above to save coding, but I like having to cases and two different messages
// if ( userResp == null || userResp ==""){
// so let's test for no value and then ask for input not a blank submission
// Can't wait until we are using forms and not alerts!
} else if (userResp == ""){
  alert('Why blank?');
  console.log(userResp);
// If all is well, then let's alert and log the user's response
} else {
  alert(userResp);
  console.log(userResp);
}
