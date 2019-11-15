import syncFunctions from "./cities-api-functions.js";
import domFunctions from "./cities-dom.js";

export class City {

    constructor(key, name, latitude, longitude, population) {
        this.key = Number(key);
        this.name = name;
        this.latitude = Number(latitude);
        this.longitude = Number(longitude);
        this.population = Number(population);
    }

    show() {
        return `${this.name} is located at ${this.latitude} latitude, ${this.longitude} longitude and has a population of ${this.population} people.`
    }

    movedIn(amount) {
        this.population = this.population + amount;
        syncFunctions.populationSync(this);
        return this.population;
    }

    movedOut(amount) {
        this.population = this.population - amount;
        syncFunctions.populationSync(this);
        return this.population;
    }

    howBig() {
        if (this.population > 100000) {
            return `${this.name} is a City with a population > 100,000 people.`
        } else if (this.population >= 20000 && this.population <= 100000) {
            return `${this.name} is a Large Town with a population of 20,000 to 100,000 people.`
        } else if (this.population >= 1000 && this.population <= 19999) {
            return `${this.name} is a Town with a population of 1,000 to 20,000 people.`
        } else if (this.population > 100 && this.population < 1000) {
            return `${this.name} is a Village, larger than a Hamlet but smaller than a Town.`
        } else return `${this.name} is a Hamlet with population of 1 to 100 people.`
    }
};

export class Community {

    constructor(community_name) {
        this.community_name = community_name;
        this.cities = [];
        this.counter = 0;
    }

    whichSphere(city) {
        if (city.latitude > 0) {
            return `${city.name} is located in the Northern Hemisphere.`
        } else if (city.latitude < 0) {
            return `${city.name} is located in the Southern Hemisphere.`
        } else return `${city.name} is located right on the Equator!`
    }

    getMostNorthern() {
        let array = this.cities;
        let latitude_array = array.map(a => a.latitude);
        let most_northern = Math.max(...latitude_array);
        let searchedLatitude = (lat) => {
            return lat == most_northern;
        }
        let keyElement = latitude_array.findIndex(searchedLatitude);
        return array[keyElement].name;
    }

    getMostSouthern() {
        let array = this.cities;
        let latitude_array = array.map(a => a.latitude);
        let most_southern = Math.min(...latitude_array);
        let searchedLatitude = (lat) => {
            return lat == most_southern;
        }
        let keyElement = latitude_array.findIndex(searchedLatitude);
        return array[keyElement].name;
    }

    getPopulation() {
        const array = this.cities;
        const city_populations = array.map(array => array.population);
        const total_populations = city_populations.reduce((sum, num) => sum + num);
        return total_populations;
    }

    createCity(parent, name, latitude, longitude, population) {
        this.counter++
        let new_city = new City(this.counter, name, latitude, longitude, population);
        this.cities.push(new_city);
        syncFunctions.createCitySync(new_city);
        domFunctions.createCityDiv(parent, new_city);
        return new_city;
    }

    deleteCity(search) {
        let array = this.cities;
        let id_array = array.map(a => a.key);
        let searchedID = (id) => {
            return id == search; 
        }
        let keyElement = id_array.findIndex(searchedID);
        syncFunctions.deleteCitySync(search);
        array.splice(keyElement, 1);
        return array;
    }

    findCity(key) {
        let array = this.cities;
        let IDArray = array.map(a => a.key);
        let searchedID = (ID) => {
            return ID == key;
        }
        let keyElement = IDArray.findIndex(searchedID);
        return keyElement;
    }
};