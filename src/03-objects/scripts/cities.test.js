import { City, Community } from './cities.js';

const test_city = new City(1, "Test City", 60.01, -115.01, 1000000);

test('test show City', () => {
    expect(test_city.show()).
        toBe("Test City is located at 60.01 latitude and -115.01 longitude and has a population of 1000000 people.");
});

test('test movedIn', () => {
    test_city.population = 1000000;
    expect(test_city.movedIn(1)).toEqual(1000001);
    expect(test_city.movedIn(100)).toEqual(1000101);
    expect(test_city.movedIn(25704)).toEqual(1025805);
});

test('test movedOut', () => {
    test_city.population = 1000000;
    expect(test_city.movedOut(1)).toEqual(999999);
    expect(test_city.movedOut(100)).toEqual(999899);
    expect(test_city.movedOut(25704)).toEqual(974195);
});

test('test howBig', () => {
    test_city.population = 1000000;
    expect(test_city.howBig()).toBe("City – a population > 100,000");
    test_city.population = 50000;
    expect(test_city.howBig()).toBe("Large town – a large town has a population of 20,000 to 100,000");
    test_city.population = 15000;
    expect(test_city.howBig()).toBe("Town – a town has a population of 1,000 to 20,000");
    test_city.population = 101;
    expect(test_city.howBig()).toBe("Village – larger than a hamlet but smaller than a town");
    test_city.population = 1;
    expect(test_city.howBig()).toBe("Hamlet – population 1 - 100");
});

test('test whichSphere', () => {
    const test_community = new Community(1, "Test Community List");
    test_city.latitude = 60.01;
    expect(test_community.whichSphere(test_city)).toBe("Northern Hemisphere");
    test_city.latitude = -27.89;
    expect(test_community.whichSphere(test_city)).toBe("Southern Hemisphere");
    test_city.latitude = 0.00;
    expect(test_community.whichSphere(test_city)).toBe("Right on the Equator!");
});

test('test mostNorthern', () => {
    const test_community = new Community(1, "Test Community List");
    test_community.createCity(1, "new city 1", 60.01, -115.01, 1000000);
    test_community.createCity(2, "new city 2", 10.17, -40.21, 50000);
    test_community.createCity(3, "new city 3", -48.17, 48.17, 77812);
    test_community.createCity(4, "new city 4", 88.91, 114.56, 1);
    expect(test_community.getMostNorthern()).toBe("new city 4");
});

test('test mostSouthern', () => {
    const test_community = new Community(1, "Test Community List");
    test_community.createCity(1, "new city 1", 60.01, -115.01, 1000000);
    test_community.createCity(2, "new city 2", 10.17, -40.21, 50000);
    test_community.createCity(3, "new city 3", -48.17, 48.17, 77812);
    test_community.createCity(4, "new city 4", 88.91, 114.56, 1);
    expect(test_community.getMostSouthern()).toBe("new city 3");
});

test('test getPopulation total for all cities', () => {
    const test_community = new Community(1, "Test Community List");
    test_community.createCity(1, "new city 1", 60.01, -115.01, 1000000);
    test_community.createCity(2, "new city 2", 10.17, -40.21, 50000);
    test_community.createCity(3, "new city 3", -48.17, 48.17, 77812);
    test_community.createCity(4, "new city 4", 88.91, 114.56, 1);
    expect(test_community.getPopulation()).toBe(1127813);
});

test('test deleteCity', () => {
    const test_community = new Community(1, "Test Community List");
    test_community.createCity(1, "new city 1", 60.01, -115.01, 1000000);
    test_community.createCity(2, "new city 2", 10.17, -40.21, 50000);
    test_community.createCity(3, "new city 3", -48.17, 48.17, 77812);
    test_community.createCity(4, "new city 4", 88.91, 114.56, 1);
    expect(test_community.deleteCity(3))
        .toEqual(
            [
                { "city_id": 1, "latitude": 60.01, "longitude": -115.01, "name": "new city 1", "population": 1000000 },
                { "city_id": 2, "latitude": 10.17, "longitude": -40.21, "name": "new city 2", "population": 50000 },
                { "city_id": 4, "latitude": 88.91, "longitude": 114.56, "name": "new city 4", "population": 1 }
            ]
        );
});

test('test create City', () => {
    const test_community = new Community(1, "Test Community List");
    expect(test_community).toEqual({ "community_id": 1, "community_list": [], "community_name": "Test Community List" });
    test_community.createCity(1, "Test City", 60.01, -115.01, 1000000);
    expect(test_community.community_list).
        toEqual(
            [
                { "city_id": 1, "latitude": 60.01, "longitude": -115.01, "name": "Test City", "population": 1000000 }
            ]
        );
});
