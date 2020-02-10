/**
 * STRING MANIPULATION METHODS
 * 1. All string methods return a new string. They don't modify the original string.
 * 2. .slice() removes a part of a string and returns it in a new string. takes two 
 * parameters: start position and end postion, end not included
 */
 var str = "Fun and laughter";
 var newStr = str.slice(0,3); // returns fun. end is not inclusive
 console.log(newStr);
 
 // 3. .concat joins two more more strings and returns a new copy of the joined
 var string1 = "Cats";
 var string2 = "and dogs";
 var concatString = string1.concat(" ", string2);
 console.log(concatString); // we've concated an empty space as well
 
 // 4. .includes() will determine if a string or array includes a certain value, return true or false
 console.log(string1.includes("t")); // returns true
 
 // 5. .indexOf() returns the index of the first occurrene of a specified text in a string or array
 var counting = "123456789";
 console.log(counting.indexOf("5"));
 // returns -1 if text isn't found. you can insert a second parameter as the starting position of the search
 console.log(counting.indexOf("5",6));
 // .lastIndexOf() will search the string backwards and return the first instance
 
 // 6. .length will return the length of a string or array
 var countingLength = counting.length;
 var lastPosition = counting.length-1; // .length -1 will always refer to the last index
 
 //7. .split() converts a string to an array. you can split on commas (",") or spaces (" ")
 var letters = "a,b,c,d,e,f";
 console.log(letters.split()); // returns entire string in position 0
 console.log(letters.split(",")); // returns array with a split where each comma was
 console.log(letters.split("")); // returns an array with each character split
 
 //8. .toUpperCase() and .toLowerCase() convert the entire string to upper- or lower- case
 console.log(letters.toUpperCase());
 console.log(letters.toLowerCase());
 
 
 
/** 
 * STRING MANIPULATION OPERATORS
 * 1. The + operator and the += operator can be used to concatenate strings
 */
 var g = "blueberry";
 var h = "muffins";
 var i = g + " " + h;
 console.log(i);
 
 console.log(g += "",h);
 
 // 2. Adding a number and a string will return a string
 console.log("help" + 8);
 console.log("8" + 8); // this is the string "88"