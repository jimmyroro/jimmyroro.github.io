/**
 * DATA TYPES
 * 
 * 1. Data can be broken down into two broad types: Simple and Primitive.
 * 
 * 
 * 2. Simple data types (primitive data types) are numbers, strings, Booleans, NaN, undefined, and null
 *      1. All simple data types are immutable: they don't hold other values, and when you do operations on them
 *      new values are produced, as oppsoed to altering the original value. 
 *      2. They are also copied by value rather than reference. When we assign these variable to other variables using =
 *      the value is copied to the new variable. Each contains the value, and changing one doesn't effect the other.
 *      3. Variable can directly contain primitive values because each type has a fixed size in memory.
 *      Numbers take up 8 bytes, which is how much memory is allocated for a variable. This fixed size
 *      is the reason primitive types can be copied by value.
 *      4. They are atomic: there is only ever a singular value
 */
 var cat = "cat";
 var b = cat;   // here the value in cat is directly copied into b
 
 b = "dog";   // changing b's value has no effect on cat
 console.log(cat);   // still prints "cat"
 
 /**
  * 3. Complex data types collect other values within them and can be of indefinite size. Objects,
  * arrays, and functions are complex. They can hold any number of key/value pairs, elements, or statements.
  *     1. Because they can be any size, they are copied by reference. When you assign these variable to
  *     other variables, a reference is copied rather than the direct data. Changing a reference will change
  *     the original value.
  */
var a = ["stuff", true];
var x = a;   //x's value is a reference to  a - both point to the same array
a.push(null);
console.log(a[2]);  // this will print null, because the reference has been altered and a and x
                    // are both using the same reference
                    
/**
 * NUMBER
 * 1. Includes integers and decimals. Can be added, divided, multiplied, etc
 * 2. simple
 */
let five = 5;
let remainder = 5 % 3;
console.log(remainder);

/**
 * Infinity and -Infinity
 * 1. Special numeric values. Infinity is greater than any number, -Infinity is less than any number
 */

console.log(Infinity > 19e8);
console.log(-Infinity < 12e12);

/**
 * NaN
 * 1. Special numberic value. It is a result of incorrect or undefined mathematicla operations
 */

/**
 * STRING
 * 1. Character data that must be enclosed with quotes, '' or "" or ``
 * 2. Can be treated like an array of characters, with a 0 index property
 * 3. simple
 */
let myString = "an amazing example";
console.log(myString[1]);  //prints "n"

/**
 * BOOLEAN
 * 1. Two values: true and false
 * 2. come as a result of comparisons
 * 3. simple
 */
console.log(myString === "an amazing example"); // prints true

/**
 * UNDEFINED
 * 1. means that a variable has been declared, but not yet assigned a value
 * 2. simple
 */
let undefinedVariable;
console.log(undefinedVariable);

/**
 * NULL
 * 1. Null means a variable has no value, but unlike undefined, the programmer has purposefully
 * left the value empty
 * 2. simple
 */
 
/**
 * OBJECT
 * 1. Collection of key valued pairs that are not ordered and do not have an index. Created
 * with curly braces and accessed with dot and bracket notation. Each property is a key/value pair.
 * 2. They can hold any data type, though the keys are strings
 * 3. complex
 */
let pickle = {
    seeds: false,
    color: "green",
    number: 6,
};
console.log(pickle.seeds);  // prints false
pickle.taste = "sour";   //adds a new key/value pair
console.log(pickle);
 
/**
 * ARRAY
 * 1. A zero indexed list that holds values of any data type, created with square brackets
 * 2. accessed with bracket notation. has a length property
 * 3. complex
 */
let newArray = [null, 6, "Twilight"];
console.log(newArray[2]);  //prints twilight
console.log(newArray[newArray.length-1]);  //will access the last element of an array
 
/**
 * FUNCTION
 * 1. A block of code that performs a particular task
 * 2. Two steps to using them: declaration/initialization and invocation
 * 3. function name (parameter1,parameter2,.....parameterX) {
        code block
        };
 * 4. Arguments are the values the function receives when it is invoked. within the function,
 * they behave like local variables.
 * 5. Functions limit the scope of variables within them. Nested (children) functions have access
 * to variables that their parent scopes have access to, but not vice versa
 * 6. can be assigned to variables
 * 7. complex
 */
 
let toCelsius = function(fahrenheit) {     //initialization
    return (5/9) * (fahrenheit-32); 
};

toCelsius(88);     //invocation

function mathStuff(num1,num2) {
    let newNumber = num1 * num2;
    function moreMath (num3) {       // moreMath will have access to num1,num2,num3, and newNumber
        newNumber + num3;
    }
}
//console.log(newNumber);       newNumber is limited in scope to its function, so this gives an error