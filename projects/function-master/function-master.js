//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I:object
 * O: all the object's values
 * C/E
 */
function objectValues(object) {
    //Object.values(object) will pull out the values and return them in an array.
    return Object.values(object);
}
//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I:object
 * O: the keys of object as a string spearated by spaces
 * C/E
 */
function keysToString(object) {
// Object.keys(object) returns all the keys as an array. so we use the join method with a space separator to convert them into a string
return Object.keys(object).join(' ');
}
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: object
 * O: return all values as string separated by spaces
 * C/E: only string values
 */
function valuesToString(object) {
    // create empty string to hold data
    let string = '';
    //use for in loop to access each value
    for(var key in object){
        //using typeof to determine if the value is a string or not. if it is a string, we concatenate it onto our string variable with a space after
        if(typeof object[key] === "string"){
           string += object[key] + " ";
        }
     }
     //our last value concatenated will have an extra space after it, so we trim the string before returning it
     let trimstring = string.trim();
    return trimstring;
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: a collection
 * O: return 'array' if it's an array, 'object' if it's an object
 * C/E
 */
function arrayOrObject(collection) {
    //we use Array.isArray(value) to check if something is an array or not
    if(Array.isArray(collection) === true ){
        return "array";
        //to check if something is an object we have to rule out whether it is null or a date
    }else if (typeof collection === 'object' && collection !== null && collection != Date()){
        return 'object';
    }
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: a string
 * O: return the string with first letter capitalized
 * C/E
 */
function capitalizeWord(string) {
    // create a new variable
    let newString = "";
    //we will loop through the string character by character
    for (var i = 0; i < string.length; i++) {
        //for the very first index, we will uppercase the character and then concatenate it to our newString
            if (i === 0) {
                newString += string[i].toUpperCase();
                //for the rest of the characters we can just concatenate them
            } else {
            newString += string[i];
            }
    }
    return newString;
}
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: a string
 * O: the string with all words capitalized
 * C/E
 */

function capitalizeAllWords(string) {
    //we define a new variable that is our string but split up into an array by spaces, so we can more easily access each word
    string = string.split(" ");
      //we will create a loop to access each word (element) in our split array
    for (var x = 0; x < string.length; x++) {
         //create a new varialbe. splitString[x] access the first element of the split array, splitString[x][0] is the first character of that element. we upper case it,
         // then use .substring to make a copy of the rest of our element, beginnig at position 1, and concatenate it to the upper cased letter
       string[x] = string[x][0].toUpperCase() + string[x].substr(1);
    }
    // now we rejoin the array into a string with spaces
    return string.join(" ");
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: an object with a name property
 * O: "Welcome <name>!"
 * C/E: gotta capitalize the name
 */
 
function welcomeMessage(object) {
    //we are going to define a variable that will be our object's name value, capitalized. so we access the object's name property's first letter, then .toUpperCase it,
    // then concatenate that with every other letter of our object's name value, recreating a new value that is capitalized
    let capName = object.name[0].toUpperCase() + object.name.substr(1);
     //now we return the new variable plus spaces and an exclamation
    return "Welcome" + " " + capName + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: an object with a name and species property
 * O: return "<name> is a <species>!"
 * C/E: capitalize name
 */
function profileInfo(object) {
    // we create a variable that is the name key of the object, but capitalized. we .toUpperCase the first letter and concatenate the rest of the letters to that 
    let capName = object.name[0].toUpperCase() + object.name.substr(1);
    // we use the same method to do the same for the species
    let capSpecies = object.species[0].toUpperCase() + object.species.substr(1);
    //now we can return the string, using dynamic variables
    return capName + " is a " + capSpecies;
}
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: an object
 * O: if it has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'
 * C/E: if there are no noises, or if noises is an empty array
 */
function maybeNoises(object) {
    //first we make sure that the object has a noises property
    if (object.noises === undefined) {
        return "there are no noises";
        //next we make sure that the property actually has values in it
    } else if (object.noises.length > 0 === false) {
        return "there are no noises";
        //if it isn't undefined and has a length, then we can join the array by spaces and return that string
    } else if (Array.isArray(object.noises) === true ) {
        return object.noises.join(" ");
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: a string of words and a word
 * O: true if that word is within the string, false otherwise
 * C/E: none
 * 
 */
 //string.indexOf() will return the number of the index of whatever is in the parenthesis, or a -1 if it is not found. so if we return -1 then our word is not in the string
 // so we need to return false. otherwise we should return true
function hasWord(string, word) {
    if (string.indexOf(word) === -1) {
        return false;
    } else {
        return true;
    }
}
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: a name and an object
 * O: the object, with the name added to its friends array.
 * C/E: none
 */
 //access the the friends array through dot notation, and pushing the name into it. then you return the updated object
function addFriend (name, object) {
    object.friends.push(name);
    return object;
}
//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/** 
 * I: name and object
 * O: return true if <name> is a friend of <object> and false otherwise
 * C/E: make sure object has a friends property
 */

function isFriend(name, object) {
    // check to make sure that object has a friend property. if it does not return false
    if (object.friends === undefined) {
        return false;
        //indexOf will return the index of a given input, so if it finds that input in a string or array it will return a number. it will return -1 if it doesn't find it
    } else if (object.friends.indexOf(name) !== -1) {
        return true;
        // if the indexOf doesn't give an index or something else happens, return false
    } else {
        return false;
    }
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/** 
 * I: name and array of people
 * O: a list of all the names <name> isn't friends with
 * C/E:
 */
function nonFriends(name, array) {
    //we will create a variable that we will add friends to if name is not currently friends with them
    let nonFriendsArray = [];
    // this variable will be all the people name is currently friends with
    let currentFriends = [];
    //because array will hold multiple objects we need to first access the object that holds name. so we loop through the array until we find the object with the key
    // of 'name' and the value of the name input
    for (let x = 0; x < array.length; x++) {
        if (array[x].name === name) {
            // once we have accessed the object with the name input, we create another loop that will access the array that is a property of the object
            //we push each of those elements of the array into our currentFriends array, for comparison later
            for (let a = 0; a < array[x].friends.length; a++) {
                currentFriends.push(array[x].friends[a]);
            }
        }
    }
    // this next for loop ensure that we don't add the name to its own friends list
    for (let y = 0; y <array.length; y++) {
        if (array[y].name === name) {
            // we check to see if the currentFriends list includes the name that the loop is currently accessing, and if it does not we add that name to our
            // nonFriendsArray, which we will return afterwards
        } else if (currentFriends.includes(array[y].name) === false) {
            nonFriendsArray.push(array[y].name);
        }
    }
    return nonFriendsArray;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: an object, a key, and a value
 * O: return the object, with that key and value updated
 * C/E: 
 */
 
function updateObject(object, key, value) {
    // create a new variable that equals our object input, which we will later return
    let updatedObj = object;
    //use bracket notation (because we are accessing something dynamic) to update the value and key of our variable
    updatedObj[key] = value;
    return updatedObj;
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: object and an array
 * O: remove any properties from the object that are contained in the array
 * C/E:
 */
 
function removeProperties(object, array) {
    //create a for loop to check each key contained in object
    for (var key in object) {
        //if the key we are accessing is contained in the array, we need to delete that key from the object
        if (array.includes(key)) {
            delete object[key];
        }
    }
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
 * I: an array
 * O: the array with all duplicates removed
 * C/E:
 */

function dedup(array) {
    //we will be moving items from the array into our modArray using shift and push.
    let modArray =[];
    for (let x = 0; x < array.length; x++) {
        //within our for loop, we check to see if array[x] is already in modArray
        if (modArray.includes(array[x]) === true) {
            //if modArray contains array[x], we remove the first element of array using shift.
            array.shift();
            //we want our loop to always begin at index 0, so we decrement i. our loop will end once we have removed all the elements from array because x will be less
            //than array.length
            x--;
            //if our modArray does not include array[x], we need to push array[x] into modArray, then remove that element from array, then decrement x. so our loop will
            //always begin at zero and our array will get shorter until it has no elements left and all the non duplicates are in modArray
        } else if (modArray.includes(array[x]) === false) {
            modArray.push(array[x]);
            array.shift();
            x--;
        } 
    }
    return modArray;
    
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}




















