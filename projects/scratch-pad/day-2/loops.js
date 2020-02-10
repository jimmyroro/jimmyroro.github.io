// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //we need to start at the beginning, so var x=0, we end at the end of the array, so array.length-1; and we increment//
  for (var x = 0; x <= array.length-1; x++) {
    var arrIndex = array[x];           /*this will create a variable that changes as we loop */
    console.log(arrIndex);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  /*we will start at the end: array.length-1; stop at the beginning: x>=; and we will decrement */
  for (var x = array.length-1; x >= 0; x--) {
    var arrIndex = array[x];
    console.log(arrIndex);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  /* first we create an empty array to store the keys */
  var array = [];
  /* we can use a for in loop to access the keys of the object.  the push function will add the key to the end of the array */
  for (var key in object) {
    array.push(key);
  }
  return array;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  /* we should use a for in loop to access the keys. */
  for (var key in object) {
    console.log(key);
  }
  
  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  /* create an array to store the values. */
  var valArray = [];
  /* for in loop is used for objects*/
  for(var key in object) {
    /* object[key] will loop through and use the key to access the different values. we will assign this to value */
    var values = object[key];
    /* here we push the values onto the end of the array we created earlier */
    valArray.push(values);
  }
  return valArray;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  /* use a for in loop to access an object's keys and values */
  for (var key in object) {
    /* initialize and assign a variable to be the values of the object*/
    var values = object[key];
    console.log(values);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  /* Object.keys(obj) will pull out all the keys of an object */
var objKeys = Object.keys(object);
  /* use the length property of an array to get the number of key/value pairs*/
var objKeysLength = objKeys.length;
return objKeysLength;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  /* create an array of the keys of the object. use the .unshift method because it adds to the beginning, creating the appropiate order.
      loop over the array of keys in reverse.  */
  var keyArray = [];
  for (var key in object) {
    keyArray.unshift(key);
  }
  for (var index = 0; index <= keyArray.length-1; index++) {
    var reverseKey = keyArray[index];
    var reverseValue = object[reverseKey];
    console.log(reverseValue);
  }
  
  
  // YOUR CODE ABOVE HERE //
}



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
