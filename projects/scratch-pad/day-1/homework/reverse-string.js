// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */


function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    /*create an empty string to collect the output */
  var reversedString = "";          
  /* use a for loop to loop backward over the string */
  for (var i = input.length - 1; i >= 0; i--) {
    /* var character will be the last character of the string, and we add it to the empty string we made earlier, then decrement */
    var character = input[i];
    reversedString += character;
  }
  return reversedString;
    
    // YOUR CODE GOES ABOVE HERE //
}
function Hat() {
var brand = "shhhh";
}
var myHat = new Hat();
console.log(myHat.brand);

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}