// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
 
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    /* we need to create a function nested within a function. */
   var compareGreater = function(value) {
       /* the child function has access to the parent functions data, so we can use base. now we compare the two */
       if (value > base) {
           return true;
       } else {
           return false;
       }
       
   };
   /* to return just the function itself we don't put parenthesis */
   return compareGreater;
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    /* this is the same problem as above, butt with a less than sign */
    var compareLessThan = function(value) {
        if (value < base) {
            return true;
        } else {
            return false;
        }
    };
    return compareLessThan;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
 
 
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    /* create a function that we can return later */
    var compareFirstChar = function(String) { 
        /* we need to make this function case insensitive. using let because i'm using the same variable lower down */
        let stringToLower = String.toLowerCase();
        var startsWithToLower = startsWith.toLowerCase();
        /* creating a variable that is our lower case String's first character.  */
        let stringFirstChar = stringToLower[0];
        /* compare the two with an if statement */
        if (stringFirstChar === startsWithToLower) {
            return true;
        } else {
            return false;
        }
        
    };
    return compareFirstChar;
}


/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    var compareLastChar = function(String) {
        /*as before, we are making this function case insensitive */
        var endsWithToLower = endsWith.toLowerCase();
        let stringToLower = String.toLowerCase();
        /* line 93 accesses the last character of our stringToLower variable */
        let stringLastChar = stringToLower[stringToLower.length-1];
        if (stringLastChar === endsWithToLower) {
            return true;
        } else {
            return false;
        }
        
    };
    return compareLastChar;
    
    
    
    
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
 /*create empty array. pull out the strings of the given array and pass them through the function. insert modified string into empty array */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    let modifiedArray = [];
    for (let i = 0; i <= strings.length-1; i++) {
        let ModifiedString = modify(strings[i]);
        modifiedArray.push(ModifiedString);
    }
    return modifiedArray;
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
 
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    /* create an empty array that we will later fill with our tested strings */
    let testedArray = [];
    /* for loop to pull the strings out of the array and test them one individually. push them into our new array. the push function will preserve the order, if that matters */
    for (let i = 0; i<=strings.length-1; i++) {
        let testedString = test(strings[i]);
        testedArray.push(testedString);
    }
    /* the .every method will determine if every element in an array passes a test that we create with a function. the isTrue function I made simply checks to see if
    a given element is true or not. */
    function isTrue(element) {
        return element === true;
    }
    return testedArray.every(isTrue);
     
    
    
    
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}