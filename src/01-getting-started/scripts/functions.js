import calculatorFunctions from './calculator.js';
import taxCalculatorFunctions from './taxcalculator.js';
import arrayFunctions from './arrays.js';
import dictionaryFunctions from './dictionaries.js';

// Calculator Variables

const firstInput = document.getElementById("idInputDisplay1");
const secondInput = document.getElementById("idInputDisplay2");
const totalOutput = document.getElementById("idTotalDisplay");
let arithmeticField = document.getElementById("idArithmetic");
let op = "0";

// Tax Calculator Variables

const incomeInput = document.getElementById("idIncomeInput");
const taxOwingDisplay = document.getElementById("idTaxOwing");
const effectiveRateDisplay = document.getElementById("idEffectiveRate");
const taxBrackets = [

    {
        lowestIncome: 0.00,
        greatestIncome: 47630.00,
        line2: 0.00,
        line4: 0.15,
        line6: 0.00,
    },

    {
        lowestIncome: 47630.01,
        greatestIncome: 95259.00,
        line2: 47630.00,
        line4: 0.205,
        line6: 7144.50,
    },

    {
        lowestIncome: 95259.01,
        greatestIncome: 147667.00,
        line2: 95259.00,
        line4: 0.26,
        line6: 16908.445,
    },

    {
        lowestIncome: 147667.01,
        greatestIncome: 210371.00,
        line2: 147667.00,
        line4: 0.29,
        line6: 30534.525,
    },

    {
        lowestIncome: 210371.01,
        line2: 210371.00,
        line4: 0.33,
        line6: 48718.685,
    }

];

// Arrays Variables

const arrayInput = document.getElementById("idArrayInput");
const arrayMessage = document.getElementById("idArrayMsg");

// Object / Dictionary Variables

const objectInput = document.getElementById("idObjectInput");
const objectMessage = document.getElementById("idObjectMsg");

// Functions

const functions = {

    size: (num) => {
        if (num < 0) return "negative";
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num < 100) return "large";
        return "extra large";
    },

    // Not used:

    // add: (num1, num2) => {
    //     return num1 + num2;
    // },

    // subtract: (num1, num2) => {
    //     return num1 - num2;
    // },

    // Calculator Button/Event Functions

    clearDisplay: () => {
        firstInput.value = 0;
        secondInput.value = 0;
        totalOutput.value = 0;
        op = "0";
        arithmeticField.textContent = " + - x / ";
    },

    addButton: () => {
        op = "+";
        arithmeticField.textContent = " + ";
    },

    subtractButton: () => {
        op = "-";
        arithmeticField.textContent = " - ";
    },

    multiplyButton: () => {
        op = "x";
        arithmeticField.textContent = " x ";
    },

    divideButton: () => {
        op = "/";
        arithmeticField.textContent = " / ";
    },

    equalsButton: () => {
        if (op === "+")
            return totalOutput.value = calculatorFunctions.addOperator(Number(firstInput.value), Number(secondInput.value));
        if (op === "-")
            return totalOutput.value = calculatorFunctions.subtractOperator(Number(firstInput.value), Number(secondInput.value));
        if (op === "x")
            return totalOutput.value = calculatorFunctions.multiplyOperator(Number(firstInput.value), Number(secondInput.value));
        if (op === "/")
            return totalOutput.value = calculatorFunctions.divideOperator(Number(firstInput.value), Number(secondInput.value));
    },

    // Tax Calculator Button/Event Function

    bracketEstablisher: () => {
        if (incomeInput.value > taxBrackets[0].lowestIncome && incomeInput.value <= taxBrackets[0].greatestIncome) {
            taxOwingDisplay.value = taxCalculatorFunctions.taxOwingCalc(incomeInput.value, taxBrackets[0].line2, taxBrackets[0].line4, taxBrackets[0].line6);
            effectiveRateDisplay.value = taxCalculatorFunctions.taxRateCalc(incomeInput.value, taxBrackets[0].line2, taxBrackets[0].line4, taxBrackets[0].line6);
        } if (incomeInput.value >= taxBrackets[1].lowestIncome && incomeInput.value <= taxBrackets[1].greatestIncome) {
            taxOwingDisplay.value = taxCalculatorFunctions.taxOwingCalc(incomeInput.value, taxBrackets[1].line2, taxBrackets[1].line4, taxBrackets[1].line6);
            effectiveRateDisplay.value = taxCalculatorFunctions.taxRateCalc(incomeInput.value, taxBrackets[1].line2, taxBrackets[1].line4, taxBrackets[1].line6);
        } if (incomeInput.value >= taxBrackets[2].lowestIncome && incomeInput.value <= taxBrackets[2].greatestIncome) {
            taxOwingDisplay.value = taxCalculatorFunctions.taxOwingCalc(incomeInput.value, taxBrackets[2].line2, taxBrackets[2].line4, taxBrackets[2].line6);
            effectiveRateDisplay.value = taxCalculatorFunctions.taxRateCalc(incomeInput.value, taxBrackets[2].line2, taxBrackets[2].line4, taxBrackets[2].line6);
        } if (incomeInput.value >= taxBrackets[3].lowestIncome && incomeInput.value <= taxBrackets[3].greatestIncome) {
            taxOwingDisplay.value = taxCalculatorFunctions.taxOwingCalc(incomeInput.value, taxBrackets[3].line2, taxBrackets[3].line4, taxBrackets[3].line6);
            effectiveRateDisplay.value = taxCalculatorFunctions.taxRateCalc(incomeInput.value, taxBrackets[3].line2, taxBrackets[3].line4, taxBrackets[3].line6);
        } if (incomeInput.value >= taxBrackets[4].lowestIncome) {
            taxOwingDisplay.value = taxCalculatorFunctions.taxOwingCalc(incomeInput.value, taxBrackets[4].line2, taxBrackets[4].line4, taxBrackets[4].line6);
            effectiveRateDisplay.value = taxCalculatorFunctions.taxRateCalc(incomeInput.value, taxBrackets[4].line2, taxBrackets[4].line4, taxBrackets[4].line6);
        }
    },

    // Array Button/Event Functions

    arrayAdd: () => {
        if (arrayInput.value == Number(arrayInput.value)) {
            arrayFunctions.arrayAddFunction(arrayInput.value);
            arrayMessage.textContent = "Number added to array.";
        } else return arrayMessage.textContent = "Input is not a valid number.";
    },

    arrayShow: () => {
        arrayMessage.textContent = arrayFunctions.arrayShowFunction();
    },

    arrayTotal: () => {
        arrayMessage.TextContent = arrayFunctions.arrayTotalFunction();
    },

    arrayClear: () => {
        arrayMessage.textContent = arrayFunctions.arrayClearFunction();
     },

     // Object / Dictionary Function

     objectLookup: () => {
        objectMessage.textContent = dictionaryFunctions.objectLookupFunction(objectInput.value);
     }

};

export default functions;