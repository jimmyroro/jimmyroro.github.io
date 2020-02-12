// #!/usr/bin/env node

'use strict';

/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * // hour is 0-11
 * Good Morning!
 *
 * // hour is 12-16
 * Good Afternoon! 
 *
 * // hour is 17-21
 * Good Evening!
 *
 * // hour is 22-24 
 * Good Night!
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *      can be used to test that the hour is within the morning threshold. 
 *      It's best to be consistant and use the SAME type of comparison for 
 *      each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */

/**
 * I: a number, the hour of the day
 * O: console.log of a greeting, depending on time of day
 * C/E:
 */
function greeter(hour) {
    // YOUR CODE BELOW HERE //
    //order of statements is important, and our comparison must be inclusive so we won't have gaps. if the hour is less than or equal to 11, print "Good Morning!"
    if (hour <= 11) {
        console.log("Good Morning!");
        // becuase our if statement checked if hour <= 11, we know it will read this next chain only if hour > 11, so we can simply use hour <= 16 as our condition
    } else if (hour <= 16) {
        console.log("Good Afternoon!");
        // as before we know that this statement will only be read if hour is greater than 16, so we can use hour <= 21 to console log "Good Evening!"
    } else if (hour <= 21) {
        console.log("Good Evening!");
        //if the hour is not <= 21 then we will print "Good Night!". this would also print if we weren't using a number as our argument
    } else {
        console.log("Good Night!");
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}
/*
 * To test our greeter when developing, we need to fake some input data, ie, 
 * the hour, so just change the input value to check your work.
 * 
 * In a more realistic setting, you might do something like this to get the 
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter("string");



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.greeter = greeter;
}