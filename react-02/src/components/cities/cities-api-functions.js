// --- From cohort3/src/03-objects/scripts/cities-api-functions.js --- 

import { City } from "./cities.js"

const syncFunctions = {

    async dataSync(array) {
        try {
            let data = await postData(url + 'all');
            for (let i = 0; i < data.length; i++) {
                let new_city = new City(data[i].key, data[i].name, data[i].latitude, data[i].longitude, data[i].population);
                array.push(new_city);
            }
            return array;
        }
        catch (error) {
            return alert("ALERT: API server not detected! Data will not be synced with server.\n \nAPI server not required but recommended for proper functionality.");
        }
    },

    async createCitySync(city) {
        try {
            let data = await postData(url + 'add', city);
            data = await postData(url + 'all');
            return data;
        }
        catch (error) {
            return alert("ALERT: API server not detected! Data will not be synced with server.\n \nAPI server not required but recommended for proper functionality.");
        }
    },

    async deleteCitySync(city) {
        try {
        let data = await postData(url + 'delete', city);
        data = await postData(url + 'all');
        return data;
        }
        catch (error) {
            return alert("ALERT: API server not detected! Data will not be synced with server.\n \nAPI server not required but recommended for proper functionality.");
        }
    },

    async populationSync(city) {
        try {
        let data = await postData(url + 'update', city);
        data = await postData(url + 'all');
        return data;
        }
        catch (error) {
            return alert("ALERT: API server not detected! Data will not be synced with server.\n \nAPI server not required but recommended for proper functionality.");
        }
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