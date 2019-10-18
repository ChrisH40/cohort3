// --------------- Copy this section into your code syntax.js as comments --------

const syntaxFunctions = {

    // define attributes / variables
    // number
        // identifies only numbers.
        // "num" doesn't have to be assigned to a variable but is here to demonstrate an understanding of variables.
        // this is also true for other functions below.

    xNumber: (num) => {
        let myNumber = num
        if (myNumber === Number(myNumber)) return myNumber + " is a number.";
        return "Please enter a number!";
    },

    // string
        // identifies only strings.

    xString: (str) => {
        let myString = str;
        if (myString === String(myString)) return myString + " <-- this is a string.";
        return "Please enter a string!";
    },

    // boolean
        // compares the equality of two parameters in order to return a true or false. 

    xBoolean: (b, c) => {
        let equalityCheck = (b === c);
        return equalityCheck;
    },

    // array
        // tests if a number entered will return the corresponding string value found in an array, in order to show an understanding of arrays and how to access items within them.

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
        // returns the value of a property if the property entered exists within the object, in order to show an understanding of objects and how to access property values.  

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
        // always returns undefined, no matter the parameter entered.

    xUndefined: (u) => {
        console.log(u);
    },

    // sample if / else
        // assigns e to a variable, ensures it is a number, and compares it to 0 in order to demonstrate an understanding of if / else and if else statements.

    sampleIfElse: (e) => {
        let myNewNumber = e;
        if (myNewNumber !== Number(myNewNumber)) return "Please enter a number.";
        else if (myNewNumber > 0) return myNewNumber + " is greater than " + 0;
        else if (myNewNumber < 0) return myNewNumber + " is less than " + 0;
        else return myNewNumber + " is " + 0;
    },

    // functions
    // parameters
        // demonstrates an understanding of logic and using parameters to generate a new variable.

    functionParameters: (p1, p2) => {
        if (p1 !== Number(p1) || p2 !== Number(p2)) return "Please enter a number.";
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
    },

    // arrays
    // add to the front
        // demonstrates how to add a value onto the start of an array

    arrayAddToFront: (add) => {
        let anotherArray = ["2nd item", "3rd item", "4th item"];
        anotherArray.unshift(add);
        if (anotherArray[1] === "2nd item") return "Item added to front of array.";
    },

    // add to the end
        // demonstrates how to add a value onto the end of an array

    arrayAddToEnd: (end) => {
        let yetAnotherArray = [1, 2, 3, 4];
        yetAnotherArray.push(end);
        if (end === yetAnotherArray[4]) return "Item added to end of array! Hooray!";
    },

    // update values
        // demonstrates how to update values in an array

    arrayUpdateValues: (a1) => {
        let updateValueArray = [1, 2, 3, 4, 5];
        updateValueArray[4] = a1;
        return updateValueArray[4];
    },

    // loops 
        // Need to work on these....
    // for
        // a for loop that adds values to a parameter until the loop no longer runs, then returns the updated paramater

    loopsFor: (lf) => {
        if (Number(lf)) {
            for (let i = 0; i < 5; i++) {
                lf++;
            } return lf + " ---> Your number plus 5!";
        } else return "Enter a number!";
    },

    // for/in
        // shows an understanding of for / in loops by returning a string combination of all object property values with a space in between.

    loopsForIn: () => {
        const hobbit = {

            name: "bilbo baggins",
            neededtransitionalfiller: "lives in the",
            residence: "shire",
            neededitagain: "and is",
            age: 111,
            andonemoretime: "years old"

        }
        let baggins = "";
        let x;
        for (x in hobbit) {
            baggins += hobbit[x] + " ";
        } return baggins;
    },

    // while
        // showing how a while loop works by returning a certain number generated from a while loop, depending on what number is entered as a parameter.

    loopsWhile: (lw) => {
        if (Number(lw) < 0) {
            let i = 0;
            while (i < 10) i++;
            return i;
        } else if (Number(lw) === 0) {
            return 0;
        } else if (Number(lw) > 0) {
            let i = 100;
            while (i > 90) i--;
            return i;
        } return "Enter a number!";
    },

    // do while

    loopsDoWhile: () => {
        let i = 0;
        do {
            i++;
        }
        while (i < 4);
        return i;
    },

    // forEach (with array and function)

    loopsForEach: () => {
        let myArray = [1, 2, 3, 4, 5];
        let myNextArray = [];
        myArray.forEach(num => {
            let obj = num * 2;
            myNextArray.push(obj);
        }); return myNextArray;
    },

    // Objects / Dictionaries
    // declare object
        //creating a new object using two entered parameters

    objectDeclare: (prop1, prop2) => {
        let newObject = {firstprop: prop1, secondprop: prop2};
        return "The first property in your new object is " + newObject.firstprop + ", and the second property is " + newObject.secondprop + ".";
    },

    // lookup key to retrieve value
        // similar to dictionary / objects above

    objectLookupKeyRetrieveValue: (n) => {

        let numberText = {

            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten"

        };
        
        n = Number(n);
        if (numberText.hasOwnProperty(n)) 
            return numberText[n];
            else return "Enter a number between 1 and 10";
    }

    // --------------- Copy ends here --------

};

export default syntaxFunctions;
