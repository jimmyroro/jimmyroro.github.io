// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

/* use a for loop starting at zero, incrementing. if statement using Number.isInterger() to print FizzBuzz. if else to print Fizz. if else to print Buzz. */
function fizzBuzz()  {
    // YOUR CODE GOES BELOW HERE //
for (var num = 1; num <= 100; num++) {
    /* Number.isInteger will determine if the number is divisible by 3 or 5 evenly. we have to do FizzBuzz first because divisibility by 3 and 5 is the most specific instance
    and if we did only by 3 or only by 5 first the loop would print either of those and then terminate without checking for 3 and 5. */
    if (Number.isInteger(num/3) === true && Number.isInteger(num/5) === true) {
        console.log("FizzBuzz");
    }  else if (Number.isInteger(num/5) === true) {
        console.log("Buzz");
    } else if (Number.isInteger(num/3) === true) {
        console.log("Fizz");
    } else {
        console.log(num);
    }
}


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}