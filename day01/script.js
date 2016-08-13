/////////////////////
// Day One Example ///
/////////////////////

// Set variable and be consistent with single or double quotes
// Never use capital "F" because it denotes an object
var name = "shane";
// Set variables to be numerical
var a = 5;
var b = 6;
var c = a + b;
// Set alert

//alert(name);

//Variables cannot start with a number, but you could throw
// an understore, like _011Shane. Are case sensitive
//alert(c);

// Strings inside quotation marks. Like a number in quotes is not an integer. It's a string.

// Boolean
var e = true;
var f = false;
//this is an undefinded variable
var g;

//setting null - nothing
var nothing = null;

//setting underfined
var something = undefined;

//declaring an empty array
var array = [];

//declaring an array with name, age, and a boolean value
var arr = ["shane", 100, false];

// Add the log method to the console function
// Log the whole array
//---console.log(arr);

// Add the log method to the console function
// Write the index 0 value to the console log
//---console.log(arr[0]);

// Use the length method to get the length of the array
//---console.log(arr.length);

// Use the length method on the name variable
//---console.log(name.length);

// Opposite of an array is an object

var car = {
  make: 'jeep',
  model: 'Wrangler',
  // No comma, just leave it blank. It's the last item.
  year: 2016
};

console.log( car.make );
