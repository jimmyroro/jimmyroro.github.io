/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */
//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a variable, animal, and assign it to an empty object
var animal = {};
// adding key of species to animal object with dot notation
animal.species = "puma";
//Use bracket notation to give animal a property called name
animal["name"] = "Charlie";
// give animal the property of noises set equal to an empty array
animal.noises = [];
// console.log the animal object
console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a variables, noises, and assign it to an empty array
var noises = [];
// using bracket notation give noises an element
noises[0] = "meow";
//use .push to add an element to noises
noises.push("wrar");
//using unshift add and element to the beginning of noises
noises.unshift("rrrrrrrfgh");
//using bracket notation, add a new element to the end of noises
noises[noises.length] = "hiss";
// console.log the length of noises
console.log(noises.length);
//console.log the last element in noises
console.log(noises[noises.length-1]);
//console.log the noises array
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// use bracket syntax to assign the noises array to the noises property of animal
animal["noises"] = noises;
//add another noise to the noises property of animal
noises.push("snarf");
//console.log the animal object
console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */
/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! : * *******************************************************************
 */
//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Create and empty array labeled animals
var animals = [];
// push the object animal created above into the animals array
animals.push(animal);
//log animals to the console
console.log(animals); 6
//create a variable called duck that is an object
var duck = {
        species: "duck",
        name: "Jerome",
        noises: ["quack", "honk", "sneeze", "woosh"], 
};
//push the object duck to the the animals array
animals.push(duck);
//log animals to the console
console.log(animals); 
//create 2 more animal objects 
var baboon = {
        species: "primate",
        name: "Hank",
        noises: ["whoop", "oaaaah"]
};
//push baboon into animals array
animals.push(baboon);
//create second animal object
var seahorse = {
    species: "seahorse",
    name: "Sheila",
    noises: ["glub", "gurgle"]
};
//push seahorse into the animals array
animals.push(seahorse);
//log animals to the console
console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// we will use an array because there's no need for a key/value relationship between the list of friends
var friends = [];
// Create a function called getRandom that takes animal array and returns the index of a random element using Math.random
// Input: array
// Output: index of a random element
// C/E: we have to use Math.random*/
function getRandom (array) {
// use Math.floor to round down to the nearest integer the product of  Math.random and the the length of the array
   return  Math.floor(Math.random() * array.length);
}
//
//create a variable to represent the random integer
var randomInt = getRandom(animals);
// create a variable that produces a random animal from animals
var randomAnimal = animals[randomInt];
// push the name of the random animal into the friends array
friends.push(randomAnimal.name);
//console.log friends
console.log(friends);
//add friends property to one of the animals in animals
animals[0].friends = friends;
//console.log animals[0]
console.log(animals[0]);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}










