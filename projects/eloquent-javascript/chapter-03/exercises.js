////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/** create a function that returns the smaller of two values
 * I: two numbers
 * O: the smaller of the two
 * C/E: negative numbers, 0, equal numbers
 * I'll make 3 if statements, one will test if the two numbers are equal, one to compare num1>2, the other to compare num1<num2
 */
function min(num1,num2) {
  if (num1 === num2) {
    return num1;
  } else if (num1 > num2) {
    return num2;
  } else if (num1 < num2) {
    return num1;
  }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/** create a function that tests whether a number is even or odd, using recursion
 * I: a whole number
 * O: true if number is even, false if number is odd
 * C/E: 0 = even, 1 = odd, negative number
 */
function isEven(number) {
  // we are going to run a resursion, so this function will call itself until something causes it to stop calling itself, kind of like a loop. in this case, when number = 0 or
  //number = 1, we will return true or false.
  if (number === 0) {
    return true;
  } else if ( number === 1) {
    return false;
    // when the function calls itself, something must change to eventually make it stop calling itself, so we can alter the value of number. if number is negative we will increase
    //by 2 so we will eventually have number equal 1 or 0 and our recursion will end. if number is positive we will decrease by 2. counting by two ensures our even-ness is the same
  } else if (number < 0) {
    return isEven(number + 2);
  } else {
    return isEven(number -2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**write a function called countChar that behaves like countBs, except
 *it takes a second argument that indicates the character that is to be counted
 *(rather than counting only uppercase “B” characters)
 * I: a string, and a character to check the string for
 * O: a count of the character you check for
 * C/E
 *
 * I will create a count variable. I will make a loop that checks each index of the string, and if that index === character I will increment count. Outside of
 * my loop, I will return count. this is simply making function Bs more dynamic
 */
function countChars(string, character) {
  let count = 0;
  for (let x = 0; x < string.length; x++) {
    if (string[x] === character)  {
      count++;
    }
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/**Write a function countBs that takes a string as its only argument and returns
 *a number that indicates how many uppercase “B” characters there are in the
 *string.
 * I: a string
 * O: a number, indicating how many uppercase "B"s are in the string
 * C/E:
 *
 * I will make a count variable, indicating the number of Bs. I will make a loop that checks each index of the string, and if that index === "B" I will increment count. Outside of
 * my loop, I will return count.
 */
function countBs(string) {
  let count = 0;
  for (let x = 0; x < string.length; x++) {
    if (string[x] === "B")  {
      count++;
    }
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
