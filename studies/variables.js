/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point. 
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* 4. Undefined and null
 * Undefined is a specific value built into javascript. It means that a variable has been purposefully been given no value
 */

var noValue = null;


/*
 * LETS
 * 0. Lets are similar to variables in that they are containers and can be reassigned.
 * They are hoisted to a temporal dead zone, so they return a reference error if you reference them before the line they are
 * initialized.
 */
 
 let something = "a let";
 
// 1. Unlike var, let limits the scope to block statements like loops and ifs.

console.log(myVar); // prints undefined, var is hoisted to here
// console.log(myLet);  throws error, scoped to if block

const CITY = "New Orleans";
if (CITY === "New Orleans") {
    //console.log(myLet);  gives reference error, myLet is not defined becasue myLet is hoisted here but is in the temporal dead zone
    
    var myVar = "foo";
    let myLet = "bar";
    console.log(myLet); // prints bar
}



/*
 * CONSTANTS
 * 0: Constants are containers whose values can never change. They are block scoped
 * and not hoisted to the top of their block scope.
 *
 * 1: Constants are created using const and must immediately be assigned.
 * By convention, use UPPERCASE for constants. 
 */

const USER_AGE = 27;
console.log(USER_AGE); //prints 27

// 2. Constants cannot be left unassigned or undefined

// 3. Constants cannot be changed once assigned

//USER_AGE = 35;  running this line would give an error, because we can't reassing a constant
console.log(USER_AGE) //prints 27

/* 4. Constants are block scoped: they are pinned to the code block in which they are assigned/declared.
 * They are hoisted to the temporal dead zone of their block of code like lets are, meaning if you
 * attempt to reference them before delcaration you will get a reference error.
 */
 
 function greeting(weather) {
     // MSG is not available here because it's scoped into the if-else blocks
     if (weather === 'sunny') {
         console.log(MSG); // this will give an error
         const MSG = "Nice day, eh?";
         console.log(MSG); // prints Nice day, eh?
     } else {
         console.log(MSG); // throws error
         const MSG = "Nice weather, for a duck!";
         console.log(MSG); // prints Nice weather, for a Duck!
     }
 }
 
 // Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
 
/*
 * HOISTING
 *
 *0. Before the statements of a program are executed all var and function declarations are 
 * dragged to the top of the program. Therefore, var values will not throw ReferenceErrors
 * if you try to reference them before delcarating, but rather return undefined.
 *
 * Only the declaration, not the initialization, is brought to the top.
 */
 
 console.log(x); //this will print undefined
 var x = 10;
 console.log(x); //prints 10
 
 // 1. let and const values are hoisted to temporal dead zone
 
 //console.log(yy); reference error, yy not defined
 //console.log(SHOE); reference error, SHOE not defined
 
 let yy = 10;
 const SHOE = "blue";
 console.log(yy); // prints 10
 console.log(SHOE); //prints blue
 
 
/* SUMMATION
 * 
 * VAR
 * reassignable: yes
 * hoisted: yes
 * scoped to functions: yes
 * scoped to if blocks and loops: no
 *
 * LET
 * reassignable: yes
 * hoisted: yes, but temporal deadzone 
 * scoped to functions: yes
 * scoped to if blocks and loops: yes
 *
 * CONST
 * reassignable: no
 * hoisted: yes, but temporal dead zone
 * scoped to functions: yes
 * scoped to if blocks and loops: yes
 */