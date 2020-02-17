////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end. Take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].
*
* I: start number, end number, step incrementor
* O: an array of numbers that begins at start and ends at end, incrementing by step
* C/E: undefined step, negative numbers, equal start and end parameters
* 
 */

function range(start, end, step) {
  // creating a new variable that I will push number into and eventually return
  let rangeArray = [];
   //these first couple conditions stop me from having infinite loops and from returning values when the start and end are equal
 if (start > end && step > 0){
   return rangeArray;
 } else if (start < end && step < 0) {
   return rangeArray;
 } else if (start === end) {
   return rangeArray;
   //if our start and end and steps are appropriate, we can begin a loop
 } else {
     //because our function optionally takes a step parameter, we must tell it what to do if step is not given, which is to increment by one in the loop and push the 
     //values into our array variable
    if (step === undefined) {
    for (let x = start; x <= end; x++) {
      rangeArray.push(x);
    }
     // this return must be outside our loop, so that it does not terminate the loop early
    return rangeArray;
        //if step does have a value, we need to increment our loop by step rather than by one
  } else if (step !== undefined) {
    for (let y = start; y <= end; y+=step) {
        //we need to check and see that adding step to y doesn't push us outside the end value of our range. if it does, our return statement here will stop the loop
      if (y+step > end) {
        rangeArray.push(y);
        return rangeArray;
      } else {
        rangeArray.push(y);
      }
    }
  }
 }
}

// this may have been more elegant using switch statements for the first three infinite loop conditions

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**takes an array of numbers and returns the sum of these numbers.
 * I: an array of numbers
 * O: the sum of the numbers in the array
 * C/E: an empty array
 * 
 * I will make a variable that will hold the sums of the numbers, and use a for loop to += each number in the array
 */
 
function sum(array) {
    // we make our variable a number. 0 will not change the outcome, and it will make sure that we return something at the end
    let mySum = 0;
      //this tests to make sure our array has values in it, returning 0 if there are no values in it
    if (array === undefined){
        return mySum;
        // now we make a loop to add each position of our array to the mySum variable
    } else {
        for (let x = 0; x < array.length; x++) {
        mySum += array[x];
        }
    } return mySum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**takes an array as argument and produces a new array that has the same elements in the inverse order.
 * I: an array
 * O: a new array, in inverse order
 * C/E: may not use the standard reverse method.
 */
function reverseArray(array) {
    //first I will create a new array variable to hold values
    let invArray = [];
    //create a for loop to acces each element of the input array. we will start at the end, so our start and end condtions of the loop reflect this
    for (let x = array.length-1; x > -1; x--) {
        //we use push to add to the end of an array, preserving the order we want
        invArray.push(array[x]);
    }
    // return the new, filled array. return must be outside the for loop or it will stop the loop
    return invArray;
}



////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/** it modifies the array given as argument by reversing its elements. 
 * I: an array
 * O: same array, modified to be reversed
 *C/E: may not use the standard reverse method. modifies original array
 */
function reverseArrayInPlace(array) {
 //let's create a for loop. we want it to loop to the middle of our array, rounding down. if our array is odd, the middle index shouldn't need to be changed
 for (let x = 0; x <= Math.floor((array.length -1)/2); x++) {
     //we want to have a temporary place to store the current value we're looping over, so we don't lose it when we overwrite it
     let temp = array[x];
     //we are replacing the xth index of array with the (last position minus x) position of our array. so as we loop up, we don't keep accessing the last value in our array
     // but the x from last value, until we reach the middle
     array[x] =array[array.length-1-x];
     //now we set the x from last index of array to the temp position we created earlier
     array[array.length-1-x] = temp;
 }

return array;
}


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * I: an array
 * O: a list (nested objects)
 * C/E:
 */
 
function arrayToList(array) {
    //we are going to loop over an array backwards and assign an object the value of array[x] and a value of rest, which we will reupdate in the loop
     //for our first loop, the most nested object, rest should equal null, so we assign it the value of null
        let rest = null;
        //the loop reassigns rest as an object with the keys of value and rest, then fills them in with the old value of rest and array[x], building the nested object
        //from the inside out
    for (let x = array.length-1; x > -1; x--) {
       rest = {
           value: array[x],
           rest: rest,
        };
    }
    return rest;
}



////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * I: list
 * O: array
 * C/E:
 */
 
function listToArray(list) {
    // create an empty array that we will later return after pushing values into
  let result = [];
  // this if checks to make sure that list has a rest and value key and isn't an empty object. it returns a blank array if so
  if (typeof list === 'undefined' || list.value === undefined || list.rest === undefined) {
    return result;
  } else {
      //this pushes the very first unnested value of list into our array
    result.push(list.value);
    //this loop will check that list has a rest property and that that rest property isn't null. it will iterate until one of those is false
    while (list.hasOwnProperty('rest') && list.rest !== null) {
      // with each iteration of the loop, this reassignment will have us accessing one deeper level of objects, and will start us off at the first nested object
      list = list.rest;
      // now we check to make sure that the current level of list we are looking at has a value key, pushing that value into our array. this ensure our while loopp doesn't
      //go too deep, to a list that doesn't exist or have a value
      if (list.hasOwnProperty('value')) {
      	result.push(list.value);
      }
    }
  }
  return result;
}


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**takes an element and a list and creates a new list that adds the element to the
front of the input list
 * I: an element and a list
 * O: a new list with the element at the front 
 * C/E:
 * 
 */
function prepend(element, list) {
    // we create a variable that we will eventually return. it will be an object with its first value equal to the element we are adding, and it's rest value equal
    //to the list we input, so that the list will be nested
    let myList = {
        value: element,
        rest: list,
    };
    return myList;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**takes a list and a number and returns the element at the given position in the list (with zero referring to the first 
 * element) or undefined when there is no such element
 * I: a list and a number
 * O: return the element at given position or undefined if no element exists
 * C/E:
 */
function nth(list, number) {
    //we check to see that the unnested value is not undefined. if it is, we return undefined and don't even start our loop. we need to do this because our loop
    // immediately sets list to list.rest to create a recursion, but this alone is unable to access the first unnested value
    if (number === 0 && list.value === undefined) {
        return undefined;
        // if number === 0 and list.value isn't undefined, we should return list.value.
    } else if ( number === 0) {
        return list.value;
        // we start our loop at position one because our above lines check for number === 0. we want the loop to run a number of times equal to number.
    } else {
      for (let x = 1; x <= number; x++ ) {
          //making list = list.rest call itself to access a deeper level of nested objects each iteration, making our function recursive
      list = list.rest;
      // we check again to make sure that the list has a value. if number is greater than the number of layers, this will stop our loop early and save us time
      if (list.value === undefined) {
      	return undefined;
      	// we only want to return the value at the level of number, so once x === number we can access and return that value.
        } else if ( x === number) {
            return list.value;
        }
      }
    }
}
////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**takes two values and returns true only if they are the same value or are objects with the same properties
 * I: two values
 * O: true if they are the same value or are objects with the same properties
 * C/E: 
 */
function deepEqual(value1,value2) {
    //null returns as an object using typeof, so we check for null specifically
    if (value1 === null && value2 === null) {
        return true;
        //if either of the values are null, but not both, we return false
    } else if (value1 === null || value2 === null) {
        return false;
    //with null eliminated, we can check for other types
    } else {
        //if the values share a type and that type isn't object, we can compare the two using a strict equality
        if (typeof value1 === typeof value2 && typeof value1 !== "object") {
            return value1 === value2;
        // if they don't share a typeof value, we return false
        } else if (typeof value1 !== typeof value2) {
            return false;
        } else {
            //if the values have diffent number of properties, they are not the same
           if (Object.getOwnPropertyNames(value1).length !== Object.getOwnPropertyNames(value2).length) {
               return false;
           } else {
               //check the keys in each value
               for(let key in value1)  {
                   //if the key from value1 is not in value 2, they are not equal
                    if(!(key in value2)) {
                    return false;
                    //if the key is in both value1 & value2 we need to check for nested objects, so we call deepEqual again to make sure that all the keys are the same,
                    // through all the nested objects.
                    } else if(!deepEqual(value1[key], value2[key])) {
                    return false;
                    }
                }
           }
    }
    //our function is designed to return true UNLESS it snags on any of the above conditions. so if all the conditions above check out, then we can return true
} return true;
}
console.log(Object.keys([1,2,3]));
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
