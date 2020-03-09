/**
 * LOOPS
 * 1. Loops let us execute code as many times as we need. They are particularyly
 * useful when working with objects and arrays, so we can pull out their values
 * one by one. Consist of an index that you initialize, a stop condition, and a 
 * counter, which will change the index value and eventually stop the loop. Three types:
 * While, for, and for-in
 *
  * FOR LOOPS
  */
  //2. to loop forward using a for loop:
 var array = ["a", "b", "c", "d"];
 for (let x = 0; x < array.length; x++) {  //as long as the stop condition is true, the loop will run
                                                // < array.length will loop through till the end of the array
     console.log(x);                    //this logs the index we are inspecting
     console.log(array[x]);             //this will log what value is at that index
 }
 
 // 3. to loop backward using a for loop
 for (let x = array.length-1; x>-1; x--) {    //we start at the end of the array and decrement
                                            // we want to access index 0, so we need x>-1
     console.log(x);
     console.log(array[x]);
 }
 
 /**
  * 4. FOR IN LOOPS
  * For in loops are for looping over objects. They pull out all the keys, one by one, allowing
  * access to the values as well.
  */
  var doggo = {
      fur: true,
      sound: "woof",
      legs: 4,
  };
  
  for (var key in doggo) {    //the variable key is populated one by one with the keys from our object, doggo
      console.log(key);
      console.log(doggo[key]);   //we need to use bracket notation rather than dot notation because we are using a dynamic element
  }
  
/**
 * 5.WHILE LOOPS
 * While loops are useful for executing a block of code until its stop condition is false. Its format is the keyword while, 
 * a stop condition in parenthesis, and then the code block. It's important to make sure the stop condition can become false,
 * or else you will create an infinite loop.
 */
 let stop = 0;
 while (stop < 5) {
  console.log("we're doing something");         //we are using a counter named stop to make sure this loop breaks eventually
  stop++;
 }