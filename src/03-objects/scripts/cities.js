
export class City {

    constructor(key, name, latitude, longitude, population) {
        this.key = Number(key);
        this.name = name;
        this.latitude = Number(latitude);
        this.longitude = Number(longitude);
        this.population = Number(population);
    }

    show() {
        return `- ${this.name} is located at ${this.latitude} latitude, ${this.longitude} longitude and has a population of ${this.population} people.`
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
            return `- ${this.name} is a City with a population > 100,000 people.`
        } else if (this.population >= 20000 && this.population <= 100000) {
            return `- ${this.name} is a Large Town with a population of 20,000 to 100,000 people.`
        } else if (this.population >= 1000 && this.population <= 19999) {
            return `- ${this.name} is a Town with a population of 1,000 to 20,000 people.`
        } else if (this.population > 100 && this.population < 1000) {
            return `- ${this.name} is a Village, larger than a Hamlet but smaller than a Town.`
        } else return `- ${this.name} is a Hamlet with population of 1 to 100 people.`
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
            return `- ${city.name} is located in the Northern Hemisphere.`
        } else if (city.latitude < 0) {
            return `- ${city.name} is located in the Southern Hemisphere.`
        } else return `- ${city.name} is located right on the Equator!`
    }

    getMostNorthern(array) {
        let latitude_array = array.map(cities => cities.latitude);
        let most_southern = Math.max(...latitude_array);
        let found_index = latitude_array.indexOf(most_southern);
        return array[found_index].name;
    }

    getMostSouthern(array) {
        let latitude_array = array.map(cities => cities.latitude);
        let most_southern = Math.min(...latitude_array);
        let found_index = latitude_array.indexOf(most_southern);
        return array[found_index].name;
    }

    getPopulation(array) {
        const city_populations = array.map(array => array.population);
        const total_populations = city_populations.reduce((sum, num) => sum + num);
        return total_populations;
    }

    createCity(name, latitude, longitude, population) {
        this.counter++
        let new_city = new City(this.counter, name, latitude, longitude, population);
        this.cities.push(new_city);
        return new_city;
    }

    deleteCity(array, index) {
        array.splice(index, 1);
        return array;
    }

    findCity(array, cityKey) {
        let array_keys = array.map(city => city.key);
        let found_key = array_keys.find((key) => key == cityKey)
        let found_index = array_keys.indexOf(found_key);
        return found_index;
    }
};