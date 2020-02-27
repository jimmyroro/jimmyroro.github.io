// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';
var _ = {};
/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/
/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value;
};
/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    //typeof is an inbuilt function in javascript, but it doesn't work on certain values, so we will define our own.
     if(typeof value === "string"){
        return "string";
        //we can use Array.isArray(value) to determine if a value is an array
    }else if(Array.isArray(value)){
        return "array";
        //Dates return as objects, so we need to use instanceof method to verify
    }else if(typeof value === "object" && value instanceof Date) {
     return "date";   
    }else if (typeof value === "undefined"){
        return "undefined";
    }else if(typeof value ==="number"){
        return "number";
    }else if(typeof value === "boolean"){
        return "boolean";
    }else if(value === null){
        return "null";
    }else if(typeof value === "function"){
        return "function";
    }else return "object";
};   
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
// declaring our variabe with 2 parameters, an array and a number
_.first = function(array,number) {
    //create a new array to hold values
    let newArray = []; 
    // we need to make sure that the number we are given isn't larger than the array; if it is we just retrun the whole array
    if (number > array.length) {    
      return array;
      // checks to make sure it is an array and the number isnt negative, returning an empty array if so
    } else if (Array.isArray(array) === false || number < 0) { 
        return [];  
        //// if the number is null , undefined or NaN it will return the first element  
    } else if (number === null || number === undefined || isNaN(number) === true) {
        return array[0];  
    } else {
        //our loop will begin at index zero and end at number, pushing the elements of the array into our new array
        for (let x = 0; x < number; x++) { 
            newArray.push(array[x]);
            //after the loop finishes, we return our populated newArray
        } return newArray; 
    }
};
/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array,number) {
    //create a new array to hold data
    let newArray = []; 
    // if number is larger than the length of the array, it will return the entire array
    if (number > array.length) {    
      return array;  
      // if the input is not an array or the number is negative, we return an empty array
    } else if (Array.isArray(array) === false || number < 0) { 
        return [];  
        // if the number is null , undefined or NaN it will return the first element 
    } else if (number === null || number === undefined || isNaN(number) === true) {
        return array[array.length-1];   
    } else {
        //to return the last number items of array, we begin at the end of the loop and iterate down the index of array, pushing the values into our new array. our stopping condition
        // is array.length-1-number, so that we end in the correct spot
        for (let x = array.length-1; x > array.length-1-number; x--) {
            //we need to unshift onto the beginning to preserve the order of our array
            newArray.unshift(array[x]);
        } return newArray; 
    }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
   // declaring a function that takes array and value in its parameters 
_.indexOf = function (array, value) {
    //we loop through to access each individual element of array
    for (let x = 0; x < array.length; x++) { 
        if (value === array[x]) { //if value equals the value at position x, we return the index, x
            return x;
        } 
        //if the loop finishese without returning a position, return -1, meaning the value is not in the array
    } return -1;  
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
    // we create an empty array to hold values
    let truthArray = []; 
    //loop through the array
    for(let x = 0; x < array.length; x++){ 
        //ternary operator. if value equals the value at index x, push true into truthArray; else, push false into truthArray. we can't just use a return statement
        //in this conditional, or it won't check the entire array
       value === array[x] ? truthArray.push(true) : truthArray.push(false);
    }
    // using indexOf(true) on truthArray, if we get a number that isn't -1 then true exists in the truthArray, which means that value exists somewhere in array. so we return true
    if (truthArray.indexOf(true) !== -1) {
        return true}
        //if indexOf(true) returns -1 or it doesn't return a number, value is not in array, so return false
    else return false;
};
/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, fun){
    //test to make sure the collection is an array
    if( true === Array.isArray(collection)){
        //create a for loop that iterates forward
        for (let x = 0; x < collection.length; x++) {
            //we call our function for every element in the collection, using the arguments element, index, and collection.
            fun(collection[x], x, collection);
        }
        //make sure our collection is an object intended as a collection
    } else if (typeof collection === "object" && collection !== null) {
        //create a for in loop to access collection properties
        for (var key in collection) {
            // call our function for each of the properties, using the arguments property's value, its key, and collection
            fun(collection[key], key, collection);
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
    //create an array that will hold our unique values
    let uniqueArray = [];
    //make a for loop to access array elements
    for (let x = 0; x < array.length; x++) {
        //indexOf will check our unique array for array[x]. if it is -1, that means that array[x] isn't in unique array and is in array, so we can push it into the unique array
        if (uniqueArray.indexOf(array[x]) === -1) {
            uniqueArray.push(array[x]);
        }
    }
    // must be outside of the loop
    return uniqueArray;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function (array, fun) {
    // new array to hold data
    let newArray = [];
    //for loop to access array elements
    for (let x = 0; x < array.length; x++) {
        //call the function for each element and test if it's true or not. if it is true push the element into our newArray
        if (fun(array[x], x, array) === true) {
            newArray.push(array[x]);
        }
      }
      return newArray;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse of _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array,fun) {
 
      //this will create an array filled with all the truth values from the array, the oppostite of what we want
      let trueArray = _.filter(array,fun);
      //we will push all our false values into this array
      let rejectArray = [];
      for (let x = 0; x < array.length; x++) {
          //we want to search through our trueArray and compare them to the values in original array. if array[x] isn't in trueArray, that means it's false, and so 
          // we should push that into the rejectArray
          if (_.contains(trueArray,array[x]) === false) {
              rejectArray.push(array[x]);
          }
      }
      return rejectArray;
};


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

 
_.partition = function (array, fun) {
    // we will create 2 sub arrays, a truthy one and a falsey one, which we will populate using our .reject and .filter functions
    let trueArray = _.filter(array,fun);
    let falseArray= _.reject(array,fun);
    //we create an array composed of the truth array and the false array, then return it
    let mainArray = [trueArray,falseArray];
    return mainArray;
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function (collection,fun) {
  //create a new array to store values we will return
  let mappedArray = [];
  //determine if the collection is an object or array
  let collectionType = _.typeOf(collection);
  //if chain will determine what we do next
  if (collectionType === "object") {
      //we need a for in loop to access the object's properties
      for (let key in collection) {
          //call the function for each property in the object, and push that value into mappedArray
          mappedArray.push(fun(collection[key], key, collection));
      }
  } else if (collectionType === "array") {
      //we will create a for loop to access each element in the arary
      for (let x = 0; x < collection.length; x++) {
          //we will call the function for each element in <collection> and push the value into mappedArray
          mappedArray.push(fun(collection[x],x,collection));
      }
  }
  return mappedArray;
};

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function (array,property) {
   /*
    let pluckedArray = [];
    for (let x = 0; x < array.length; x++) {
        if (array[x][property] !== undefined) {
            pluckedArray.push(array[x][property]);
        }
    }
    return pluckedArray;
    */
    
    for (let x = 0; x < array.length; x++) {
        for( let key in array[x]) {
            return array.map(i => i[key]); 
        }
    }
};


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function (collection, fun) {
    //we use typeOf to check if the function is provided or not. an unprovided function will return "undefined". we also need to determine if <collection> is an object or array
  if (_.typeOf(fun) === "undefined" && Array.isArray(collection) === true) {
      for (let x = 0; x < collection.length; x++) {
          //since there is no function, we create a loop to access the array elements and coerce each one to a boolean using the double bang operator. if any of them are false
          // we will return false
          if (!!collection[x] === false) {
              return false;
          }
      }
      //if the function is undefined and <collection> is an object, we will use a for in loop to check the properties for falsiness, returning false if any are false after being
      //coerced into a boolean
  } else if (_.typeOf(fun) === "undefined" && _.typeOf(collection) === "object") {
      for (let key in collection) {
          if (!!collection[key] === false) {
              return false;
          }
      }
  } else {
    //mappedCollection will be an array that is filled with the values we get from calling our function on each element.  _.map will work on objects or arrays
    let mappedCollection = _.map(collection,fun);
    //now we just loop through our array, coercing our values into booleans and returning false if any are falsey
      for (let x = 0; x < mappedCollection.length; x++) {
            if (!!mappedCollection[x] === false) {
            return false;
            }
        }
  }
  //if nothing in our if chain triggers a false, then we will return true outside the chain
  return true;
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the parameters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function (collection, fun) {
    //we use typeOf to check if the function is provided or not. an unprovided function will return "undefined". we also need to determine if <collection> is an object or array
  if (_.typeOf(fun) === "undefined" && Array.isArray(collection) === true) {
      for (let x = 0; x < collection.length; x++) {
          //since there is no function, we create a loop to access the array elements and coerce each one to a boolean using the double bang operator. if any of them are true
          // we will return true
          if (!!collection[x] === true) {
              return true;
          }
      }
      //if the function is undefined and <collection> is an object, we will use a for in loop to check the properties for truthiness, returning true if any are true after being
      //coerced into a boolean
  } else if (_.typeOf(fun) === "undefined" && _.typeOf(collection) === "object") {
      for (let key in collection) {
          if (!!collection[key] === true) {
              return false;
          }
      }
  } else {
    //mappedCollection will be an array that is filled with the values we get from calling our function on each element.  _.map will work on objects or arrays
    let mappedCollection = _.map(collection,fun);
    //now we just loop through our array, coercing our values into booleans and returning true if any are truthy
      for (let x = 0; x < mappedCollection.length; x++) {
            if (!!mappedCollection[x] === true) {
            return true;
            }
        }
  }
  //if nothing in our if chain triggers a false, then we will return true outside the chain
  return false;
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function (array, fun, seed) {
    //we create a variable to hold the return value of <function>, so that each iteration can build on the last
    let prevResult;
    //we need a for loop to access each element in the array
    for (let x = 0; x < array.length; x++) {
        //for the very first iteration, we check if seed if defined, and if it is then we will go ahead and call the function using the seed value, the current element, and the index
        //we will store this value in <prevResult> so that we can use it later
      if (x === 0 && seed !== undefined) {
          prevResult = fun(seed, array[x], x);
          //on our first iteration, if seed is not defined then we need to use the first element in the collection and increment our counter so that we are calling the function
          //on the appropriate element. if we don't update the counter our first two arguments would be the same for this iteration, and it would mess up our recursion
      } else if (x === 0 && seed === undefined) {
          x++;
          prevResult = fun(array[0], array[x],x);
          //once we are past the first iteration, seed is no longer relevant and we can simply finish the recursion by using and updating <prevResult>
      } else {
          prevResult = fun(prevResult, array[x], x);
      }
  }
  return prevResult;
};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function (object1,object2,...moreObjects) {
    //our function takes a minimum of two arguments, but no matter how many there are we need to copy the properties from <object2> to <object1>. we use a for in loop to
    //access <object2>'s keys and update <object1> with them
    for (let key in object2) {
        object1[key] = object2[key];
    }
    //our if statement makes sure this code only runs if we have 3 or more arguments.   using ... (rest parameter) will place all the remaining parameters into an array,
    // which we check to see if it has values
    if (moreObjects !== undefined) {
        //our for loop will access each element in the moreObjects array
        for (let x = 0; x < moreObjects.length; x++) {
            //within the for loop, we create a for in loop to access each object's properties and update <object1> with them
            for (let key in moreObjects[x]) {
                object1[key] = moreObjects[x][key];
            }
        }
    }
    //return our updated <object1>
    return object1;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
