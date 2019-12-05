// --- From cohort3/src/03-objects/scripts/cities-api-functions.js --- 

import { City } from "./cities.js"
// import domFunctions from './cities-dom.js';

const syncFunctions = {

    async dataSync(array, /*parent*/) {
        let data = await postData(url + 'all');
        for (let i = 0; i < data.length; i++) {
            let new_city = new City(data[i].key, data[i].name, data[i].latitude, data[i].longitude, data[i].population);
            array.cities.push(new_city);
        } syncFunctions.counterSync(array);
        // syncFunctions.domSync(array, parent);  // --- re-factor this code (from original cities-api-functions.js file)?
        return array;
    },

    counterSync(array) {
        let arrayKeys = array.cities.map(city => city.key);
        if (arrayKeys.length > 0) {
            let highestKey = Math.max(...arrayKeys);
            array.counter = highestKey;
        } else array.counter = 0;
    },

    // domSync(array, parent) {
    //     array.cities.forEach(city => {
    //         domFunctions.createCityDiv(parent, city);
    //     })
    // },

    async createCitySync(city) {
        let data = await postData(url + 'add', city);
        data = await postData(url + 'all');
        return data;
    },

    async deleteCitySync(key) {
        let data = await postData(url + 'all');
        let array = data;
        let id_array = array.map(a => a.key);
        let searchedID = (id) => {
            // eslint-disable-next-line
            return id == key;
        }
        let keyElement = id_array.findIndex(searchedID);
        data = await postData(url + 'delete', array[keyElement]);
        data = await postData(url + 'all');
        return data;
    },

    async populationSync(city) {
        let data = await postData(url + 'update', city);
        data = await postData(url + 'all');
        return data;
    }
}

const url = 'http://localhost:5000/';

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST',     // *GET, POST, PUT, DELETE, etc.
        mode: 'cors',       // no-cors, *cors, same-origin
        cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',         // manual, *follow, error
        referrer: 'no-referrer',    // no-referrer, *client
        body: JSON.stringify(data)  // body data type must match "Content-Type" header
    });

    const json = await response.json();    // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;
    // console.log(json, typeof(json));
    return json;
}

export default syncFunctions;