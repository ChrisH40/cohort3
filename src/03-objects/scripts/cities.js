
export class City {

    constructor(key, name, latitude, longitude, population) {
        this.key = Number(key);
        this.name = name;
        this.latitude = Number(latitude);
        this.longitude = Number(longitude);
        this.population = Number(population);
    }

    show() {
        return `${this.name} is located at ${this.latitude} latitude and ${this.longitude} longitude and has a population of ${this.population} people.`
    }

    movedIn(amount) {
        this.population = this.population + amount;
        return this.population;
    }

    movedOut(amount) {
        this.population = this.population - amount;
        return this.population;
    }

    howBig() {
        if (this.population > 100000) {
            return "City – a population > 100,000"
        } else if (this.population >= 20000 && this.population <= 100000) {
            return "Large town – a large town has a population of 20,000 to 100,000"
        } else if (this.population >= 1000 && this.population <= 19999) {
            return "Town – a town has a population of 1,000 to 20,000"
        } else if (this.population > 100 && this.population < 1000) {
            return "Village – larger than a hamlet but smaller than a town"
        } else return "Hamlet – population 1 - 100"
    }
};

export class Community {

    constructor(community_name) {
        this.community_name = community_name;
        this.cities = [];
    }

    whichSphere(city) {
        if (city.latitude > 0) {
            return "Northern Hemisphere"
        } else if (city.latitude < 0) {
            return "Southern Hemisphere"
        } else return "Right on the Equator!"
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

    createCity(key, name, latitude, longitude, population) {
        let new_city = new City(key, name, latitude, longitude, population);
        this.cities.push(new_city);
        console.log(this);
    }

    deleteCity(search) {
        let array = this.cities;
        let id_array = array.map(a => a.key);
        let searchedID = (id) => {
            return id == search;
        }
        let keyElement = id_array.findIndex(searchedID);
        array.splice(keyElement, 1);
        return array;
    }
};