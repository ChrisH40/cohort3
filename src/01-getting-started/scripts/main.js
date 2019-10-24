import pureFunctions from './functions.js';
import taxCalculatorFunctions from './taxcalculator.js';

const functions = {

    // --- Calculator Button/Event Functions ---

    op: "",

    clearDisplay: () => {
        functions.op = "";
        idInputDisplay1.value = "";
        idInputDisplay2.value = "";
        idTotalDisplay.value = "";
        idArithmetic.textContent = " ";
    },

    addButton: () => {
        functions.op = "+";
        idArithmetic.textContent = " + ";
    },

    subtractButton: () => {
        functions.op = "-";
        idArithmetic.textContent = " - ";
    },

    multiplyButton: () => {
        functions.op = "x";
        idArithmetic.textContent = " x ";
    },

    divideButton: () => {
        functions.op = "/";
        idArithmetic.textContent = " / ";
    },

    equalsButton: () => {
        if (functions.op === "+")
            return idTotalDisplay.value = pureFunctions.addOperator(Number(idInputDisplay1.value), Number(idInputDisplay2.value));
        if (functions.op === "-")
            return idTotalDisplay.value = pureFunctions.subtractOperator(Number(idInputDisplay1.value), Number(idInputDisplay2.value));
        if (functions.op === "x")
            return idTotalDisplay.value = pureFunctions.multiplyOperator(Number(idInputDisplay1.value), Number(idInputDisplay2.value));
        if (functions.op === "/")
            return idTotalDisplay.value = pureFunctions.divideOperator(Number(idInputDisplay1.value), Number(idInputDisplay2.value));
    },

    // --- Tax Calculator Button/Event Functions ---

    taxBrackets: [

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

    ],

    bracketEstablisher: () => {
        if (idIncomeInput.value > functions.taxBrackets[0].lowestIncome && idIncomeInput.value <= functions.taxBrackets[0].greatestIncome) {
            idTaxOwing.value = taxCalculatorFunctions.taxOwingCalc(idIncomeInput.value, functions.taxBrackets[0].line2, functions.taxBrackets[0].line4, functions.taxBrackets[0].line6);
            idEffectiveRate.value = taxCalculatorFunctions.taxRateCalc(idIncomeInput.value, functions.taxBrackets[0].line2, functions.taxBrackets[0].line4, functions.taxBrackets[0].line6);
        } if (idIncomeInput.value >= functions.taxBrackets[1].lowestIncome && idIncomeInput.value <= functions.taxBrackets[1].greatestIncome) {
            idTaxOwing.value = taxCalculatorFunctions.taxOwingCalc(idIncomeInput.value, functions.taxBrackets[1].line2, functions.taxBrackets[1].line4, functions.taxBrackets[1].line6);
            idEffectiveRate.value = taxCalculatorFunctions.taxRateCalc(idIncomeInput.value, functions.taxBrackets[1].line2, functions.taxBrackets[1].line4, functions.taxBrackets[1].line6);
        } if (idIncomeInput.value >= functions.taxBrackets[2].lowestIncome && idIncomeInput.value <= functions.taxBrackets[2].greatestIncome) {
            idTaxOwing.value = taxCalculatorFunctions.taxOwingCalc(idIncomeInput.value, functions.taxBrackets[2].line2, functions.taxBrackets[2].line4, functions.taxBrackets[2].line6);
            idEffectiveRate.value = taxCalculatorFunctions.taxRateCalc(idIncomeInput.value, functions.taxBrackets[2].line2, functions.taxBrackets[2].line4, functions.taxBrackets[2].line6);
        } if (idIncomeInput.value >= functions.taxBrackets[3].lowestIncome && idIncomeInput.value <= functions.taxBrackets[3].greatestIncome) {
            idTaxOwing.value = taxCalculatorFunctions.taxOwingCalc(idIncomeInput.value, functions.taxBrackets[3].line2, functions.taxBrackets[3].line4, functions.taxBrackets[3].line6);
            idEffectiveRate.value = taxCalculatorFunctions.taxRateCalc(idIncomeInput.value, functions.taxBrackets[3].line2, functions.taxBrackets[3].line4, functions.taxBrackets[3].line6);
        } if (idIncomeInput.value >= functions.taxBrackets[4].lowestIncome) {
            idTaxOwing.value = taxCalculatorFunctions.taxOwingCalc(idIncomeInput.value, functions.taxBrackets[4].line2, functions.taxBrackets[4].line4, functions.taxBrackets[4].line6);
            idEffectiveRate.value = taxCalculatorFunctions.taxRateCalc(idIncomeInput.value, functions.taxBrackets[4].line2, functions.taxBrackets[4].line4, functions.taxBrackets[4].line6);
        }
    },

    // --- Array Button/Event Functions ---

    arrayAdd: () => {
        if (idArrayInput.value == Number(idArrayInput.value)) {
            pureFunctions.arrayAddFunction(idArrayInput.value);
            idArrayMsg.textContent = "Number added to array.";
        } else return idArrayMsg.textContent = "Input is not a valid number.";
    },

    arrayShow: () => {
        idArrayMsg.textContent = pureFunctions.arrayShowFunction();
    },

    arrayTotal: () => {
        idArrayMsg.textContent = pureFunctions.arrayTotalFunction();
    },

    arrayClear: () => {
        idArrayMsg.textContent = pureFunctions.arrayClearFunction();
    },

    // Object / Dictionary Function

    objectLookup: () => {
        idObjectMsg.textContent = pureFunctions.objectLookupFunction(idObjectInput.value);
    }
}

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = pureFunctions.size(idNumber.value);
}));

// --- Calculator Event Listeners ---

idAddButton.addEventListener("click", functions.addButton);
idSubtractButton.addEventListener("click", functions.subtractButton);
idMultiplyButton.addEventListener("click", functions.multiplyButton);
idDivideButton.addEventListener("click", functions.divideButton);
idClearButton.addEventListener("click", functions.clearDisplay);
idEqualsButton.addEventListener("click", functions.equalsButton);

// --- Tax Calculator Event Listeners  ---

idIncomeInputButton.addEventListener("click", functions.bracketEstablisher);

// --- Arrays Event Listeners ---

idArrayAddButton.addEventListener("click", functions.arrayAdd);
idArrayShowButton.addEventListener("click", functions.arrayShow);
idArrayTotalButton.addEventListener("click", functions.arrayTotal);
idArrayClearButton.addEventListener("click", functions.arrayClear);

// --- Objects / Dictionaries Event Listeners ---

idObjectLookupButton.addEventListener("click", functions.objectLookup);