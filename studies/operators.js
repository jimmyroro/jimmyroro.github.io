/**
 * OPERATORS
 * 1. Operators are things that act on data. We can use them to assign variables, compare data, or
 * do arithmetic operations. Operators are classified by what they do and how many operands they need.
 * An operand is a value that an operator acts upon.
 */
 
 /**
  * ASSIGNMENT OPERATORS
  * 1. The basic assignment operator is the =. It assigns the value to its left operand based on on the
  * value of the right operand.
  * 2. Other assignment operators include arithmetic operations plus assignment
  */
  
 let x = 200;
 x += 50; //x = 250
 x -= 50;  //x = 200
 x *= 2;  //x = 400
 x /= 50; //x = 8
  
/**
 * ARITHMETIC OPERATORS
 * 1. Perform basic arithmetic operations
 */
5 + 20;   //add left and right operands: 25
748 - 12;  //subtract right operand from left: 736
200 * 8;  //multiply left and right operands: 1600
8 / 4;  //divide left operand by right operand: 2
13 % 4;  //this is modulo, it will divide left operand by right operand and return the remainder: 1
 
/** 
 * COMPARISON OPERATORS
 * 1. Compare two values and yield a Boolean
 */
 let num1 = 50;
 let num2 = 60;
 num1 == "50"; // equal operator. returns true if left and right are the same, not accounting for datatype
 console.log(num1 === "50"); // strictly equal. checks for type AND value. this would return false
 num1 != num2; // not equal. returns two if operands aren't equal, with type conversion as necessary
 num1 !== num2; // strict not equal
 num1 > num2;  // greater that
 num1 >= num2; // greater than or equal to
 num1 < num2;  // less than
 num1 <= num2;  // less than or equal to
 
/**
 * LOGICAL OPERTORS
 * 1. Perform logical operations on Boolean operators
 * 2. expression1 && expression2. AND. returns true if both operands are true
 * 3. expression1 || expression2. OR. returns true if either or both operands are true
 * 4. !expression1. BANG. flips the truthiness of the expression
 * 5. !!expression1. DOUBLE BANG. coerces the value to a Boolean. falsey values return valse, otherwise true
 */
 console.log(12 > 5 && 68 <120); // returns true
 console.log(50 < 48 || 100 < 120); // returns true
 console.log(!true); // returns false
 console.log(!!-2); //-2 is truthy, so it returns true
 console.log(!!null); // returns false
 
/**
 * UNARY OPERATORS
 * 1. Only have one operand
 * 2. increment, decrement, bang, typeof
 */
 var z = 12;
 z++; // increment. it's like doing z + 1
 z--; // decrement. like doing z - 1
 console.log(!z); // coerces to a boolean value and then flips the truthiness. this would be false
 console.log(typeof z); //returns a string which is the operand type. doesn't work on arrays, null, undefined
 
/**
 * TERNARY OPERATORS
 * 1. Conditional operator. You can use it as a shortcut for an if statement. 
 * condition ? expression to execute if truthy : expression to execute if falsey
 */
 
 function canYouAffordIt(price) {
     return (price < 50 ? "yes" : "no");
 }
 console.log(canYouAffordIt(48)); // function will check if price is less than 50, returning yes if true and no if false