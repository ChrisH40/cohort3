import functions from './account-functions.js';

test('add account test', () => {
    const myDiv = document.createElement("div");
    expect(myDiv.hasChildNodes()).toBe(false);
    functions.createAccountDiv(myDiv, "Test Account Name", 100);
    expect(myDiv.hasChildNodes()).toBe(true);
    expect(myDiv.childNodes[0].children.length).toEqual(7);
    expect(myDiv.childNodes[0].hasAttribute("id", "id-Test-Account-Name")).toEqual(true);
    expect(myDiv.childNodes[0].children[0].getAttribute("class")).toEqual("account-name");
    expect(myDiv.childNodes[0].children[2].getAttribute("class")).toEqual("account-balance");
    expect(myDiv.childNodes[0].children[3].getAttribute("id")).toEqual("id-Test-Account-Name-input");
});

