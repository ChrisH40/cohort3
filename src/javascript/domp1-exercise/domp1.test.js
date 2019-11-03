import functions from './domp1.js';

test('test addCard', () => {
    const divElement = document.createElement('div');
    functions.addCard(divElement, 1);
});

test('test whatCard', () => {
    const divElement = document.createElement('div');
    functions.addCard(divElement, 1);
    functions.addCard(divElement, 2);
    functions.addCard(divElement, 3);
    expect(functions.whatCards(divElement)).toEqual([1,2,3]);
    functions.addCard(divElement, 4);
    expect(functions.whatCards(divElement)).toEqual([1,2,3]);
});