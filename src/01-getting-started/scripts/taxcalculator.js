const incomeInputTest = document.getElementById("idIncomeInput".value);
const incomeInput = document.getElementById("idIncomeInput");
const taxOwingDisplay = document.getElementById("idTaxOwing");
const effectiveRateDisplay = document.getElementById("idEffectiveRate");

console.log(incomeInputTest);

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

const taxCalculatorFunctions = {

    bracketEstablisher: () => {
        if (incomeInput.value > taxBrackets[0].lowestIncome && incomeInput.value <= taxBrackets[0].greatestIncome)
            return taxOwingDisplay.value = taxCalculatorFunctions.taxOwingCalc(incomeInput.value, taxBrackets[0].line2, taxBrackets[0].line4, taxBrackets[0].line6);
        if (incomeInput.value >= taxBrackets[1].lowestIncome && incomeInput.value <= taxBrackets[1].greatestIncome)
            return taxOwingDisplay.value = taxCalculatorFunctions.taxOwingCalc(incomeInput.value, taxBrackets[1].line2, taxBrackets[1].line4, taxBrackets[1].line6);
        if (incomeInput.value >= taxBrackets[2].lowestIncome && incomeInput.value <= taxBrackets[2].greatestIncome)
            return taxOwingDisplay.value = taxCalculatorFunctions.taxOwingCalc(incomeInput.value, taxBrackets[2].line2, taxBrackets[2].line4, taxBrackets[2].line6);
        if (incomeInput.value >= taxBrackets[3].lowestIncome && incomeInput.value <= taxBrackets[3].greatestIncome)
            return taxOwingDisplay.value = taxCalculatorFunctions.taxOwingCalc(incomeInput.value, taxBrackets[3].line2, taxBrackets[3].line4, taxBrackets[3].line6);
        if (incomeInput.value >= taxBrackets[4].lowestIncome)
            return taxOwingDisplay.value = taxCalculatorFunctions.taxOwingCalc(incomeInput.value, taxBrackets[4].line2, taxBrackets[4].line4, taxBrackets[4].line6);
    },

    taxOwingCalc: (inc, base, rate, tax) => {
        let taxOwing = ((inc - base) * rate) + tax;
        effectiveRateDisplay.value = taxCalculatorFunctions.taxRateCalc(inc, taxOwing);
        return "$" + taxOwing.toFixed(2);
    },

    taxRateCalc: (inc, taxOwing) => {
        return ((taxOwing / inc) * 100).toFixed(2) + "%";
    }
};

export default taxCalculatorFunctions;