import { Community } from './cities.js';
import syncFunctions from './cities-api-functions.js';

global.fetch = require('node-fetch');

/*
    These are destructive tests. The URL will have its data
    blown away.

    These tests were created to give a fairly comprehensive example
    on how to interact with an API. It does the full CRUD. Comments
    are appreciated.
*/

const url = 'http://localhost:5000/';

test('test fetch working', async () => {

    const test_cities_list =

        [
            { key: 1, latitude: 60.01, longitude: -115.01, name: "city 1", population: 1000000 },
            { key: 2, latitude: 10.17, longitude: -40.21, name: "city 2", population: 50000 },
            { key: 3, latitude: -48.17, longitude: 48.17, name: "city 3", population: 77812 },
            { key: 4, latitude: 88.91, longitude: 114.56, name: "city 4", population: 1 },
        ];

    // Check that the server is running and clear any data
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

    // add a second with the same index which should be an error
    data = await postData(url + 'add', test_cities_list[0]);
    expect(data.status).toEqual(400);

    // add a second with different index which should be ok
    data = await postData(url + 'add', test_cities_list[1]);
    expect(data.status).toEqual(200);

    data = await postData(url + 'all');
    expect(data.status).toEqual(200);
    expect(data.length).toBe(2);
    expect(data[1].name).toBe("city 2");

    data = await postData(url + 'read', { key: 1 });
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("city 1");

    data = await postData(url + 'update', { key: 1, name: "updated city 1" });
    expect(data.status).toEqual(200);

    data = await postData(url + 'read', { key: 1 });
    expect(data.status).toEqual(200);
    expect(data.length).toBe(1);
    expect(data[0].name).toBe("updated city 1");

    data = await postData(url + 'delete', { key: 1 });
    expect(data.status).toEqual(200);

    data = await postData(url + 'read', { key: 1 });
    expect(data.status).toEqual(400);
});

test('test dataSync counterSync domSync on pageload working', async () => {

    const test_community = new Community("Test Community");

    const test_cities_list =

        [
            { key: 1, latitude: 60.01, longitude: -115.01, name: "city 1", population: 1000000 },
            { key: 2, latitude: 10.17, longitude: -40.21, name: "city 2", population: 50000 },
            { key: 3, latitude: -48.17, longitude: 48.17, name: "city 3", population: 77812 },
            { key: 4, latitude: 88.91, longitude: 114.56, name: "city 4", population: 1 },
        ];

    const myDiv = document.createElement("div");

    // Check that the server is running and clear any data
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
    expect(myDiv.hasChildNodes()).toBe(false);

    await syncFunctions.dataSync(test_community, myDiv);
    expect(data.status).toEqual(200);
    expect(test_community.cities[0].key).toBe(1);
    expect(test_community.counter).toBe(1);
    expect(myDiv.hasChildNodes()).toBe(true);
});

test('test createCitySync', async () => {

    const test_cities_list =

        [
            { key: 1, latitude: 60.01, longitude: -115.01, name: "city 1", population: 1000000 }
        ];

    // Check that the server is running and clear any data
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

    // Check that the server is running and clear any data
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

    await syncFunctions.deleteCitySync(1);

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

    // Check that the server is running and clear any data
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
});

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
