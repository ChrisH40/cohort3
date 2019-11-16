import { City, Community } from './cities.js';

test('test show City', () => {
    const test_city = new City(1, "Test City", 60.01, -115.01, 1000000);
    expect(test_city.show()).
        toBe("- Test City is located at 60.01 latitude, -115.01 longitude and has a population of 1000000 people.");
});

test('test movedIn and movedOut', () => {
    const test_city = new City(1, "Test City", 60.01, -115.01, 1000000);
    expect(test_city.movedIn(1)).toEqual(1000001);
    expect(test_city.movedOut(1)).toEqual(1000000);
    expect(test_city.movedIn(100)).toEqual(1000100);
    expect(test_city.movedIn(25704)).toEqual(1025804);
    expect(test_city.movedOut(100)).toEqual(1025704);
    expect(test_city.movedOut(25704)).toEqual(1000000);
});

test('test howBig', () => {
    const test_city = new City(1, "Test City", 60.01, -115.01, 1000000);
    expect(test_city.howBig()).toBe("- Test City is a City with a population > 100,000 people.");
    test_city.population = 50000;
    expect(test_city.howBig()).toBe("- Test City is a Large Town with a population of 20,000 to 100,000 people.");
    test_city.population = 15000;
    expect(test_city.howBig()).toBe("- Test City is a Town with a population of 1,000 to 20,000 people.");
    test_city.population = 101;
    expect(test_city.howBig()).toBe("- Test City is a Village, larger than a Hamlet but smaller than a Town.");
    test_city.population = 1;
    expect(test_city.howBig()).toBe("- Test City is a Hamlet with population of 1 to 100 people.");
});

test('test whichSphere', () => {
    const test_city = new City(1, "Test City", 60.01, -115.01, 1000000);
    const test_community = new Community("Test Community");
    test_city.latitude = 60.01;
    expect(test_community.whichSphere(test_city)).toBe("- Test City is located in the Northern Hemisphere.");
    test_city.latitude = -27.89;
    expect(test_community.whichSphere(test_city)).toBe("- Test City is located in the Southern Hemisphere.");
    test_city.latitude = 0.00;
    expect(test_community.whichSphere(test_city)).toBe("- Test City is located right on the Equator!");
});

test('test mostNorthern and mostSouthern', () => {
    const test_community = new Community("Test Community");
    const myDiv = document.createElement("div");
    test_community.createCity(myDiv, "city 1", 60.01, -115.01, 1000000);
    test_community.createCity(myDiv, "city 2", 10.17, -40.21, 50000);
    expect(test_community.getMostNorthern()).toBe("city 1");
    expect(test_community.getMostSouthern()).toBe("city 2");
    test_community.createCity(myDiv, "city 3", -48.17, 48.17, 77812);
    test_community.createCity(myDiv, "city 4", 88.91, 114.56, 1);
    expect(test_community.getMostNorthern()).toBe("city 4");
    expect(test_community.getMostSouthern()).toBe("city 3");
});

test('test getPopulation total for all cities', () => {
    const test_community = new Community("Test Community");
    const myDiv = document.createElement("div");
    test_community.createCity(myDiv, "city 1", 60.01, -115.01, 1000000);
    test_community.createCity(myDiv, "city 2", 10.17, -40.21, 50000);
    test_community.createCity(myDiv, "city 3", -48.17, 48.17, 77812);
    test_community.createCity(myDiv, "city 4", 88.91, 114.56, 1);
    expect(test_community.getPopulation()).toBe(1127813);
});

test('test deleteCity', () => {
    const test_community = new Community("Test Community");
    const myDiv = document.createElement("div");
    test_community.createCity(myDiv, "new city 1", 60.01, -115.01, 1000000);
    test_community.createCity(myDiv, "new city 2", 10.17, -40.21, 50000);
    test_community.createCity(myDiv, "new city 3", -48.17, 48.17, 77812);
    test_community.createCity(myDiv, "new city 4", 88.91, 114.56, 1);
    expect(test_community.cities).toEqual(
        [
            { "key": 1, "latitude": 60.01, "longitude": -115.01, "name": "new city 1", "population": 1000000 },
            { "key": 2, "latitude": 10.17, "longitude": -40.21, "name": "new city 2", "population": 50000 },
            { "key": 3, "latitude": -48.17, "longitude": 48.17, "name": "new city 3", "population": 77812 },
            { "key": 4, "latitude": 88.91, "longitude": 114.56, "name": "new city 4", "population": 1 }
        ]
    );
    expect(test_community.deleteCity(3))
        .toEqual(
            [
                { "key": 1, "latitude": 60.01, "longitude": -115.01, "name": "new city 1", "population": 1000000 },
                { "key": 2, "latitude": 10.17, "longitude": -40.21, "name": "new city 2", "population": 50000 },
                { "key": 4, "latitude": 88.91, "longitude": 114.56, "name": "new city 4", "population": 1 }
            ]
        );
});

test('test create City', () => {
    const test_community = new Community("Test Community");
    const myDiv = document.createElement("div");
    expect(test_community).toEqual({ "cities": [], "community_name": "Test Community", "counter": 0 });
    test_community.createCity(myDiv, "Test City", 60.01, -115.01, 1000000);
    expect(test_community.cities).
        toEqual(
            [
                { "key": 1, "latitude": 60.01, "longitude": -115.01, "name": "Test City", "population": 1000000 }
            ]
        );
});

test('test findAccount key to array index', () => {
    const test_community = new Community("Test Community");
    const myDiv = document.createElement("div");
    test_community.createCity(myDiv, "new city 1", 60.01, -115.01, 1000000);
    test_community.createCity(myDiv, "new city 2", 10.17, -40.21, 50000);
    test_community.createCity(myDiv, "new city 3", -48.17, 48.17, 77812);
    test_community.createCity(myDiv, "new city 4", 88.91, 114.56, 1);
    expect(test_community.findCity(2)).toBe(1);
});

// --- Comp 130E Test ---

test('test createCity for Comp 130E', () => {
    const test_community = new Community("Test Community");
    const myDiv = document.createElement("div");
    const myCity = test_community.createCity(myDiv, "Test City", 60.01, -115.01, 1000000);
    const myFav = myCity;
    expect(myCity.population).toBe(1000000);
    expect(myFav.population).toBe(1000000);
    myFav.population = 2000000;
    expect(myCity.population).toBe(2000000);
    expect(myFav.population).toBe(2000000);

    // As a result of myFav's population being changed, myCity's population changed. 
    // This is because myFav is not its own variable but a reference to the data in the myCity variable (which is a reference itself).

    
});
