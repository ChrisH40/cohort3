import { Community } from './cities.js';
import syncFunctions from './cities-api-functions.js';

export const communities = new Community("City List");

const cityCreateButton = () => {
    communities.createCity(idCityNameInput.value, idCityLatitudeInput.value, idCityLongitudeInput.value, idCityPopulationInput.value);
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

