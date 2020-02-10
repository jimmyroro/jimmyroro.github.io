// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    return string.length;   /* returns the length of the string. */ 
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    
    return string.toLowerCase();    /*will return the entire string in lowercase. format of *string*.toLowerCase(); */

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    
    return string.toUpperCase();  /* returns the entire string in uppercase. format of *string*.toUpperCase()*/
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
 
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    
    var x = string.toLowerCase();    /*enforcing lowercase by creating a new variable*/
    var y = x.split(" ");   /* .split(" ") will create an array by creating individual elements, using the space in the string. .split("") would return every single character instead */
    var z = y.join("-");  /* concatenates the elements in the array, with a dash in between. */
    return z;
    
    // YOUR CODE ABOVE HERE //
    }

/* 
* Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    
    var a = string.toLowerCase();      /*makes string case insensitive*/
    var b = a.split("");       /*splits the string with individual characters as the elements*/ 
    var c = b[0];       /*position 0 is the first element in an array. this variable ensure that we will always be comparing the first letter of the string*/
    var d = char.toLowerCase();     /*makes char case insensitive*/
    if (c === d) {
      return true;
    } else {                    /* comparing the two values to determine if they are equivalent, returning true if they are and false if they are not */
      return false;
    }

    // YOUR CODE ABOVE HERE //
}


/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    var a = string.toLowerCase();  /* this makes the function case insensitive by lowercasing all the letters of string*/
    var b = a.split("");      /*.split("") splits the string into an array, so we can access the individual characters that compose the string */
    var c = b.length-1;     /* we don't know how long the string will be, so we use its lenght property to always compare the last character */
    var d = b[c];           /* creating a variable that will always be the last letter of the string parameter */
    var e = char.toLowerCase();  /* lowercasing char in order to make the function case insensitive */
    if (d === e) {
      return true;
    } else {                        /* comparing the two values to determine if they are equivalent, returning true if they are and false if they are not */
      return false;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    return stringOne.concat(stringTwo);    /* str.concat() function is used to join two or more strings. you can concatenate mulitple by seperating parameters with commas*/

    // YOUR CODE ABOVE HERE //
}



/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    var args = Array.from(arguments);
    return args.join("");    /* Array.from(arguments) will take all the parameters of the function and create a temporary array out of them. 
                                    Because it's an array, we use .join, as opposed to .concat which is used for strings. */

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
    var a = stringOne.length;
    var b = stringTwo.length;
    if (a > b) {                         /*.length property will determine the lengths of each string, an if statement will compare the two lenghts and return the longer string */
        return stringOne;
    } else {
        return stringTwo;
    }

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var a = stringOne.localeCompare(stringTwo);      /* .localeCompare compares the strings character by character. it returns a negative if 
                                        the reference string (before the .) occurs before the compare string (in parenthesis), determined by Unicode. It returns a positive 
                                        if the reference string occurs after the compare. if the two are equal it returns a zero. it can compare booleans and number too */ 
    if (a === 0) {
        return 0
    } else if (a < 0) {             
        return 1;
    } else if (a > 0) {
        return -1;
    }

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var a = stringOne.localeCompare(stringTwo);
    if (a === 0) {
        return 0;
    } else if (a < 0) {
        return -1;
    } else if (a > 0) {
        return 1;
    }



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
    }