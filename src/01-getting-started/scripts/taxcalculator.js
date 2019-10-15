const taxCalculatorFunctions = {

    taxOwingCalc: (inc, base, rate, tax) => {
        return "$" + (((inc - base) * rate) + tax).toFixed(2);
    },

    taxRateCalc: (inc, base, rate, tax) => {
        return (((((inc - base) * rate) + tax) / inc) * 100).toFixed(2) + "%";
    }
};

export default taxCalculatorFunctions;