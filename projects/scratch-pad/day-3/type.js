// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    /* Array.isArray(value) will determine if a value is an array. we cannot use typeof because Javascript is object oriented, so it would return an array
    as technically being an object */
   return Array.isArray(value);
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 *
 * 
 * Input: any value
 * Outbput: true if object is intended as a collection, false otherwise
 * C/E: null, array, and dates will return as objects if typeof is used
 *
 
 the Object.prototype.toString.call() method will return a value's type ( [object boolean], [object null], [object array] etc), so if it returns [object Object}
 our function will return true, false otherwise*/
function isObject(value) {
    // YOUR CODE BELOW HERE //
    return Object.prototype.toString.call(value) === '[object Object]';
    
    
    
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 *
 * I: any value
 * O: true or false
 * C/E: none
 * 
 we will create an if statement to see if Object.prototype.toString.call() === [object Array] or [object Object], and return true or false*/
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if (Object.prototype.toString.call(value) === "[object Object]" || Object.prototype.toString.call(value) === "[object Array]") {
        return true;
    } else {
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"     *
 *    - "object"    *
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"    *
 *    - "function"  *
 *    - "date"   *
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 *
 * I: any value
 * O: type of the value as a string
 * C/E: none
 * 
 * we can use the typeof method to determine many of these value types. But first we will use the Object.prototype.toString.call(value) method to determine
 * if value is a type that typeof will misidentify, such as objects as collections, null, date, and functions*/
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //checks if value is an array, returns "array" if true
    if (Array.isArray(value) === true) {
        return "array";
        // if Object.prototype.toString.call(value) equals [object Object], then value is an object intended as a collection, and our function will return "object"
    } else if (Object.prototype.toString.call(value) === "[object Object]") {
        return "object";
        // if Object.prototype.toString.call(value) equals [object Null], then value is null, and our function will return "null"
    } else if (Object.prototype.toString.call(value) === "[object Null]") {
        return "null";
        //if Object.prototype.toString.call(value) equals [object Function], then value is a function, and our function will return "function"
    } else if (Object.prototype.toString.call(value) === "[object Function]") {
        return "function";
        //if Object.prototype.toString.call(value) equals [object Date], then value is a date, and our function will return "date"
    } else if (Object.prototype.toString.call(value) === "[object Date]") {
        return "date";
        //strings, undefined, number, and boolean data types can be correctly identified with typeof, so we can use typeof for all other cases
    } else {
        return typeof value;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}