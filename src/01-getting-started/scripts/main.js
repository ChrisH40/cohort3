import functions from './functions.js';
import calculatorFunctions from './calculator.js'
import taxCalculatorFunctions from './taxcalculator.js'
import arrayFunctions from './arrays.js'
import dictionaryFunctions from './dictionaries.js'

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

// --- Calculator ---

const clearButton = document.getElementById("idClearButton");
const addButton = document.getElementById("idAddButton");
const subtractButton = document.getElementById("idSubtractButton");
const multiplyButton = document.getElementById("idMultiplyButton");
const divideButton = document.getElementById("idDivideButton");
const equalsButton = document.getElementById("idEqualsButton");

addButton.addEventListener("click", calculatorFunctions.addButton);
subtractButton.addEventListener("click", calculatorFunctions.subtractButton);
multiplyButton.addEventListener("click", calculatorFunctions.multiplyButton);
divideButton.addEventListener("click", calculatorFunctions.divideButton);
clearButton.addEventListener("click", calculatorFunctions.clearDisplay);
equalsButton.addEventListener("click", calculatorFunctions.equalsButton);

// --- Tax Calculator ---

const incomeButton = document.getElementById("idIncomeInputButton");

incomeButton.addEventListener("click", taxCalculatorFunctions.bracketEstablisher);

// --- Arrays ---

const arrayAddButton = document.getElementById("idArrayAddButton");
const arrayShowButton = document.getElementById("idArrayShowButton");
const arrayTotalButton = document.getElementById("idArrayTotalButton");
const arrayClearButton = document.getElementById("idArrayClearButton");

arrayAddButton.addEventListener("click", arrayFunctions.arrayAdd);
arrayShowButton.addEventListener("click", arrayFunctions.arrayShow);
arrayTotalButton.addEventListener("click", arrayFunctions.arrayTotal);
arrayClearButton.addEventListener("click", arrayFunctions.arrayClear);

// --- Objects / Dictionaries ---

const objectLookupButton = document.getElementById("idObjectLookupButton");

objectLookupButton.addEventListener("click", dictionaryFunctions.objectLookup);
