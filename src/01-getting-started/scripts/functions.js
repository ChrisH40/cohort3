// --- Array Variable ---
let myArray = [];

// Functions

const pureFunctions = { // only the purest of functions...

    size: (num) => {
        if (num < 0) return "negative";
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num < 100) return "large";
        return "extra large";
    },

    // --- Calculator Functions ---

    addOperator: (num1, num2) => {
        return num1 + num2;
    },

    subtractOperator: (num1, num2) => {
        return num1 - num2
    },

    multiplyOperator: (num1, num2) => {
        return num1 * num2;
    },

    divideOperator: (num1, num2) => {
        return num1 / num2;
    },

    // --- Array Functions ---

    arrayAddFunction: (num) => {
        return myArray.push(Number(num));
    },

    arrayShowFunction: () => {
        return "Current Array Values: " + myArray.toString();
    },

    arrayTotalFunction: () => {
        let arraySum = 0;
        for (var i = 0; i < myArray.length; i++) {
            arraySum = arraySum + myArray[i];
        };
        return "Total Array Sum: " + arraySum;
       
    },

    arrayClearFunction: () => {
        myArray = [];
        return "Array cleared!";
    },

    // --- Dictionary Functions ---

    myDictionary: {

        AB: "Alberta",
        BC: "British Columbia",
        MB: "Manitoba",
        NB: "New Brunswick",
        NL: "Newfoundland and Labrador",
        NT: "Northwest Territories",
        NS: "Nova Scotia",
        NU: "Nunavut",
        ON: "Ontario",
        PE: "Prince Edward Island",
        QC: "Quebec",
        SK: "Saskatchewan",
        YT: "Yukon"

    },

    objectLookupFunction: (prop) => {
        prop = prop.toUpperCase();
        if (pureFunctions.myDictionary.hasOwnProperty(prop)) {
            return pureFunctions.myDictionary[prop];
        } else return "Please enter a valid provincial/territorial abbreviation.";
    }

};

export default pureFunctions;