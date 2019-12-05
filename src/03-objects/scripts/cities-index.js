import { Community } from './cities.js';
import syncFunctions from './cities-api-functions.js';
import domFunctions from './cities-dom.js'

export const communities = new Community("City List");

const cityCreateButton = () => {
    let array = communities.cities;
    if (idCityLatitudeInput.value >= -90 && idCityLatitudeInput.value <= 90 && idCityLongitudeInput.value >= -180 && idCityLongitudeInput.value <= 180 && idCityPopulationInput.value >= 0) {
        const new_city = communities.createCity(idCityNameInput.value, idCityLatitudeInput.value, idCityLongitudeInput.value, idCityPopulationInput.value);
        syncFunctions.createCitySync(new_city);
        domFunctions.createCityDiv(idCityDisplay, new_city);
        cityChecker(array);
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
    let array = communities.cities;
    let cityKey = event.target.parentNode.getAttribute("counter");
    let index = communities.findCity(array, cityKey);

    if (event.target.textContent == "Moved In") {
        let population_input = Number(event.target.parentNode.children[4].value);
        let population_display = event.target.parentNode.children[3];
        if (population_input > 0) {
            array[index].movedIn(population_input);
            syncFunctions.populationSync(array[index]);
            population_display.textContent = Number(array[index].population.toFixed(0));
            cityChecker(array);
        } else alert("Please enter a number greater than zero!");
        event.target.parentNode.children[4].value = "";

    } if (event.target.textContent == "Moved Out") {
        let population_input = Number(event.target.parentNode.children[4].value);
        let population_display = event.target.parentNode.children[3];
        if (population_input <= Number(population_display.textContent)) {
            array[index].movedOut(population_input);
            syncFunctions.populationSync(array[index]);
            population_display.textContent = Number(array[index].population.toFixed(0));
            cityChecker(array);
        } else alert("Please enter a number less than current population!");
        event.target.parentNode.children[4].value = "";

    } if (event.target.textContent == "Delete City") {
        communities.deleteCity(array, index);
        syncFunctions.deleteCitySync(array[index]);
        domFunctions.deleteCityCard(event.target);
        cityChecker(array);
    }
    else return;
}

const cityInfoSelector = (event) => {
    if (event.target.parentNode == idCityDisplay || event.target.parentNode.parentNode == idCityDisplay) {
        let array = communities.cities;
        let cityKey = (event.target.parentNode.getAttribute("counter") || event.target.getAttribute("counter"));
        let index = communities.findCity(array, cityKey);
        let city = array[index];
        idCityShowInfo.textContent = city.show(city);
        idCityHowBigInfo.textContent = city.howBig(city);
        idCityWhichSphere.textContent = communities.whichSphere(city);
    } 
    else return;
}

const cityChecker = (array) => {
    setTimeout(() => {
        if (array.length > 0) {
            idTotalPopText.textContent = communities.getPopulation(array);
            idMostNorthernText.textContent = communities.getMostNorthern(array);
            idMostSouthernText.textContent = communities.getMostSouthern(array);
        } else if (array.length == 0) {
            idTotalPopText.textContent = "";
            idMostNorthernText.textContent = "";
            idMostSouthernText.textContent = "";
        }
        else return;
    }, 1000);
}

idCreateCityButton.addEventListener("click", cityCreateButton);
idCityDisplay.addEventListener("click", cityButtonSelector);
window.addEventListener("click", cityInfoSelector);
window.addEventListener("load", syncFunctions.dataSync(communities, idCityDisplay), cityChecker(communities.cities));