// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
 /* we can reference the parameters of our function to create key/value pairs */
function makeContact(id, nameFirst, nameLast) {
    var contactObject = {
        id: id,
        nameFirst : nameFirst,
        nameLast : nameLast,
        };
return contactObject;
}



function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     /* arrays can hold objects */
    var contacts = [];
    
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        /* adding a contact object to our array with the push function. we can reference the contacts variable because this is a nested function. */
        addContact: function(contact) {
            contacts.push(contact);
        },
        /* we create a for loop to single out each object in our array. */
        findContact: function(fullName) {
            for (let x = 0; x <=contacts.length-1; x++) {
                let contactsObjects = contacts[x];
                /* here we concatenate the two keys of our object and test if it matches our argument of fullName, returning undefined if it doesn't */
              if (contactsObjects.nameFirst + " " + contactsObjects.nameLast === fullName) {
                  return contactsObjects;
              } else {
                  return undefined;
              }
            }
        },
        removeContact: function(contact) {
            /* In order to use splice, we need to know the index. we know the value of what we want to splice, so we can create a variable of its index
            using the indexOf method */
           let contactIndex = contacts.indexOf(contact);
           /* to delete using splice, you .splice(index of value to delete, number of things to delete) */
           contacts.splice(contactIndex, 1);
        },
        printAllContactNames : function printAllContactNames() {
            let contactFullNames = [];
            for (let x = 0; x <= contacts.length-1; x++) {
                let contactsObjects = contacts[x];
                let fullName = contactsObjects.nameFirst + " " + contactsObjects.nameLast;
                if (x != contacts.length-1) {
                    contactFullNames.push(fullName+"\n");
                } else {
                    contactFullNames.push(fullName);
                }
            }
            return contactFullNames.join("");
        },
    };
}


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
