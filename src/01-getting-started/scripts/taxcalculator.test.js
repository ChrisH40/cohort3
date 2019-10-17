import taxCalculatorFunctions from './taxcalculator.js'

// ----- Tax Calculator Tests -----

test('Does tax equals function work?', () => {
    expect(taxCalculatorFunctions.taxOwingCalc(1, 0, 0.15, 0)).toBe("$0.15");
    expect(taxCalculatorFunctions.taxOwingCalc(2, 0, 0.15, 0)).toBe("$0.30");
    expect(taxCalculatorFunctions.taxOwingCalc(50000, 47630, 0.205, 7144.5)).toBe("$7630.35");
    expect(taxCalculatorFunctions.taxOwingCalc(100000, 95259, 0.26, 16908.445)).toBe("$18141.10");
    expect(taxCalculatorFunctions.taxOwingCalc(150000, 147667, 0.29, 30534.525)).toBe("$31211.10");
    expect(taxCalculatorFunctions.taxOwingCalc(250000, 210371, 0.33, 48718.685)).toBe("$61796.25");
});

test('Does tax rate function work?', () => {
   expect(taxCalculatorFunctions.taxRateCalc(1, 0, 0.15, 0)).toBe("15.00%");
   expect(taxCalculatorFunctions.taxRateCalc(2, 0, 0.15, 0)).toBe("15.00%");
   expect(taxCalculatorFunctions.taxRateCalc(50000, 47630, 0.205, 7144.5)).toBe("15.26%");
   expect(taxCalculatorFunctions.taxRateCalc(100000, 95259, 0.26, 16908.445)).toBe("18.14%");
   expect(taxCalculatorFunctions.taxRateCalc(150000, 147667, 0.29, 30534.525)).toBe("20.81%");
   expect(taxCalculatorFunctions.taxRateCalc(250000, 210371, 0.33, 48718.685)).toBe("24.72%");
});