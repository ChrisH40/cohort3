// --- From cohort3/src/03-objects/scripts/cities-api-functions.js --- 

import { City } from "./cities.js"

const syncFunctions = {

    async dataSync(array) {
        let data = await syncFunctions.postData(syncFunctions.url + 'all');
        for (let i = 0; i < data.length; i++) {
            let new_city = new City(data[i].key, data[i].name, data[i].latitude, data[i].longitude, data[i].population);
            array.push(new_city);
        }
        return array;
    },

    async createCitySync(city) {
        let data = await syncFunctions.postData(syncFunctions.url + 'add', city);
        data = await syncFunctions.postData(syncFunctions.url + 'all');
        return data;
    },

    async deleteCitySync(city) {
        let data = await syncFunctions.postData(syncFunctions.url + 'delete', city);
        data = await syncFunctions.postData(syncFunctions.url + 'all');
        return data;
    },

    async populationSync(city) {
        let data = await syncFunctions.postData(syncFunctions.url + 'update', city);
        data = await syncFunctions.postData(syncFunctions.url + 'all');
        return data;
    },

    url: 'http://localhost:5000/',

    async postData(url = '', data = {}) {
            const response = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrer: 'no-referrer',
                body: JSON.stringify(data)
            });
            const json = await response.json();
            json.status = response.status;
            json.statusText = response.statusText;
            return json;
    }
}

export default syncFunctions;