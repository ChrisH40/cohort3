let myArray = [];

const arrayFunctions = {

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
    }

};

export default arrayFunctions;