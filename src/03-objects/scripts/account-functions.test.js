import {functions} from './account-functions.js';

test('add account test', () => {
    const myDiv = document.createElement("div");
    expect(myDiv.hasChildNodes()).toBe(false);
    functions.createAccount(myDiv);
    expect(myDiv.hasChildNodes()).toBe(true);
    expect(myDiv.childNodes[0].children.length).toEqual(5);
})
