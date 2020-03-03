/**
 * CONTROL FLOW
 * 1. Using conditionals, we can control how our application runs. We ask a true or false question and
 * then program what code runs if true and what code runs if false.
 * 2. Conditionals evaluate comparisons and values based on truthiness or falseyness.
 */
 
/**
 * IF, ELSE-IF, AND ELSE STATEMENTS
 * 1. Begin your conditional block of code with an if statement. You may then add any number of else-ifs.
 * Lastly, you can finish with a default else statemnt that executes if all if/else-ifs are false.
 * 
 * if (condition) {
     block of code executed if condition is true;
 } else if (condition2) {
     executed if first condition is false and this condition is true;
 } else if (condition3) {
     executed if condition and condition1 are false and this condition is true;
 } else {
     executed if all other condtions are false;
 }
 */
 var alert = "silver";
 if (alert === "red") {
     console.log("You are in danger");
 } else if (alert === "yellow") {
     console.log("Caution is advised");
 } else {
     console.log("You have no idea what this color alert means");
 }
 
 
 
 
/**
 * SWITCH STATEMENTS
 * 1. Switch statements takes in an input, matches it to a case clause that you create, and executes
 * the code associated with that case. Break statements must be added between each case. Similar to
 * an else statement, swtich statements use default to execute code that doesn't match any cases. 
 * Switch statments can be useful in making cleaner, neater code. They are also good when you have
 * many cases that all run the same block of code.
 */
 
 var animal = "unicorn";
 switch (animal) {
     case "chicken":
         console.log("It's a chicken.");
         break;          //break statements are very important to make sure your next block doesn't execute
     case "dog":
         console.log("It's a dog.");
         break;
     case "rabbit":
     case "gerbil":     //you can set multiple cases to the same code to execute. consider how arduous these three would be using if statements
     case "hamster":
         console.log("It's some sort of rodent");
         break;
     default:     //default will execute if no other cases are true
        console.log("You have no idea what that is.");
 }