/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */
//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */
//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: animals array and string of the name
 * O: the animal's object or null
 * C/E:
 */
 function search(animals, name) {
     // loop through animals array from index 0 to the last index
     for (let i = 0; i <= animals.length - 1; i++) {
         // create a variable animalsObj = animals[i] (the object at the i position in the array)
         let animalsObj = animals[i];
         // if the animals name is strictly equal to the input name, return the animalsObj
         if (animalsObj.name === name) {
                 return animalsObj;
          }
     }
     // Return null if iteration of the loop don't return a result and cause the interpreter to exit the function
     return null;
 }
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function that takes the parameters: animals(array), name(string), & replacement(object)
function replace(animals, name, replacement) {
    // search through animals array
    // if name is a value in the the object in animals array, replace entire object with replacement; otherwise do nothing
    // loop through animals array
     for (let i = 0; i < animals.length; i++) {
         // create a variable animalsObj = animals[i] (the object at the i position in the array)
         let animalsObj = animals[i];
         // if the name of animalsObj is strictly equal to the input name. replace the animal at that index with the replacement object
         if (animalsObj.name === name) {
                animals[i] = replacement; 
          }
     }
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Create a function called remove that take the parameters animals(array) & name (string)
function remove(animals, name) {
    // if an animal with that name exists in the array, remove it
    // use a for loop to loop through the array of objects
    for (let i = 0; i < animals.length; i++) {
        //if an element in the array matches the given name, splice it out
        if (animals[i].name === name) {
            // i is the position to begin at, 1 is the number of elements to be affected. becuase we don't a third parameter, splice removes these elements
            animals.splice(i, 1);
        }
    }
}
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a function with the parameters of animals (array)  and animal (object). we will add the animal if it has a unique name and a species property
/**
 * loop through the animals array to access each object name. for each object, we will push name values into a new array. then we will .includes this array to check if
 * animal[i].name is equal to animal.name. if false, we will add animal to animals
 */
function add(animals,animal) {
    // create an empty array to hold the list of the objects' name values
    let nameArray = [];
    // creating a loop to access objects
    for (let i = 0; i < animals.length; i++) {
        //pushing the name value of each object in our animals array into the nameArray
        nameArray.push(animals[i].name);
    }
    //create a variable that will be a boolean, based on whether the input animal's name is included in our nameArray
    let isUnique = nameArray.includes(animal.name);
    //if the animal's name and species length is greater than zero and it has a unnique name, push animal object into animals array
    if (animal.name.length > 0 && animal.species.length > 0 && isUnique === false) {
        animals.push(animal);
  }
}
/**
 * You did it! You're all done with Matchy!
 */
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}