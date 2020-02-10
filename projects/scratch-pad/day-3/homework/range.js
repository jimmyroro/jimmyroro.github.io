// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
 
 /*Input: two numbers
 Output: an array with all integers between the two parameters
 Constraints: if first argument is greater than the second, return range in reverse order
 Edge case: if the arguments are strings, if they are equal
 
 create array variable to hold our end range of numbers. if statement to determine if start > end. for start<end, use a for loop to return value between the two, 
 counting up. push numbers into array variable. for start>end, counting down. return array*/
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    let range = [];
    if (start < end) {
        for (let x = start; x <= end; x++) {
            range.push(x);
        }
        return range;
    } else if (start > end) {
        for (let y = start; y >= end; y--) {
            range.push(y);
        }
        return range;
    }
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}

console.log(range(12,-3));



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}