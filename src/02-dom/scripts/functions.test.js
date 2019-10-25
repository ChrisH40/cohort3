import cardFunctions from './functions.js'

test('test createCard', () => {
    const divTest = document.createElement('div');
    expect(divTest.hasChildNodes()).toBe(false);
    expect(cardFunctions.createCard(divTest, 0)).toBe(1);
    expect(divTest.hasChildNodes()).toBe(true);
    expect(cardFunctions.createCard(divTest, 1)).toBe(2);
    expect(divTest.hasChildNodes()).toBe(true);
    expect(cardFunctions.createCard(divTest, 10)).toBe(11);
    expect(divTest.hasChildNodes()).toBe(true);
});