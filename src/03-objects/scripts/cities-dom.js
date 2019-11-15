
const domFunctions = {

    createCityDiv: (parent, city) => {
        const cityNameNoSpace = String(city.name).replace(/\s/g, "-");
        const newCity = document.createElement("div");
        newCity.id = `id-${city.name}`.toLowerCase();
        newCity.setAttribute("class", "city-card");
        newCity.setAttribute("counter", city.key);
        newCity.setAttribute("tabindex", city.key);
        parent.appendChild(newCity);
        const newCityName = document.createElement("span");
        newCityName.setAttribute("class", "city-name");
        newCityName.textContent = city.name;
        newCity.appendChild(newCityName);
        const newCityLat = document.createElement("span");
        newCityLat.setAttribute("class", "city-latitude");
        newCityLat.textContent = Number(city.latitude).toFixed(2);
        newCity.appendChild(newCityLat);
        const newCityLong = document.createElement("span");
        newCityLong.setAttribute("class", "city-longitude");
        newCityLong.textContent = Number(city.longitude).toFixed(2);
        newCity.appendChild(newCityLong);
        const newCityPop = document.createElement("span");
        newCityPop.setAttribute("class", "city-population");
        newCityPop.textContent = Number(city.population).toFixed(0);
        newCity.appendChild(newCityPop);
        const newInput = document.createElement("input");
        newInput.type = "number";
        newInput.id = `id-${cityNameNoSpace}-input`.toLowerCase();
        newInput.setAttribute("class", "city-population-input");
        newCity.appendChild(newInput);
        const newCityPopMovedIn = document.createElement("button");
        newCityPopMovedIn.textContent = "Moved In";
        newCityPopMovedIn.id = `id-${cityNameNoSpace}-movedin-button`.toLowerCase();
        newCityPopMovedIn.setAttribute("class", "movedin-button city-button");
        newCity.appendChild(newCityPopMovedIn);
        const newCityPopMovedOut = document.createElement("button");
        newCityPopMovedOut.textContent = "Moved Out";
        newCityPopMovedOut.id = `id-${cityNameNoSpace}-movedout-button`.toLowerCase();
        newCityPopMovedOut.setAttribute("class", "movedout-button city-button");
        newCity.appendChild(newCityPopMovedOut);
        const newCityDeleteButton = document.createElement("button");
        newCityDeleteButton.textContent = "Delete City";
        newCityDeleteButton.id = `id-${cityNameNoSpace}-delete-button`.toLowerCase();
        newCityDeleteButton.setAttribute("class","delete-button city-button");
        newCity.appendChild(newCityDeleteButton);
    },

    deleteCityCard: (button) => {
        return button.parentNode.parentNode.removeChild(button.parentNode);
    }  
}

export default domFunctions;