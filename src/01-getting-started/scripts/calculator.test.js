import calculatorFunctions from './calculator.js'

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