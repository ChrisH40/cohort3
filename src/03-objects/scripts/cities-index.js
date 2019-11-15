import { Community } from './cities.js';
import syncFunctions from './cities-api-functions.js';
import domFunctions from './cities-dom.js'

export const communities = new Community("City List");

const cityCreateButton = () => {
    communities.createCity(idCityDisplay, idCityNameInput.value, idCityLatitudeInput.value, idCityLongitudeInput.value, idCityPopulationInput.value);
    cityCreateClearFields();
}

const cityButtonSelector = (event) => {
    if (event.target.textContent == "Moved In") {
        let cityKey = event.target.parentNode.getAttribute("counter");
        let index = communities.findCity(cityKey);
        let input = Number(event.target.parentNode.children[4].value);
        communities.cities[index].movedIn(input);
        let population = event.target.parentNode.children[3];
        population.textContent = Number(communities.cities[index].population.toFixed(0));
        // balanceChecker();
        event.target.parentNode.children[4].value = "";
    } if (event.target.textContent == "Moved Out") {
        let cityKey = event.target.parentNode.getAttribute("counter");
        let index = communities.findCity(cityKey);
        let input = Number(event.target.parentNode.children[4].value);
        communities.cities[index].movedOut(input);
        let population = event.target.parentNode.children[3];
        population.textContent = Number(communities.cities[index].population.toFixed(0));
        // balanceChecker();
        event.target.parentNode.children[4].value = "";
    } if (event.target.textContent == "Delete City") {
        let cityKey = event.target.parentNode.getAttribute("counter");
        communities.deleteCity(cityKey);
        domFunctions.deleteCityCard(event.target);
        // balanceChecker();
    }
}

const cityCreateClearFields = () => {
    idCityNameInput.value = "";
    idCityLatitudeInput.value = "";
    idCityLongitudeInput.value = "";
    idCityPopulationInput.value = "";
}

idCreateCityButton.addEventListener("click", cityCreateButton);
idCityDisplay.addEventListener("click", cityButtonSelector);
window.addEventListener("load", syncFunctions.dataSync(communities));