import { FifoQueue } from './fifo-queue.js';
import { LifoStack } from './lifo-stack.js';

export class ListGenerator {

    constructor() {
        this.list =
            ["Ottawa", "Oklahoma",
                "Tampa", "Panama", "Mattawa", "La Paloma",
                "Bangor", "Baltimore", "Salvador", "Amarillo",
                "Tocopilla", "Barranquilla", "Padilla", "Boston",
                "Charleston", "Dayton", "Louisiana", "Washington",
                "Houston", "Kingston", "Texarkana", "Monterey",
                "Faraday", "Santa Fe", "Tallapoosa", "Glen Rock",
                "Black Rock", "Little Rock", "Oskaloosa", "Tennessee",
                "Hennessey", "Chicopee", "Spirit Lake", "Grand Lake",
                "Devil's Lake", "Crater Lake", "Louisville", "Nashville",
                "Knoxville", "Ombabika", "Schefferville", "Jacksonville",
                "Waterville", "Costa Rica", "Pittsfield", "Springfield",
                "Bakersfield", "Shreveport", "Hackensack", "Cadillac",
                "Fond du Lac", "Davenport", "Idaho", "Jellico", "Argentina",
                "Diamantina", "Pasadena", "Catalina", "Pittsburgh",
                "Parkersburg", "Gravelbourg", "Colorado", "Ellensburg",
                "Rexburg", "Vicksburg", "El Dorado", "Larimore", "Admore",
                "Haverstraw", "Chatanika", "Chaska", "Nebraska", "Alaska",
                "Opelika", "Baraboo", "Waterloo", "Kalamazoo", "Kansas City",
                "Sioux City", "Cedar City", "Dodge City"];
    }

    add(item) {
        this.list.push(item);
        return item;
    }

    remove() {
        const removedItem = this.list.shift();
        return removedItem;
    }

    nextToAdd() {
        return this.list[0];
    }
};