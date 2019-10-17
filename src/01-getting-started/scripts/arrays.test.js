import arrayFunctions from './arrays.js'

// ----- Working With Arrays Tests ------
    
//Creates an array [1,7,-12.01,1254] for remainder of array tests
test('Does the array add function work?', () => {
    expect(arrayFunctions.arrayAddFunction(1)).toBe(1);
    expect(arrayFunctions.arrayAddFunction(7)).toBe(2);
    expect(arrayFunctions.arrayAddFunction(-12.01)).toBe(3);
    expect(arrayFunctions.arrayAddFunction(1254)).toBe(4);
});

test('Does the array show function work?', () => {
    expect(arrayFunctions.arrayShowFunction()).toBe("Current Array Values: 1,7,-12.01,1254");
});

test('Does the array total function work?', () => {
    expect(arrayFunctions.arrayTotalFunction()).toBe("Total Array Sum: 1249.99");
});

test('Does the array clear function work?', () => {
    expect(arrayFunctions.arrayClearFunction()).toBe("Array cleared!");
});