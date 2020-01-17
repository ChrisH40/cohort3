
// --- From cohort3/src/03-objects/scripts/cities-api-functions.test.js --- 

import { Community } from './cities.js';
import syncFunctions from './cities-api-functions.js';

global.fetch = require('node-fetch');

const url = 'http://localhost:5000/';

test('test dataSync on pageload working', async () => {

    const test_community = new Community("Test Community");

    const test_cities_list =

        [
            { key: 1, latitude: 60.01, longitude: -115.01, name: "city 1", population: 1000000 },
            { key: 2, latitude: 10.17, longitude: -40.21, name: "city 2", population: 50000 },
            { key: 3, latitude: -48.17, longitude: 48.17, name: "city 3", population: 77812 },
            { key: 4, latitude: 88.91, longitude: 114.56, name: "city 4", population: 1 },
        ];

    let data = await postData(url + 'clear');

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);

    data = await postData(url + 'add', test_cities_list[0]);
    expect(data.status).toEqual(200);

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("city 1");
    expect(test_community.cities).toEqual([]);
    expect(test_community.counter).toBe(0);

    await syncFunctions.dataSync(test_community.cities);
    expect(data.status).toEqual(200);
    expect(test_community.cities[0].key).toBe(1);
});

test('test createCitySync', async () => {

    const test_cities_list =

        [
            { key: 1, latitude: 60.01, longitude: -115.01, name: "city 1", population: 1000000 }
        ];

    let data = await postData(url + 'clear');

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);

    await syncFunctions.createCitySync(test_cities_list[0]);

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("city 1");
});

test('test deleteCitySync', async () => {

    const test_cities_list =

        [
            { key: 1, latitude: 60.01, longitude: -115.01, name: "city 1", population: 1000000 }
        ];

    let data = await postData(url + 'clear');

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);

    data = await postData(url + 'add', test_cities_list[0]);
    expect(data.status).toEqual(200);

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("city 1");
    expect(data[0].key).toBe(1);

    await syncFunctions.deleteCitySync(test_cities_list[0]);

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);
});

test('test populationSync', async () => {

    const test_cities_list =

        [
            { key: 1, latitude: 60.01, longitude: -115.01, name: "city 1", population: 1000000 },
            { key: 2, latitude: 10.17, longitude: -40.21, name: "city 2", population: 50000 },
            { key: 3, latitude: -48.17, longitude: 48.17, name: "city 3", population: 77812 },
            { key: 4, latitude: 88.91, longitude: 114.56, name: "city 4", population: 1 },
        ];

    let data = await postData(url + 'clear');

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(0);

    data = await postData(url + 'add', test_cities_list[0]);
    expect(data.status).toEqual(200);

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].population).toBe(1000000);

    test_cities_list[0].population = 1000100;

    await syncFunctions.populationSync(test_cities_list[0]);

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data[0].population).toBe(1000100);
    expect(data[0].latitude).toBe(60.01);

    data = await postData(url + 'clear');
});

async function postData(url = '', data = {}) {
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
