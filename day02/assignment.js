
var userResp = prompt('What would you like to do?');
if ( userResp == null){
  alert('You canceled!');
  console.log(userResp);
} else if (userResp == ""){
  alert('Why blank?');
  console.log(userResp);
} else {
  alert(userResp);
  console.log(userResp);
}
