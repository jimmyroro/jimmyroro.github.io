// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-jimmyroro");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./jimmyroro.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

// use a function to return a a variable (number) maleCount
// find the number of male customers

var maleCount = function(array) {
    //we create an a new array that we will hold our filtered values in and later return
    let filteredArray = [];
    //we use filter to basically create the for loop for us
    _.filter(array, function(element, index, array) {
        //as filter loops through each element in the array, we check the gender property of each customer, and if it is "male" we push the gender into our array
        if (array[index].gender == "male") {
            filteredArray.push(array[index]["gender"]);
    }
    });
    //the number of elements in our array equals the number of customers with a gender of male, so we return filteredArray's length
    return filteredArray.length;
    };
    
 var femaleCount = function(array) {
     //we create a count that we will increment and eventurally return
    let femaleCount = 0;
    //reduce will loop through our array, and each time it encounters a customer with a gender of "female" it will increase femaleCount
    _.reduce(array, function(result,element,index) {
        if (element.gender === "female") {
            femaleCount++;
        }
    },0);
    //once it is done looping, we return femaleCount
    return femaleCount;
};

var oldestCustomer = function(array) {
    //we create an undefined name variable and a count variable to begin our test
    let count = 0;
    let oldest;
    _.filter(array, function(element, index, array) {
        // as we filter through, we check each customer's age. with a count of 0, the very first customer's age will always be greater than count, so we update
        //oldest to be that customer and we update count to be their age. so the next customer will be compared to that age and only if they are older will
        //oldest and count be updated
        if (element.age > count) {
            oldest = element.name;
            count = element.age;
    }
    });
    return oldest;
    };
    
var youngestCustomer = function(array) {
    //create a count variable to test against. everyone will be younger than Infinity, so this will return someone
    let count = Infinity;
    //create a variable called youngest we will update as we find younger customers
    let youngest;
    _.filter(array, function(element, index, array) {
        //as we loop through the array, we check the customer's age against <count>. if they are younger, we update <youngest> to be that customer's name and <count>
        // to be their age. then we countinue looping and updating until the youngest customer is found
        if (element.age < count) {
            youngest = element.name;
            count = element.age;
    }
    });
    //return our updated <youngest>
    return youngest;
    };
    
var averageBalance = function(array) {
    //we will filter our given array to create a new array of only pertinent values, the balances (as strings) of each customer
    let balanceStrings = [];
    _.filter(array, function(element, index, array) {
       balanceStrings.push(array[index].balance);
    });
    //ultimately we must convert our strings to numbers, so we will map our balanceStrings array to remove the dollar sign. we do this using slice and creating a new string
    let balanceArray = [];
    _.map(balanceStrings, function(element, index, array) {
        let noDollarSigns = balanceStrings[index].slice(1,balanceStrings[index].length);
        balanceArray.push(noDollarSigns);
    });
    //likewise, we need to remove the commas by using the map function
    let balanceNumberArray = [];
    _.map(balanceArray, function(element,index,array) {
        //we need to know the index of the comma so we can remove it precisely, so we make a variable
        let commaIndex = balanceArray[index].indexOf(",");
        //if our data doesn't have a comma in it, we actually don't need to do anything. no comma would make <commaIndex> = -1
        if (commaIndex !== -1) {
            //we will slice the balance into two parts and concatenate the two parts back together, minus the comma
            let noComma =  balanceArray[index].slice(0,commaIndex) + balanceArray[index].slice(commaIndex+1);
            //now that our balance has no extra characters, we can convert it into a number datatype
            noComma = Number(noComma);
            //we push the numbers into a new array
            balanceNumberArray.push(noComma);
        }
    });
   let totalBalance = 0;
   //we update the totalBalance to equal the sum of all the numbers in our balanceNumberArray
    for (let x = 0; x < balanceNumberArray.length; x++) {
        totalBalance += balanceNumberArray[x];
    }
    //the total number of customers is equal to the lenght of our customers array
    let totalCustomers = array.length;
    //divide totalBalance by totalCustomers to get the average balance
 return totalBalance/totalCustomers;
};

var firstLetterCount = function(array,letter) {
    //create a variable that we will increment and return
    let nameCount = 0;
    //we filter through our customer array, and if <letter> is a match with the first letter of the customer's name, we will increase <nameCount>
    _.filter(array, function(element,index,array) {
        //it's important to use .toLowerCase() to make sure this function is case insensitive
        if(array[index].name[0].toLowerCase() === letter.toLowerCase()) {
            nameCount++;
        }
    });
    //return updated nameCount
    return nameCount;
};


var friendFirstLetterCount = function(array,customer,letter) {
    let friendCount = 0;
    let friendsArray;
    //we filter through the array searching for the name of <customer>. once we find them, we update <friendsArray> to be an array of all of their friends
    _.filter(array, function(element,index,array) {
        if(array[index].name === customer) {
            friendsArray = array[index].friends;
        }
    });
    //once we have a pertinent friendsArray, we loop through it and check the first letter of each friend within it to see if it matches our given <letter>
    // if it does, we increase our <friendCount>
    _.filter(friendsArray, function(element,index,array) {
        //.toLowerCase() makes this function case insensitive
       if(friendsArray[index].name[0].toLowerCase() === letter.toLowerCase()) {
           friendCount++;
       } 
    });
    // updated friendCount
    return friendCount;
};


var friendsCount = function(array, name) {
    let newArray = [];
};

console.log(friendsCount(customers, "Greta Wells"));

var topThreeTags = function(array) {
    //create an array with all the tags in it, using a double filter
    let allTags = [];
    _.filter(array, function (customer, index, customers) {
        _.filter (customer.tags, function (element, index2, array) {
            allTags.push(element);
        });
    });
    let uniqueTags = _.unique(allTags);
    
};
console.log(customers[0].friends);
let friendName = _.pluck(customers[0].friends, "name");
console.log(friendName);

var genderCount = function(array) {
    //create an object that we will update and return
    let genderSummary = {
      male: 0,
      female: 0,
      "non-binary": 0,
    };
    //we will loop throughh are array using reduce
    _.reduce(array, function(result, element, index) {
        //if the customer's gender is male, we'll increment our male property on our genderSummary object
        if(array[index].gender === "male") {
            genderSummary.male++;
            //if the customer's gender is female, we'll increment our female property on our genderSummary object
        } else if (array[index].gender === "female") {
            genderSummary.female++;
            //if the customer's gender is non-binar, we'll increment our non-binary property on our genderSummary object
        } else if (array[index].gender === "non-binary") {
            //we use brackets here because the - in non-binary confuses dot notation
            genderSummary["non-binary"]++;
        }
    }, 0);
    //return our updated object
    return genderSummary;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
