import dictionaryFunctions from './dictionaries.js'

// ----- Working With Dictionaries Tests ------

test('Does the object lookup function work?', () => {
    expect(dictionaryFunctions.objectLookupFunction("ab")).toBe("Alberta");
    expect(dictionaryFunctions.objectLookupFunction("AB")).toBe("Alberta");
    expect(dictionaryFunctions.objectLookupFunction("NS")).toBe("Nova Scotia");
    expect(dictionaryFunctions.objectLookupFunction("na")).toBe("Please enter a valid provincial/territorial abbreviation.");
});
