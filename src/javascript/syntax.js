import { numberLiteralTypeAnnotation } from "@babel/types";

// --------------- Copy this section into your code syntax.js as comments --------

const syntaxFunctions = {

// define attributes / variables
    // number
        // a simple function that identifies only numbers.
        // "num" doesn't have to be assigned to a variable but is in this case in order to demonstrate an understanding of variables.
        // this is also true for other functions below.

    xNumber: (num) => {
        let myNumber = num
        if (myNumber === Number(myNumber)) return myNumber + " is a number.";
        return "Please enter a number!";
    }, 

    // string
        // a simple function that identifies only strings.

    xString: (str) => {
        let myString = str;
        if (myString === String(myString)) return myString + " <-- this is a string.";
        return "Please enter a string!";
   },

    // boolean
        // a function that compares the equality of two parameters in order to return a true or false. 
    
    xBoolean: (b, c) => {
        let equalityCheck = (b === c);
        return equalityCheck;
    },

    // array
        // a function that tests if a number entered will return the corresponding string value found in an array, in order to show an understanding of arrays and how to access items within them.

    xArray: (v) => {
        let myArray = ["one", "two", ["three", "four", ["five", "six"]]];
        if (v === Number(1)) return myArray[0];
        if (v === Number(2)) return myArray[1];
        if (v === Number(3)) return myArray[2][0];
        if (v === Number(4)) return myArray[2][1];
        if (v === Number(5)) return myArray[2][2][0];
        if (v === Number(6)) return myArray[2][2][1];
        return "Please enter a number between 1 and 6.";
    },

    // dictionary / objects
        // a function that returns the value of a property if the property entered exists within the object, in order to show an understanding of objects and how to access property values.  

    objectDictionary: (f) => {
        let fellowship = {
            
            frodo: "the ringbearer",
            sam: "loyal friend",
            pippin: "fool of a took",
            merry: "buckleberry ferry!",
            aragorn: "strider",
            boromir: "taken by the ring",
            gandalf: "fallen into shadow",
            gimli: "son of gloin",
            legolas: "something draws near.. i can feel it"

        };
        if (fellowship.hasOwnProperty(f)) return fellowship[f];
        return "Enter the first name of a member of the fellowship!";
    },

     // undefined
        // a function that always returns undefined, no matter the parameter entered.

    xUndefined: (u) => {
        console.log(u);
    },

    // sample if / else
        // an if / else statement that assigns e to a variable, ensures it is a number, and compares it to 0 in order to demonstrate an understanding of if / else and if else statements.

    sampleIfElse: (e) => {
        let myNewNumber = e;
        if (myNewNumber !== Number(myNewNumber)) return "Please enter a number.";
        else if (myNewNumber > 0) return myNewNumber + " is greater than " + 0;
        else if (myNewNumber < 0) return myNewNumber + " is less than " + 0;
        else return myNewNumber + " is " + 0;
    },

// functions
    // parameters
        // a simple addition function that demonstrates an understanding of simple logic and using parameters to generate a new variable.

    functionParameters: (p1, p2) => {
        if (p1 !== Number(p1) || p2 !== Number (p2)) return "Please enter a number.";
        let sum = p1 + p2;
        return sum;
    },

    // returns
        // turning a few parameters into variables and returning them as part of a string sentence in order to show what a "return" is. 

    functionReturns: (p1, p2, p3) => {
        let person = p1;
        let place = p2;
        let thing = p3;
        return "Hello, my name is " + person + " and I am going to " + place + " to get a " + thing + ".";
        return "If a return comes after a return in a function, does it really exist?"
    },

// arrays
    // add to the front
        // a simple function that demonstrates how to add a value onto the start of an array

    arrayAddToFront: (add) => {
        let anotherArray = ["2nd item", "3rd item", "4th item"];
        anotherArray.unshift(add);
        if (anotherArray[1] === "2nd item") return "Item added to front of array.";
        else return "Item not added to front of array";
    },

    // add to the end
        // a simple function that demonstrates how to add a value onto the end of an array

    arrayAddToEnd: (end) => {
        let yetAnotherArray = [1, 2, 3, 4];
        yetAnotherArray.push(end);
        if (end === yetAnotherArray[4]) return "Item added to end of array! Hooray!";
        else return "Item not added to end of array";
    },

    // update values
        // a simple function that demonstrates how to update values in an array

    arrayUpdateValues: (a1) => {
        let updateValueArray = [1, 2, 3, 4, 5];
        updateValueArray[4] = a1;
        return updateValueArray[4];
    },

// // loops 
//     // for

//     loopsFor: () => {

//     }

//     // for/in

//     loopsForIn: () => {

//     },

    // // while

    // loopsWhile: () => {

    // }

//     // do while

//     loopsDoWhile: () => {

//     },

//     // forEach (with array and function)

//     loopsForEach: () => {

//     },

// // Objects / Dictionaries
//     // declare object

//     objectDeclare: () => {

//     },

//     // lookup key to retrieve value

//     objectLookupKeyRetrieveValue: () => {

//     },

// --------------- Copy ends here --------

};

export default syntaxFunctions;
