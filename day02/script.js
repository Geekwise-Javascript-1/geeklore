
// Ask for the user's firstname
//var firstname = prompt('What is your first name?');

// Ask for the user's lastname
//var lastname = prompt('What is your last name?');

// Console the user's firstname
//console.log(firstname);

// Alert the user's lastname
//alert(lastname);

//Confirm anything and alert it
//var whattheysaid = confirm('Do you like Pizza?');
//alert(whattheysaid);


var a = "test" + "test";
//consol.log(a);

var b = 5;
var c = 10;
var d = b + c;
//consol.log(d);

var constant =10;
var x ='10';
//var userPrompt = prompt('Choose a number please.');

//is x or y true
//console.log(constant == userPrompt || userPrompt === x);

// is x and y true
//console.log(constant == userPrompt && userPrompt === x);

//parse for number
//userPrompt = parseInt(userPrompt);

// is x and y true
//console.log(constant == userPrompt);

//console.log(constant == userPrompt);

//is what I get Not a number?
//console.log( isNaN(5) );

//var userResp = prompt('Choose a number');
//userResp = parseInt(userResp);
//if ( isNaN(userResp) ){
//  console.log('Not a number');
//  alert('Was that a number?');
//} else {
//  console.log('Thats a number');
//}



var userResp = prompt('What is your age?');
var userResp2 = prompt('Boy or Girl?');
userResp = parseInt(userResp);
if ( userResp >= 21 && userResp2 == 'Boy'){
  console.log('Beer Time Man!');
  alert('You are legal');
} else if ( userResp >= 21 && userResp2 == 'Girl'){{
  console.log('Beer Time Girl!');
  alert('You are legal');
  }
} else {
  console.log('No Beer');
  alert('Not Legal. Walk away.');
}
