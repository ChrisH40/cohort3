const arrayInput = document.getElementById("idArrayInput");
const arrayMessage = document.getElementById("idArrayMsg");

let myArray = [];

const arrayFunctions = {

    arrayAdd: () => {
        if (arrayInput.value == Number(arrayInput.value)) {
            myArray.push(Number(arrayInput.value));
            arrayMessage.textContent = "Number added to array.";
        } else return arrayMessage.textContent = "Input is not a valid number.";
    },

    arrayShow: () => {
        arrayMessage.textContent = "Current Array Values: " + myArray.toString();
    },

    arrayTotal: () => {
        let arraySum = 0;
        for (var i = 0; i < myArray.length; i++) {
            arraySum = arraySum + myArray[i];
        };
        return arrayMessage.textContent = "Total Array Sum: " + arraySum;
    },

    arrayClear: () => {
        myArray = [];
        return arrayMessage.textContent = "Array cleared!";
    }

};

export default arrayFunctions;