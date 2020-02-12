
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * I: a number
 * O: that number of console logged #, in the form of a triangle
 * C/E:
 * I will make a loop. I want the loop to console log x #s, where x is the number parameter. because arrays are zero indexed, my stop condition will be number-1.
 * Each iteration of the loop will assign # to a higher index in my empty array, increasing its length. then I will join the array and console log it multiple times.
 */
function triangles(number) {
  let emptyArr = [];
  for (let x = 0; x <= number-1; x++) {
    emptyArr[x] = "#";
    let newString = emptyArr.join("");
    console.log(newString);
  }
 
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * I: two numbers, a start and an end
 * O: the range of the two, console logged
 * C/E: numbers divisible by 3 should print fizz, numbers divisible by 5 should print buzz, numbers divisible by both should print fizzbuzz
 * I will use if/else-if statements within a loop to determine if the number is divisible by 3, 5, or both, using my start and end parameters to set up my loop
 */
function fizzBuzz(start, end) {
  for (let x = start; x <= end; x++) {         //our end number needs to be inclusive
    if (x%5 === 0 && x%3 === 0) {    //having no remainder means x is evenly divisible by the 5 and 3. it's important that we do this statement first so that Fizz or Buzz doesn't print instead
      console.log("fizzbuzz");
    } else if (x%5 === 0) {
      console.log("buzz");
    } else if (x%3 === 0) {
      console.log("fizz");
    } else {
      console.log(x);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**
 * I: a number
 * O: a string of " " and #s alternating, with line breaks
 * C/E: the input should reflect the width and height, in characters of the chess board
 * 
 */
function drawChessboard(number) {
  //first we will make a string variable that we will put our characters in
  let chessString = "";
  //created nested for loops. the outer one will add in line breaks, creating vertical columns
  for (let i = 1; i <= number; i++) {
    // this inner loop will loop check our position at our row and column. if it's even, it'll add " " to chessString, otherwise it'll add "#"
    for (let x = 1; x <= number; x++) {
      if ((x+i) %2 === 0) {
        chessString += " ";
      } else {
        chessString += "#";
      }
    }
    // the line break is added after the nested loop finishes iterating; that is, after it populates the horizontal row
    chessString += "\n";
  }
console.log(chessString);
}
/* so the way this nested loop works is that the first loop activates, i = 1, and then the nested loop runs over and over until it completes when x <= number, and then a line break
is added, i increments, and then the nested loop activates again. */


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
