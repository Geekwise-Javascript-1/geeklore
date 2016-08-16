/*
Shane Eckert
In Class Work - JS1
*/

// String Object
// Looking at built in functionality
var str = '   Shane   ';
// Print variable
//console.log(str);

// Print the length of the string.
//console.log(str.length);

// Use the place of a value to get the variable.
//console.log(str.charAt(0));

//A function inside an object is a method

// Trim out all the spaces in a variable using the trim method.
//console.log(str.trim(str));

// Need to assign the result of str.trim to newStr.
//var newStr = str.trim();
//console.log(newStr);

/* Let's to horrible things with math!
-------------------Math Objects------------------
*/
//var randNum = Math.random();
//console.log(randNum);

//Round it up
//var randNum = Math.round(Math.random());
//console.log(randNum);

// Give it a range and add 1 so we don't hit zero
//var randNum = Math.round(Math.random() * 10) +1;
//console.log(randNum);

// Make sure we don't get 11 by rounding down one.
//var randNum = Math.floor(Math.random() * 10) +1;
//console.log(randNum);

/* Date Object */
//var toDay = Date;
//console.log(toDay);

// Add the now method to see how many seconds since Jan 1st 1970
//var toDay = Date;
//console.log(toDay.now());

// Let's get today's date formatted.

//var toDay = new Date;
//console.log(toDay);

// Get Date  --- FIGURE THIS OUT AT HOME - Dude did not follow through.
//var toDay = new Date;
//console.log(toDay.getDate());
//console.log(toDay.getFullYear());

//Print out August 15th 2016
//console.log(toDay.getFullYear());
//console.log(toDay.getMonth());
//console.log(toDay.getDay());

//var firstName = "shane";

/* Basic Function */
//Function then name of the function
//function newFunction(){
//  var lastName = "eckert";
//  alert(firstName);
//  alert(lastName);
//}

// Call Function
//newFunction();


/* To Do: Combine the string object with the date object. Set the variables to be outisde of the function.
Set the date from inside the function.
Alert your name and birthday
Try setting the date for your birthday - or use the value
*/


// Set name variable outside of function.
//var firstName = "Shane";
//var lastName = "Eckert";

//Prompt for variable that we will pass as an argument.
//var firstName = prompt('What is your first name?.');
// var lastName = prompt('What is your last name?');
// var userColor = prompt('Choose a color.');
// var userYear = prompt('What is your Birthday Year?');
// var userMonth = prompt('What is your Birthday Month?');
// var userDay = prompt('What is your Birthday Day?');
//
// var bDay = [ userYear, userMonth, userDay]
// console.log(bDay[0]);
// Create function to alert my name and birthday and set date variable inside function.
// Adding a parameter
//function shaneFunc(firstname, lastname, color, birthdayyear, birthdaymonth, birthdayday){

  // var toDay = new Date;
  // today.setFullYear(1900);
  // Set to the 1st - based on 0
  // toDay.setDate(00);
  // toDay.setMonth(00);

  //var birthday = "January 1st 1900";
//  console.log(firstname + ' ' + lastname + ' ' + birthday + ' ' + color + ' ' + birthdayyear + ' ' + birthdaymonth) + ' ' + birthdayday;
//}

// Call Function with arguments
//shaneFunc(firstName, lastName, userColor, bDay[0], bDay[1], bDay[2]);

// Ask for full written birthday, using the split method. Make it an array and break it up to find the birthday.

// Without Return
// var userFirst = prompt('First');
// var userLast = prompt('Last');
// var userBday = prompt('Birthday');
// var userColor = prompt('Color');
//
// function setBday(uF, uL, uB, uC){
//   var bdayArray = uB.split(' ');
//
//   console.log(
//     uF
//     + ' '
//     + uL
//     + " "
//     + bdayArray[0] + ' ' + bdayArray[1] + ' ' + bdayArray[2]
//     + ". "
//     + 'Your color is '
//     + uC
//   );
//
// }
// setBday(userFirst, userLast, userBday, userColor);


/* USER RETURN INSTEAD */

var userFirst = prompt('First');
var userLast = prompt('Last');
var userBday = prompt('Birthday');
var userColor = prompt('Color');

function setBday(uF, uL, uB, uC){
  var bdayArray = uB.split(' ');

  return uF + ' ' + uL + " " + bdayArray[0] + ' ' + bdayArray[1] + ' ' + bdayArray[2] + ". " + 'Your color is ' + uC;
// Everything after a return is ignored.
}

console.log( setBday(userFirst, userLast, userBday, userColor) );



/*
The "new" operator creates an instance of
a user-defined object type or of one of the built-in object
types that has a constructor function.

***Syntax***
new constructor[([arguments])]

***Parameters***
constructor
    A function that specifies the type of the object instance.
arguments
    A list of values that the constructor will be called with.
*/


// var monthNames = [
//   "January", "February", "March",
//   "April", "May", "June", "July",
//   "August", "September", "October",
//   "November", "December"
// ];
//
// var date = new Date();
// var day = date.getDate();
// var monthIndex = date.getMonth();
// var year = date.getFullYear();
//
// console.log(day, monthNames[monthIndex], year);
// document.write(day + ' ' + monthNames[monthIndex] + ' ' + year);
