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

const cityButtonSelector = (event) => {
    if (event.target.textContent == "Moved In") {
        let cityKey = event.target.parentNode.getAttribute("counter");
        let index = communities.findCity(cityKey);
        let city = Number(event.target.parentNode.children[4].value);
        communities.cities[index].movedIn(city);
        let population = event.target.parentNode.children[3];
        population.textContent = Number(communities.cities[index].population.toFixed(0));
        cityChecker(communities);
        event.target.parentNode.children[4].value = "";
    } if (event.target.textContent == "Moved Out") {
        let cityKey = event.target.parentNode.getAttribute("counter");
        let index = communities.findCity(cityKey);
        let city = Number(event.target.parentNode.children[4].value);
        communities.cities[index].movedOut(city);
        let population = event.target.parentNode.children[3];
        population.textContent = Number(communities.cities[index].population.toFixed(0));
        cityChecker(communities);
        event.target.parentNode.children[4].value = "";
    } if (event.target.textContent == "Delete City") {
        let cityKey = event.target.parentNode.getAttribute("counter");
        communities.deleteCity(cityKey);
        domFunctions.deleteCityCard(event.target);
        cityChecker(communities);
    }
}

const cityInfoSelector = (event) => {
    let cityKey = (event.target.getAttribute("counter") || event.target.parentNode.getAttribute("counter"));
    let index = communities.findCity(cityKey);
    idCityShowInfo.textContent = communities.cities[index].show();
    idCityHowBigInfo.textContent = communities.cities[index].howBig();
    idCityWhichSphere.textContent = communities.whichSphere(communities.cities[index]);
}

const cityChecker = (array) => {
    setTimeout(() => {
    idTotalPopText.textContent = array.getPopulation();
    idMostNorthernText.textContent = array.getMostNorthern();
    idMostSouthernText.textContent = array.getMostSouthern();
    }, 1000);
}

const cityCreateClearFields = () => {
    idCityNameInput.value = "";
    idCityLatitudeInput.value = "";
    idCityLongitudeInput.value = "";
    idCityPopulationInput.value = "";
}

idCreateCityButton.addEventListener("click", cityCreateButton);
idCityDisplay.addEventListener("click", cityButtonSelector);
idCityDisplay.addEventListener("click", cityInfoSelector);
window.addEventListener("load", syncFunctions.dataSync(communities, idCityDisplay), cityChecker(communities));