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

test('test deleteAccountCard', () => {
    const grandParent = document.createElement("div");
    const parent = document.createElement("div");
    const button = document.createElement("div");
    parent.appendChild(button);
    grandParent.appendChild(parent);
    expect(String(grandParent.childNodes[0])).toEqual("[object HTMLDivElement]");
    console.log(button);
    functions.deleteAccountCard(button);
    expect(grandParent.childNodes[0]).toEqual(undefined);
});

