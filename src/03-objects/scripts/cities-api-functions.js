
const syncFunctions = {

    async dataSync(array) {
        let data = await postData(url + 'all');
        for (let i = 0; i < data.length; i++) {
            array.cities.push(data[i]);
        }
        syncFunctions.counterSync(array);
        return array;
    },

    counterSync(array) {
        let arrayKeys = array.cities.map(a => a.key);
        if (arrayKeys.length > 0) {
            let highestKey = Math.max(...arrayKeys);
            array.counter = highestKey;
        } else array.counter = 0;
    },

    async createCitySync(city) {
        let data = await postData(url + 'add', city);
        data = await postData(url + 'all');
        return data;
    },

    async deleteCitySync(key) {
        let data = await postData(url + 'delete', { key: Number(key) });
        data = await postData(url + 'all');
        return data;
    },

    async populationSync(key, population) {
        let data = await postData(url + 'update', { key: Number(key), population: Number(population) });
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