// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/**Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays
 * I: an array of arrays
 * O: a single array with all the elements of the orginal arrays
 * C/E:
 */
function flatten(arrays) {
    //.reduce takes two parameters: a function and a start. the function takes two parameters: the current value in the array and the next value in the array. it will be accesing position 0 first 
    //it will then loop through, using the starting position and the next index
let reduced = arrays.reduce((result,array) => 
        //each loop, we will add the next position (array) to our starting position (result) by using concatenation
       result.concat(array),[]);
//we need to return outside of reduce, or it will break the loop
return reduced;
}
// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/**Write a higher-order function loop that provides something like a for loop
statement. It takes a value, a test function, an update function, and a body
function. Each iteration, it first runs the test function on the current loop value
and stops if that returns false. Then it calls the body function, giving it the
current value. Finally, it calls the update function to create a new value and
starts from the beginning.
When defining the function, you can use a regular loop to do the actual
looping
 * I: a value, a test function, an update function, and a body function 
 * O: 
 *C/E: 
 */
function loop(start, test, update, body) {
  //we being our loop by setting a value to our start value. our stop condition for the loop is running value through the test function; we stop if it is false.
  // our incrementor updates our value once the loop runs through.
   for (let value = start; test(value); value = update(value)) {
     //this runs the value through the body function
     body(value);
   }
 }

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/**Implement every as a function that takes an array and a predicate function
as parameters
 * I: array and function
 * O: returns true when the given function returns true for every element in the array
 * C/E: need to write one function that's recursive and one that uses the some method
 */
function every(array, funct) {
    // loop through the elements of the array
    for (let x = 0; x <array.length; x++) {
        let arrayValue = array[x];
        //we pass each element into our function. if any of them prove false, we return false.
        if (funct(arrayValue) === false) {
            return false;
        }
    }
    //if the loop iterates through and doesn't find any falses, then we return true.
    return true;
   
}

function everySome(array,funct) {
    //we are plugging a new function into array.some. the bang operators mean that instead of just looking for one instance of funct(value) we are looking to see if all
    // instances of funct(value) are true
  return !array.some(value => !funct(value));
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/**Write a function that computes the dominant writing direction in a string of text
 * I: string of text
 * O: ltr, rtl, ttb
 * C/E:
 */
 
 /*The countBy function expects a collection (anything that we can loop over
with for/of) and a function that computes a group name for a given element.
It returns an array of objects, each of which names a group and tells you the
number of elements that were found in that group.
this will let  us determine how many 
*/
 var countBy = function(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({
        name,
        count: 1
      });
    } else {
      counts[known].count++;
    }
  }
  return counts;
};
/* this function will return the corresponding script that is used */
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
      return script;
    }
  }
  return null;
}
 //we need the countBy function and characterScript functions already defined.
function dominantDirection(text) {
    /* we need to use countBy to count the number of charcters we have. we use characterScript to determine what kind of script each character is in,
    and then return none if it is a script-less character. this is all done in the textScripts function in Eloquent Javascript. */
    let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  // counted refers only to scripts, so if it equals zero then there are no scripts, and so the text reads left to right.
  if (counted.length == 0) {
      return "ltr";
  } else{
      //if counted is not zero, we can compare the sizes of the scripts. first we must reduce them, which will sum their sizes and allow a direct comparison
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
  }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
