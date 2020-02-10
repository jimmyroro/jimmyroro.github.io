/**
 * FUNCTIONS
 * Functions allow us to store a block of code and re-use it whenever we need to by calling the function. Functions are globally available 
 * 1. Two stages to creating a function: declaration and invocation/calling
 */
 //function declaration: create the action the function will perform on the parameters
 function findRemainder(num1,num2) {   //we have named the function and created parameters, which are placeholders that
                                        //indicate what will be passed through the function. They are like local variables
     return num1%num2;   //within the curly brackets is the code block that will run when we invoke the function
 }
 
 // calling/invoking a function
 console.log(findRemainder(28,6));   //here we have passed two arguments into the function, which take the place of the
                                    //parameter we created. # of parameters should equal # of arguments

// 2. We can assign functions to a variable
var myFirstFunction = function () { //this function is anonymous: there is no name to it, it simply runs when invoked
    return "Is awesome.";    // myFirstFunction doesn't take iniputs, it just returns "Is awesome". it's not a very good function
}

var anotherFunction = function doSomeMath(num1, num2, num3) {
    return num1 + num2 - num3;  // a benefit to naming our function is that if an error is encountered, we can trace it back here
}

/**
 * 3. the return keyword does two things: it returns a value and stops the function. If we don't return something,
 * our function probably isn't doing anything. When the function reads a line with return statement, it stops reading, so
 * anything below that line is not executed.
 */
 
 function add(num1,num2) {
     num1 + num2;
 }
 console.log(add(1,1));       //no return statement; this function isn't doing anything really
 
 function subtract(num1,num2) {
     return num1 - num2;
     console.log("Chickens!");
 }
 console.log(subtract(7,6));   //on line 38 we get an alert saying unreachable code, becuase it's after a return statement
 
/**
 * 4. Functions have access to variables in their parent and global scopes, but parent scopes cannot access their children's variables
 */
 
 function doSomething() {
     var food = "dairy";
     //console.log(nestedVariable) will give a ref error, because it doesn't have access to the child scope
     function ifDairy() {
         var nestedVariable = "secret";
         if (food === "dairy") {       //ifDairy has access to food, because it is a child of doSomething
             return "I'm lactose intolerant";
         } else {
             return "Let's eat!"
         }
     }
 }
 
 /**
  * 5. A closure is a function having access to the parent scope, even after the parent function has closed.
  * closures are useful for privacy becuase it restricts access to variables. 
  */

 function getCounter() {
  let counter = 0; // because counter is outside of our anonymous return function, it is a closure. counter does
                    //not reset to zero after the anonymous function is invoked via the getCounter function
  return function() {
    return counter++;
  };
}
let count = getCounter();
console.log(count());  // 0
console.log(count());  // 1
console.log(count());  // 2
//console.log(counter); undefined, error