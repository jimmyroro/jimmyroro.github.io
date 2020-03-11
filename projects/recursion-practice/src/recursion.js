// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //we can't factorial a negative number, so if n is negative return null
  if (n < 0) {
    return null;
    //factorial of 0 = 1, this is also our base case
  } else if (n === 0) {
    return 1;
    //each recursion will muliply n * n-1 * n-1-1 etc until we reach our base case
  } else {
    return n * factorial(n-1);
  }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //our base case checks that our array has values in it. if it doesn't we break recursion and return 0
  if (array.length === 0) {
    return 0;
    //each recursion we sum the first index of array and then slice that first index off for the next recursion
  } else {
    return array[0] + sum(array.slice(1));
  }
};

// don't need to do

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  //if n equals 0 return true
  if (n === 0) {
    return true;
    //if n equals 1 return false
  } else if (n === 1) {
    return false;
    //if our break case isn't reached and n is negative, we will call isEven again, but with n+2, so it will eventually be either 0 or 1
  } else if (n < 0) {
    return isEven(n+2);
    //if break case isn't reached, call isEven again with n-2, until n eventually is either 0 or 1
  } else {
    return isEven(n-2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //if n equals zero we break recursion and return 0
  if (n === 0) {
    return 0;
    //if n is negative we want to be increasing n during recursion to eventually reach our break. we sum n+1 because we don't want to include our starting n
  } else if (n < 0) {
    return n+1 + sumBelow(n+1); 
    //we sum n-1 with a call to sumBelow(n-1), which will add up all the values below n until the break case is reached and n = 0
  } else {
    return n-1 + sumBelow(n-1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  //our break case will return an empty array. the x-1's and y-1's make it so that our range is not inclusive. x = y allows our function to handle negative numbers
  if (x+1 === y || x === y-1 || x-1 === y || x === y) {
    return [];
    //if x is less than y, we need to increment x, put it into an array, and concat that array with a recursive call
  } else if (x < y) {
    return [x+1].concat(range(x+1,y));
  }
  //if x is greater than y, we need to decrement x, put it into an array, and concat that array with a recursive call
  if (x > y) {
    return [x-1].concat(range(x-1,y));
  }

};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //our break case is when exp = 0, and it will return 1
  if (exp === 0){
    return 1;
    //if our exponent isn't negative, we will multiply the base * base until the exponent reaches zero
  } else if (exp > -1) {
    return base*exponent(base, exp-1);
    //with a negative exponent, we want to divide by the base a number of times until the exponent reaches zero, because our negative exponent exponentiall shrinks our value 
    //rather than multiplying it
  } else if (exp < 0) {
    return exponent(base, exp+1)/base;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  //first break case, if we keep dividing our number by 2, it will eventually resolve to one and return true 
   if (n === 1) {
     return true;
   } 
   // if n becomes smaller than one, we know the number is not a power of two, so we can return false
   if (n < 1) {
      return false;
      //our recursing keeps calling the function with n/2 until we reach a break statement
    } else {
      return powerOfTwo(n/2);
    }
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //break case is string.length=0, as we will be 'removing' the last character
  if (string.length === 0) {
    return string;
  } else {
    //we return the last character of string concatenated to another call of reverse, but with its last character removed
    return string[string.length-1] + reverse(string.slice(0,-1));
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //define a newstring that will be case insensitive and have its spaces removed
  let newString = string.toLowerCase().split(" ").join("");
  // break case is when the string only contains one character, so we know it's a palindrome
  if (newString.length <= 1) {
    return true;
  } 
  //check to see if the first and last characters are equal to each other. if not, return false cuz it's not a palindrome
  if (newString[0] !== newString[newString.length-1]) {
    return false;
  }
  //otherwise, we call palindrome again, but with the first and last characters removed
  return palindrome(string.slice(1,-1));
};

//don't need to do

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if (y === 0) {
    return 0;
  } else if (y > 0) {
    return x + multiply(x, y-1);
  } else if (y < 0) {
    return -x + multiply(x, y+1);
  }
};

//extra credit

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

//extra credit

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //break case, once we have compared all characters we will know they are all identical
    if (str1.length === 0 && str2.length === 0) {
      return true;
      //if the two characters at position x aren't identical, we return false
    } else if (str1[0] !== str2[0]) {
     return false;
     //otherwise we call compareStr again, with the first indices of str1 and str2 removed
    } else {
     return compareStr(str1.slice(1), str2.slice(1));
    }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
//our break case will be when string no longer is defined. we will return an empty array, which will ulitmately concat onto our strings and do nothing
 if (!str) {
   return [];
 }  else {
   //we make the index 0 of our string into an array and then concatenate that to a call for createArray, with the first index sliced off. so we will gradually build an array
   return [str[0]].concat(createArray(str.slice(1)));
 }

};


// 17. Reverse the order of an array
var reverseArr = function (array) {
  //break case is that our array has no more elements in it. we return an empty array
 if (array.length === 0) {
   return [];
 } else {
   //we make the last index of our array into an array and concatenate that to another call to reverseArr, with the last index sliced off
   return [array[array.length-1]].concat(reverseArr(array.slice(0,array.length-1)));
 }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  //we will reduce our length by one each recusrion, so our break case will be when length = 0
  if (length === 0) {
    return [];
  } else {
    //each time it loops we will concat an array of our value onto the array we are building, and then reducing length by one for the next call
    return [value].concat(buildList(value,length-1));
  }
};


// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {

  if (array.length === 0) {
    return 0;
  } else {
    //if the first position of our array matches the value, we will add one and then call the function again with the first element removed
    if (array[0] === value) {
      return 1 + countOccurrence(array.slice(1),value);
      //if the first position doesn't match the value, we won't add anything, but we still need to call the function again with the first element removed
    } else {
      return 0 + countOccurrence(array.slice(1), value);
    }
  }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  //break case is when our array is empty, we return an empty array
  if (array.length === 0) {
    return [];
  } else {
    //we call the function for index 0 of our array, put that into an array, and then concat that value with a call to rMap with the 0 index of array removed
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
  }
};

// ec

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

//ec

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

//ec

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

//ec

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};
function fib(n){
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1]);
  }
 return arr[n];
}
console.log(fib(8));

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // if n is negative, we return null
  if (n < 0) {
    return null;
  }
  //our break case is if n is less than 2 and we return n
  if (n < 2){
    return n;
  }
  //the function recursively calls itself creating more and more branches of the tree until it hits the base case,
  //from which it will start summing up each branch’s return values bottom up, until it finally sums them all up and returns an integer equal to n
  return nthFibo(n - 1) + nthFibo(n - 2);

};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  //when there are no more elements in input, we return an empty array
  if (input.length === 0) {
    return [];
  } else {
    //return an the first element in input, capitalized, and concatened with a call to capitalizeWords with the first elemetn removed
    return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));
  }
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
   //when there are no more elements in input, we return an empty array
  if (array.length === 0) {
    return [];
  } else {
    //return the first element's first letter in input, capitalized, and concatened with a call to capitalizeFirst with the first elemetn removed
    return [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));
  }
};


//ec

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

//ec

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  //if we aren't given an object, we will need to create one. but we don't want our recursion to overwrite it each time, so we use an if statement to define it
  if (!obj) {
    obj = {};
  }
  //break case, when the string has reached a zero length we'll return our populated object
  if (str.length === 0) {
    return obj;
  } else {
    //if the first character of str is not a key on obj, then we create a key and set its value to one. then we call our function again with the first letter of str removed
    if (obj[str[0]] === undefined) {
      obj[str[0]] = 1;
      return letterTally(str.slice(1), obj);
      //if the first character of str is a key on obj, then we increment its value. then we call our function again with the first letter of str removed
    } else if (obj[str[0]] !== undefined) {
      ++obj[str[0]];
      return letterTally(str.slice(1), obj);
    }
  }
};


// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  //break case, list's length is zero
  if (list.length === 0) {
    return [];
  } else {
    //if our first element in list doesn't equal the second, we'll return the first element as an array concateneated with a recursive function call
    if (list[0] !== list[1]) {
      return [list[0]].concat(compress(list.slice(1)));
      //if the first element in list does match the second element, we'll return an empty array concatenated with a recursive function ccall, effectively skipping over that first element
    } else if (list[0] === list[1]) {
      return [].concat(compress(list.slice(1)));
    }
  }
};


// extra credit
// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  //break case, list's length is zero
  if (array.length === 0) {
    return [];
  } else {
    //if the first and second indices of array don't match, we'll return the first element as an array concatenated with a recursive function call
     if (array[0] !== array[1]) {
      return [array[0]].concat(minimizeZeroes(array.slice(1)));
      //if the first element in list does match the second element and they are both zeros, we'll return an empty array concatenated with a recursive function ccall, 
      //effectively skipping over that first zero
    } else if (array[0] === array[1] && array[0] === 0) {
      return [].concat(minimizeZeroes(array.slice(1)));
    }
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  //break case, array's length is zero
  if (array.length === 0) {
    return [];
    //if the array's length is even, we return a positive number and a recursive call
  } else if (array.length % 2 === 0) {
    return [Math.abs(array[0])].concat(alternateSign(array.slice(1)));
    //if the array's length is odd, we return a negative number and a recursive call
  } else if (array.length % 2 !== 0) {
    return [-Math.abs(array[0])].concat(alternateSign(array.slice(1)));
  }
};



// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  //break case. if there is only one element left and that element isn't a number, we return the last element
  if (str.length === 1 &&  isNaN(Number(str[0])) === true) {
    return str[0];
    //another break case.if there is only one element left and that element IS a number, we will return a string of the word equivlant of the number
  }else if (str.length === 1 && isNaN(Number(str[0])) === false) {
    if (str[0] === "0") {
      return "zero";
    }else if (str[0] == 1) {
      return "one";
    }else if (str[0] == 2) {
      return "two";
    }else if (str[0] == 3) {
      return "three";
    }else if (str[0] == 4) {
      return "four";
    }else if (str[0] == 5) {
      return "five";
    }else if (str[0] == 6) {
      return "six";
    }else if (str[0] == 7) {
      return "seven";
    }else if (str[0] == 8) {
      return "eight";
    }else if (str[0] == 9) {
      return "nine";
    }             //this chain above is a break case, just in case the last element of the string is a number we need to convert
  }
  //this chain below will loosely compare str[0] to the numbers 0-9, and return a word of the number, then it will recursively call the function to check the next position of str
  else if (str[0] === "0") {
    return "zero" + numToText(str.slice(1));
  }else if (str[0] == 1) {
    return "one" + numToText(str.slice(1));
  }else if (str[0] == 2) {
    return "two" + numToText(str.slice(1));
  }else if (str[0] == 3) {
    return "three" + numToText(str.slice(1));
  }else if (str[0] == 4) {
    return "four" + numToText(str.slice(1));
  }else if (str[0] == 5) {
    return "five" + numToText(str.slice(1));
  }else if (str[0] == 6) {
    return "six" + numToText(str.slice(1));
  }else if (str[0] == 7) {
    return "seven" + numToText(str.slice(1));
  }else if (str[0] == 8) {
    return "eight" + numToText(str.slice(1));
  }else if (str[0] == 9) {
    return "nine" + numToText(str.slice(1));
  } else {
    //if str[0] is not loosely equal to any number 0-9 then we return str[0] and recursively call the function
    return str[0] + numToText(str.slice(1));
  }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
