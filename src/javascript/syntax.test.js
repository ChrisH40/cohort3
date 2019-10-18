import syntaxFunctions from './syntax.js'

// TESTS

// define attributes / variables
// number

test('Check if parameter is a number', () => {
    expect(syntaxFunctions.xNumber(1)).toBe(1 + " is a number.");
    expect(syntaxFunctions.xNumber("1")).toBe("Please enter a number!");
    expect(syntaxFunctions.xNumber(-27)).toBe(-27 + " is a number.");
    expect(syntaxFunctions.xNumber(false)).toBe("Please enter a number!");
});

// string

test('Check if parameter is a string', () => {
    expect(syntaxFunctions.xString(1)).toBe("Please enter a string!");
    expect(syntaxFunctions.xString("1")).toBe("1" + " <-- this is a string.");
    expect(syntaxFunctions.xString("hello")).toBe("hello" + " <-- this is a string.");
    expect(syntaxFunctions.xString(-27)).toBe("Please enter a string!");
    expect(syntaxFunctions.xString(false)).toBe("Please enter a string!");
});

// boolean

test('Check if parameters return boolean true or false', () => {
    expect(syntaxFunctions.xBoolean(1, 1)).toBe(true);
    expect(syntaxFunctions.xBoolean("1", 1)).toBe(false);
    expect(syntaxFunctions.xBoolean("hello", "hello")).toBe(true);
    expect(syntaxFunctions.xBoolean("i don't know why you say goodbye", "cause i say hello")).toBe(false);
    expect(syntaxFunctions.xBoolean(false, false)).toBe(true);
    expect(syntaxFunctions.xBoolean(true, false)).toBe(false);
});

// array

test('Check if arrays return correct values', () => {
    expect(syntaxFunctions.xArray(1)).toBe("one");
    expect(syntaxFunctions.xArray(2)).toBe("two");
    expect(syntaxFunctions.xArray(3)).toBe("three");
    expect(syntaxFunctions.xArray(4)).toBe("four");
    expect(syntaxFunctions.xArray(5)).toBe("five");
    expect(syntaxFunctions.xArray(6)).toBe("six");
    expect(syntaxFunctions.xArray("two")).toBe("Please enter a number between 1 and 6.");
    expect(syntaxFunctions.xArray(-47)).toBe("Please enter a number between 1 and 6.");
    expect(syntaxFunctions.xArray(false)).toBe("Please enter a number between 1 and 6.");
});

// dictionary / objects

test('Check object properties return correct values', () => {
    expect(syntaxFunctions.objectDictionary("sam")).toBe("loyal friend");
    expect(syntaxFunctions.objectDictionary(7)).toBe("Enter the first name of a member of the fellowship!");
    expect(syntaxFunctions.objectDictionary("pippin")).toBe("fool of a took");
    expect(syntaxFunctions.objectDictionary("saruman")).toBe("Enter the first name of a member of the fellowship!");
    expect(syntaxFunctions.objectDictionary("legolas")).toBe("something draws near.. i can feel it");
});

// undefined

test('Check function return is always undefined', () => {
    expect(syntaxFunctions.xUndefined()).toBe(undefined);
    expect(syntaxFunctions.xUndefined(10)).toBe(undefined);
    expect(syntaxFunctions.xUndefined("have you ever been undefined?")).toBe(undefined);
    expect(syntaxFunctions.xUndefined("do they keep you undefined?")).toBe(undefined);
    expect(syntaxFunctions.xUndefined("when you're not performing your duties do they keep you a little undefined?")).toBe(undefined);
});

// sample if / else

test('Check if / else statement', () => {
    expect(syntaxFunctions.sampleIfElse(3)).toBe(3 + " is greater than " + 0);
    expect(syntaxFunctions.sampleIfElse(-4)).toBe(-4 + " is less than " + 0);
    expect(syntaxFunctions.sampleIfElse("3")).toBe("Please enter a number.");
    expect(syntaxFunctions.sampleIfElse("number")).toBe("Please enter a number.");
    expect(syntaxFunctions.sampleIfElse(0)).toBe(0 + " is " + 0);
});

// functions
// parameters

test('Check function parameters', () => {
    expect(syntaxFunctions.functionParameters(3, 3)).toBe(6);
    expect(syntaxFunctions.functionParameters(3, -3)).toBe(0);
    expect(syntaxFunctions.functionParameters(3, "3")).toBe("Please enter a number.");
    expect(syntaxFunctions.functionParameters("what am I doing?", 100)).toBe("Please enter a number.");
    expect(syntaxFunctions.functionParameters(20000, 3)).toBe(20003);
});

// returns

test('Check function returns', () => {
    expect(syntaxFunctions.functionReturns(3, 3, 3)).toBe("Hello, my name is " + 3 + " and I am going to " + 3 + " to get a " + 3 + ".");
    expect(syntaxFunctions.functionReturns("John", "Canada", "Double Double")).toBe("Hello, my name is John and I am going to Canada to get a Double Double.");
    expect(syntaxFunctions.functionReturns("", "", "")).toBe("Hello, my name is  and I am going to  to get a .");
});

// arrays
// add to the front

test('Check if parameter added to front of array', () => {
    expect(syntaxFunctions.arrayAddToFront("test")).toBe("Item added to front of array.");
    expect(syntaxFunctions.arrayAddToFront(3)).toBe("Item added to front of array.");
    expect(syntaxFunctions.arrayAddToFront("")).toBe("Item added to front of array.");
    expect(syntaxFunctions.arrayAddToFront(-20017)).toBe("Item added to front of array.");
    expect(syntaxFunctions.arrayAddToFront(false)).toBe("Item added to front of array.");
});

// add to the end

test('Check if parameter added to end of array', () => {
    expect(syntaxFunctions.arrayAddToEnd("test")).toBe("Item added to end of array! Hooray!");
    expect(syntaxFunctions.arrayAddToEnd("creativity is taking a hit now...")).toBe("Item added to end of array! Hooray!");
    expect(syntaxFunctions.arrayAddToEnd(100)).toBe("Item added to end of array! Hooray!");
});

// update values

test('Check if array value updated', () => {
    expect(syntaxFunctions.arrayUpdateValues(17)).toBe(17);
    expect(syntaxFunctions.arrayUpdateValues(-2)).toBe(-2);
    expect(syntaxFunctions.arrayUpdateValues(2000000)).toBe(2000000);
    expect(syntaxFunctions.arrayUpdateValues("not a number")).toBe("not a number");
});

// loops
// for

test('Check for loop', () => {
    expect(syntaxFunctions.loopsFor(1)).toBe(6 + " ---> Your number plus 5!");
    expect(syntaxFunctions.loopsFor(10)).toBe(15 + " ---> Your number plus 5!");
    expect(syntaxFunctions.loopsFor("hi")).toBe("Enter a number!");
    expect(syntaxFunctions.loopsFor(false)).toBe("Enter a number!");
});

// for/in
    //Only one test as no parameters entered for this function. 

test('Check for / in loop', () => {
    expect(syntaxFunctions.loopsForIn()).toBe("bilbo baggins lives in the shire and is " + 111 + " years old ");
});


// while

test('Check while loop', () => {
    expect(syntaxFunctions.loopsWhile(-2000)).toBe(10);
    expect(syntaxFunctions.loopsWhile(-1)).toBe(10);
    expect(syntaxFunctions.loopsWhile(0)).toBe(0);
    expect(syntaxFunctions.loopsWhile(123)).toBe(90);
    expect(syntaxFunctions.loopsWhile(10000)).toBe(90);
    expect(syntaxFunctions.loopsWhile("not a number")).toBe("Enter a number!");
});

// do while
    //Only one test as no parameters entered for this function. 

test('Check do / while loop', () => {
    expect(syntaxFunctions.loopsDoWhile()).toBe(4);
});

// forEach (with array and function)
    // Only one test as no parameters entered for this function. Only one array value inside function, was was modified using the forEach method.

test('Check forEach loop', () => {
    expect(syntaxFunctions.loopsForEach()).toEqual([2, 4, 6, 8, 10]);
});

// Objects / Dictionaries
// declare object

test('Check declare object ', () => {
    expect(syntaxFunctions.objectDeclare(1, 2)).toBe("The first property in your new object is " + 1 + ", and the second property is " + 2 + ".");
    expect(syntaxFunctions.objectDeclare("FIRSTPROP", "SECONDPROP")).toBe("The first property in your new object is FIRSTPROP, and the second property is SECONDPROP.");
    expect(syntaxFunctions.objectDeclare(111, "eleventy one")).toBe("The first property in your new object is " + 111 + ", and the second property is eleventy one.");
    
});

// lookup key to retrieve value
    //same test as dictionary / objects 

test('Check object properties return correct values', () => {
    expect(syntaxFunctions.objectLookupKeyRetrieveValue(1)).toBe("one");
    expect(syntaxFunctions.objectLookupKeyRetrieveValue(7)).toBe("seven");
    expect(syntaxFunctions.objectLookupKeyRetrieveValue(-1)).toBe("Enter a number between 1 and 10");
    expect(syntaxFunctions.objectLookupKeyRetrieveValue("oops, not a number...")).toBe("Enter a number between 1 and 10");
});
