import functions from './functions.js'
import calculatorFunctions from './calculator.js'
import taxCalculatorFunctions from './taxcalculator.js'
import arrayFunctions from './arrays.js'
import dictionaryFunctions from './dictionaries.js'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("extra large");
    expect(functions.size(101)).toBe("extra large");
});

test('Does that add function work?', () => {
    expect(functions.add(1, 2)).toBe(3);
    expect(functions.add(101, 202)).toBe(303);
});

// ----- Calculator Tests -----

test('Does add function work?', () => {
    expect(calculatorFunctions.addOperator(2, 2)).toBe(4);
    expect(calculatorFunctions.addOperator(5, 0.01)).toBe(5.01);
    expect(calculatorFunctions.addOperator(-10, 10)).toBe(0);
});

test('Does subtract function work?', () => {
    expect(calculatorFunctions.subtractOperator(2, 2)).toBe(0);
    expect(calculatorFunctions.subtractOperator(5, 0.01)).toBe(4.99);
    expect(calculatorFunctions.subtractOperator(-10, 10)).toBe(-20);
});

test('Does multiply function work?', () => {
    expect(calculatorFunctions.multiplyOperator(2, 3)).toBe(6);
    expect(calculatorFunctions.multiplyOperator(5, 0.01)).toBe(0.05);
    expect(calculatorFunctions.multiplyOperator(-10, 10)).toBe(-100);
});

test('Does divide function work?', () => {
    expect(calculatorFunctions.divideOperator(6, 3)).toBe(2);
    expect(calculatorFunctions.divideOperator(5, 0.01)).toBe(500);
    expect(calculatorFunctions.divideOperator(-10, 10)).toBe(-1);
});

// ----- Tax Calculator Tests -----

// test('Does tax equals function work?', () => {
//      expect(taxCalculatorFunctions.taxOwingCalc(1, 0, 0.15, 0)).toBe("$0.15");
//      expect(taxCalculatorFunctions.taxOwingCalc(2, 0, 0.15, 0)).toBe("$0.30");
//      expect(taxCalculatorFunctions.taxOwingCalc(50000, 47630, 0.205, 7144.5)).toBe("$7630.35");
//      expect(taxCalculatorFunctions.taxOwingCalc(100000, 95259, 0.26, 16908.445)).toBe("$18141.10");
//      expect(taxCalculatorFunctions.taxOwingCalc(150000, 147667, 0.29, 30534.525)).toBe("$31211.10");
//      expect(taxCalculatorFunctions.taxOwingCalc(250000, 210371, 0.33, 48718.685)).toBe("$61796.25");
// });

test('Does tax rate function work?', () => {
    expect(taxCalculatorFunctions.taxRateCalc(1, 0.15)).toBe("15.00%");
    expect(taxCalculatorFunctions.taxRateCalc(2, 0.30)).toBe("15.00%");
    expect(taxCalculatorFunctions.taxRateCalc(50000, 7630.35)).toBe("15.26%");
    expect(taxCalculatorFunctions.taxRateCalc(100000, 18141.10)).toBe("18.14%");
    expect(taxCalculatorFunctions.taxRateCalc(150000, 31211.10)).toBe("20.81%");
    expect(taxCalculatorFunctions.taxRateCalc(250000, 61796.25)).toBe("24.72%");
});

// ----- Working With Arrays Tests ------

// test('Does the array add function work?', () => {
//     expect(arrayFunctions.arrayAdd(1)).toBe([1]);
// });

// test('Does the array show function work?', () => {
//     expect(arrayFunctions.arrayShow(1)).toBe("1");
// });

// test('Does the array total function work?', () => {
//     expect(arrayFunctions.arrayTotal([1, 2])).toBe(3);
// });

// test('Does the array clear function work?', () => {
//     expect(arrayFunctions.arrayClear([1, 2, 3])).toBe([]);
// });

// ----- Working With Dictionaries ------

// test('Does the object lookup function work?', () => {
//     expect(dictionaryFunctions.objectLookup("ab")).toBe("Alberta");
//     expect(dictionaryFunctions.objectLookup("AB")).toBe("Alberta");
//     expect(ditionaryFunctions.objectLookup("NS")).toBe("Nova Scotia");
//     expect(ditionaryFunctions.objectLookup("na")).toBe("Please enter a valid provincial/territorial abbreviation.");
// });





