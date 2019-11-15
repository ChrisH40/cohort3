import domFunctions from './cities-dom.js';

const test_city = { key: 1, latitude: 60.01, longitude: -115.01, name: "test city", population: 1000000 };
           
test('test createCityDiv', () => {
    const myDiv = document.createElement("div");
    expect(myDiv.hasChildNodes()).toBe(false);
    domFunctions.createCityDiv(myDiv, test_city);
    expect(myDiv.hasChildNodes()).toBe(true);
    expect(myDiv.childNodes[0].children.length).toEqual(8);
    expect(myDiv.childNodes[0].hasAttribute("id", "id-test-city")).toEqual(true);
    expect(myDiv.childNodes[0].children[0].getAttribute("class")).toEqual("city-name");
    expect(myDiv.childNodes[0].children[2].getAttribute("class")).toEqual("city-longitude");
    expect(myDiv.childNodes[0].children[3].textContent).toEqual("1000000");
});

test('test deleteCityCard', () => {
    const grandParent = document.createElement("div");
    const parent = document.createElement("div");
    const button = document.createElement("div");
    parent.appendChild(button);
    grandParent.appendChild(parent);
    expect(String(grandParent.childNodes[0])).toEqual("[object HTMLDivElement]");
    domFunctions.deleteCityCard(button);
    expect(grandParent.childNodes[0]).toEqual(undefined);
});