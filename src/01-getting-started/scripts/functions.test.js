import pureFunctions from './functions.js';

// Functions Test

test('Check the sizes', () => {
    expect(pureFunctions.size(-1)).toBe("negative"); // Consider the edge cases
    expect(pureFunctions.size(0)).toBe("small");
    expect(pureFunctions.size(10)).toBe("medium");
    expect(pureFunctions.size(15)).toBe("medium");
    expect(pureFunctions.size(20)).toBe("large");
    expect(pureFunctions.size(2000000)).toBe("extra large");
    expect(pureFunctions.size(101)).toBe("extra large");
});

// --- Calculator Tests ---

test('Does add function work?', () => {
    expect(pureFunctions.addOperator(2, 2)).toBe(4);
    expect(pureFunctions.addOperator(5, 0.01)).toBe(5.01);
    expect(pureFunctions.addOperator(-10, 10)).toBe(0);
});

test('Does subtract function work?', () => {
    expect(pureFunctions.subtractOperator(2, 2)).toBe(0);
    expect(pureFunctions.subtractOperator(5, 0.01)).toBe(4.99);
    expect(pureFunctions.subtractOperator(-10, 10)).toBe(-20);
});

test('Does multiply function work?', () => {
    expect(pureFunctions.multiplyOperator(2, 3)).toBe(6);
    expect(pureFunctions.multiplyOperator(5, 0.01)).toBe(0.05);
    expect(pureFunctions.multiplyOperator(-10, 10)).toBe(-100);
});

test('Does divide function work?', () => {
    expect(pureFunctions.divideOperator(6, 3)).toBe(2);
    expect(pureFunctions.divideOperator(5, 0.01)).toBe(500);
    expect(pureFunctions.divideOperator(-10, 10)).toBe(-1);
});

// --- Array Tests ---

//Creates an array [1,7,-12.01,1254] for remainder of array tests - 2019 Oct 21: NEED TO FIX THIS
test('Does the array add function work?', () => {
    expect(pureFunctions.arrayAddFunction(1)).toBe(1);
    expect(pureFunctions.arrayAddFunction(7)).toBe(2);
    expect(pureFunctions.arrayAddFunction(-12.01)).toBe(3);
    expect(pureFunctions.arrayAddFunction(1254)).toBe(4);
});

test('Does the array show function work?', () => {
    expect(pureFunctions.arrayShowFunction()).toBe("Current Array Values: 1,7,-12.01,1254");
});

test('Does the array total function work?', () => {
    expect(pureFunctions.arrayTotalFunction()).toBe("Total Array Sum: 1249.99");
});

test('Does the array clear function work?', () => {
    expect(pureFunctions.arrayClearFunction()).toBe("Array cleared!");
});

// --- Dictionary Tests ---

test('Does the object lookup function work?', () => {
    expect(pureFunctions.objectLookupFunction("ab")).toBe("Alberta");
    expect(pureFunctions.objectLookupFunction("AB")).toBe("Alberta");
    expect(pureFunctions.objectLookupFunction("NS")).toBe("Nova Scotia");
    expect(pureFunctions.objectLookupFunction("na")).toBe("Please enter a valid provincial/territorial abbreviation.");
});
