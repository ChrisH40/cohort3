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

idAddButton.addEventListener("click", functions.addButton);
idSubtractButton.addEventListener("click", functions.subtractButton);
idMultiplyButton.addEventListener("click", functions.multiplyButton);
idDivideButton.addEventListener("click", functions.divideButton);
idClearButton.addEventListener("click", functions.clearDisplay);
idEqualsButton.addEventListener("click", functions.equalsButton);

// --- Tax Calculator ---

idIncomeInputButton.addEventListener("click", functions.bracketEstablisher);

// --- Arrays ---

idArrayAddButton.addEventListener("click", functions.arrayAdd);
idArrayShowButton.addEventListener("click", functions.arrayShow);
idArrayTotalButton.addEventListener("click", functions.arrayTotal);
idArrayClearButton.addEventListener("click", functions.arrayClear);

// --- Objects / Dictionaries ---

idObjectLookupButton.addEventListener("click", functions.objectLookup);
