import { Community } from './cities.js';
import syncFunctions from './cities-api-functions.js';
import domFunctions from './cities-dom.js'

export const communities = new Community("City List");

const cityCreateButton = () => {
    if (idCityLatitudeInput.value >= -90 && idCityLatitudeInput.value <= 90 && idCityLongitudeInput.value >= -180 && idCityLongitudeInput.value <= 180 && idCityPopulationInput.value >= 0) {
        communities.createCity(idCityDisplay, idCityNameInput.value, idCityLatitudeInput.value, idCityLongitudeInput.value, idCityPopulationInput.value);
        cityChecker(communities);
        cityCreateClearFields();
    } else alert("Latitude -90 to 90 degrees. Longitude -180 to 180 degrees. Population equal to or greater than 0. Please re-enter.");
    cityCreateClearFields();
}

const cityCreateClearFields = () => {
    idCityNameInput.value = "";
    idCityLatitudeInput.value = "";
    idCityLongitudeInput.value = "";
    idCityPopulationInput.value = "";
}

const cityButtonSelector = (event) => {
    let cityKey = event.target.parentNode.getAttribute("counter");
    let index = communities.findCity(cityKey);
    if (event.target.textContent == "Moved In") {
        let population_input = Number(event.target.parentNode.children[4].value);
        let population_display = event.target.parentNode.children[3];
        if (population_input > 0) {
            communities.cities[index].movedIn(population_input);
            population_display.textContent = Number(communities.cities[index].population.toFixed(0));
            cityChecker(communities);
        } else alert("Please enter a number greater than zero!");
        event.target.parentNode.children[4].value = "";
    } if (event.target.textContent == "Moved Out") {
        let population_input = Number(event.target.parentNode.children[4].value);
        let population_display = event.target.parentNode.children[3];
        if (population_input <= Number(population_display.textContent)) {
            communities.cities[index].movedOut(population_input);
            population_display.textContent = Number(communities.cities[index].population.toFixed(0));
            cityChecker(communities);
        } else alert("Please enter a number less than current population!");
        event.target.parentNode.children[4].value = "";
    } if (event.target.textContent == "Delete City") {
        communities.deleteCity(cityKey);
        domFunctions.deleteCityCard(event.target);
        cityChecker(communities);
    }
}

const cityInfoSelector = (event) => {
    if (event.target.parentNode == idCityDisplay || event.target.parentNode.parentNode == idCityDisplay) {
        let cityKey = (event.target.parentNode.getAttribute("counter") || event.target.getAttribute("counter"));
        let index = communities.findCity(cityKey);
        let city = communities.cities[index];
        idCityShowInfo.textContent = city.show();
        idCityHowBigInfo.textContent = city.howBig();
        idCityWhichSphere.textContent = communities.whichSphere(city);
    } 
}

const cityChecker = (array) => {
    setTimeout(() => {
        if (array.cities.length > 0) {
            idTotalPopText.textContent = array.getPopulation();
            idMostNorthernText.textContent = array.getMostNorthern();
            idMostSouthernText.textContent = array.getMostSouthern();
        } else if (array.cities.length == 0) {
            idTotalPopText.textContent = "";
            idMostNorthernText.textContent = "";
            idMostSouthernText.textContent = "";
        }
    }, 1000);
}

idCreateCityButton.addEventListener("click", cityCreateButton);
idCityDisplay.addEventListener("click", cityButtonSelector);
window.addEventListener("click", cityInfoSelector);
window.addEventListener("load", syncFunctions.dataSync(communities, idCityDisplay), cityChecker(communities));