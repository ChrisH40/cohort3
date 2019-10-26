import cardFunctions from './functions.js'

test('test createCard', () => {
    const container = document.createElement("body");
    expect(container.hasChildNodes()).toBe(false); 
    container.append(cardFunctions.createCard(0));
    expect(container.hasChildNodes()).toBe(true);
});

test('test cardCounter', () => {
    expect(cardFunctions.cardCounter(0)).toBe(1);
    expect(cardFunctions.cardCounter(1)).toBe(2);
    expect(cardFunctions.cardCounter(10)).toBe(11);
});

test('test addCardBefore', () => {
    const container = document.createElement("body");
    const divTest = document.createElement("div");
    container.appendChild(divTest);
    expect(container.childNodes[0]).toBe(divTest);
    cardFunctions.addCardBefore(container, divTest);
    expect(container.childNodes[1]).toBe(divTest);
});

test('test addCardAfter', () => {
    const container = document.createElement("body");
    const divTest = document.createElement("div");
    const divTestSib = document.createElement("div");
    container.appendChild(divTest);
    container.appendChild(divTestSib);
    expect(container.childNodes[0]).toBe(divTest);
    expect(container.childNodes[1]).toBe(divTestSib);
    cardFunctions.addCardAfter(container, divTest);
    expect(container.childNodes[0]).toBe(divTest);
    expect(container.childNodes[2]).toBe(divTestSib);
});

test('test deleteCard', () => {
    const container = document.createElement("body");
    const divTest = document.createElement("div");
    container.appendChild(divTest);
    expect(container.hasChildNodes()).toBe(true);
    cardFunctions.deleteCard(container, divTest);
    expect(container.hasChildNodes()).toBe(false);
});