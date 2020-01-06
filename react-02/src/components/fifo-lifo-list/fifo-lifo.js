
export class ListGenerator {

    // The masterList is also a FIFO Queue that interacts with the other FIFO Queue and LIFO Stack lists. 
    // ListGenerator has the masterList items and also provides the FifoQueue and LifoStacks with their own list items, as well as add functions. 

    constructor() {
        this.list =
            ["Reno", "Chicago", "Fargo", "Minnesota", "Buffalo",
                "Toronto", "Winslow", "Sarasota", "Wichita", "Tulsa"];
        this.masterList =
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

    addMasterList(item) {
        this.masterList.push(item);
        return item;
    }

    removeMasterList() {
        const removedItem = this.masterList.shift();
        return removedItem;
    }

    nextToAdd() {
        const nextAdd = this.masterList[0];
        return nextAdd;
    }

    add(item) {
        this.list.push(item);
        return item;
    }
};