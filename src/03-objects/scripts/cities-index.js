import { Community } from './cities.js';
import syncFunctions from './cities-api-functions.js';

const communities = new Community("City List");
let counter = 0;

const cityCreateButton = () => {
    counter++;
    communities.createCity(counter, idCityNameInput.value, idCityLatitudeInput.value, idCityLongitudeInput.value, idCityPopulationInput.value);
    syncFunctions.createCitySync(counter, idCityNameInput.value, idCityLatitudeInput.value, idCityLongitudeInput.value, idCityPopulationInput.value);
    cityCreateClearFields();
}

const cityCreateClearFields = () => {
    idCityNameInput.textContent = "";
    idCityLatitudeInput.textContent = "";
    idCityLongitudeInput.textContent = "";
    idCityPopulationInput.textContent = "";
}

idCreateCityButton.addEventListener("click", cityCreateButton);
window.addEventListener("load", syncFunctions.dataSync(communities));

