
// --- Daily 17 - 2019 NOV 26 ---
// See below getPopulation() method.

export class City {

    constructor(key, name, latitude, longitude, population) {
        this.key = Number(key);
        this.name = name;
        this.latitude = Number(latitude);
        this.longitude = Number(longitude);
        this.population = Number(population);
    }
}

export class Community {

    constructor(community_name) {
        this.community_name = community_name;
        this.cities = [];
        this.counter = 0;
    }

    createCity(name, latitude, longitude, population) {
        this.counter++
        let new_city = new City(this.counter, name, latitude, longitude, population);
        this.cities.push(new_city);
        return new_city;
    }

    // This method demonstrates an understanding of deconstructing:
        // - A class "Community" into an array of objects "cities" with multiple properties.
        // - An array of objects "cities" into an array of the values of one of properties of the objects "population".
        // - An array of "population" values returning a single value, the total "population".

    // This method was used in 03-objects/scripts/cities.js and will be used again for React.

    getPopulation() {
        const array = this.cities;
        const city_populations = array.map(array => array.population);
        const total_population = city_populations.reduce((sum, num) => sum + num);
        return total_population;
    }
}

const functions = {

    // --- Daily 16 - 2019 NOV 22 ---

    arraySortArrowFunction: (data) => {
        let myArray = data;
        myArray.sort((a, b) => {
            if (a.origin > b.origin) { return -1; }
            if (a.origin < b.origin) { return 1; }
            return 0;
        })
        console.log("myArray = ", myArray);
        return myArray;
    },

    arraySortNamedFunction(data) {
        let myArray = data;
        myArray.sort((a, b) => {
            if (a.str < b.str) { return -1; }
            if (a.str > b.str) { return 1; }
            return 0;
        })
        console.log("myArray = ", myArray);
        return myArray;
    },

    function(data) {
        let myArray = data;
        myArray.sort((a, b) => parseFloat(a.num) - parseFloat(b.num));
        console.log("myArray = ", myArray);
        return myArray;
    },

    // --- Daily 15 - 2019 NOV 21 ---

    callbackPeopleAgeAvg: (data) => {
        const age_array = data.map(data => data.age);
        const tot_ppl = age_array.length;
        const tot_age = age_array.reduce((sum, num) => sum + num);
        const avg_age = Number((tot_age / tot_ppl).toFixed(2));
        const AB_BC_age_obj =
        {
            total_people: tot_ppl,
            total_age: tot_age,
            avgerage_age: avg_age,
        };
        return AB_BC_age_obj;
    },

    // --- Daily 14 - 2019 NOV 14 ---

    //Pair Programming

    // --- Daily 13 - 2019 NOV 8 ---

    britishColumbiaAlberta: (data, callback) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].province == "AB" || data[i].province == "BC") {
                const west = data.filter(data => data.province == "BC" || data.province == "AB");
                return callback(west);
            } if (data[i].province == "SK" || data[i].province == "MN") {
                return "SK or MN";
            }
        }
    },

    callbackFirstLastNames: (data) => {
        const first_last_names = data.map(data => String(data.fname + " " + data.lname));
        return first_last_names;
    },

    // --- Daily 12 - 2019 NOV 6 ---

    balanceGreaterEqualThousand: (staff) => {
        const staff_balances_thousand = staff.filter(staff => staff.balance >= 1000);
        const balances_thousand = staff_balances_thousand.map(staff_balances_thousand => staff_balances_thousand.balance);
        return balances_thousand;
    },

    // --- Daily 10 - 2019 OCT 29 ---
    //Average Balance

    staffAverageBalance: (staff) => {
        const staffAvgBalance = staff.map(staff => staff.balance);
        const totalBalance = staffAvgBalance.reduce((sum, num) => sum + num);
        return totalBalance / staffAvgBalance.length;
    },

    //Total Balances

    staffTotalBalance: (staff) => {
        const staffAvgBalance = staff.map(staff => staff.balance);
        const totalBalance = staffAvgBalance.reduce((sum, num) => sum + num);
        return totalBalance;
    },

    // --- Daily 9 - 2019 OCT 25 ---
    //forEach

    loopStaffForEach: (staff) => {
        let staffEmail = [];
        staff.forEach(item => {
            staffEmail.push(functions.makeEmailObj(item));
        }); return staffEmail;
    },

    //map

    loopStaffMap: (staff) => {
        const staffEmail = staff.map(functions.makeEmailObj);
        return staffEmail;
    },

    // --- Daily 8 - 2019 OCT 24 ---

    loopStaffIn: (staff) => {
        let staffEmail = [];
        for (let prop in staff) {
            staffEmail.push(functions.makeEmailObj(staff[prop]));
        } return staffEmail;
    },

    loopStaffOf: (staff) => {
        let staffEmail = [];
        for (let prop of staff) {
            staffEmail.push(functions.makeEmailObj(prop));
        } return staffEmail;
    },

    // --- Daily 7 - 2019 OCT 21 ---

    loopStaff: (staff) => {
        let staffEmail = [];
        staff.forEach(item => {
            staffEmail.push(functions.makeEmailObj(item));
        }); return staffEmail;
    },

    // --- Daily 6 - 2019 OCT 18 ---

    //coverage report emailed to Larry today

    // --- Daily 5 - 2019 OCT 16 ---

    // More Arrays!
    //slice

    sliceFunction: (array) => {
        return array.slice(2);
    },

    //splice

    spliceFunction: (array) => {
        array.splice(2);
        return array;
    },

    //forEach

    forEachFunction: (array) => {
        let myNewArray = [];
        array.forEach(item => {
            let obj = item + "!";
            myNewArray.push(obj);
        }); return myNewArray;
    },

    //map

    mapFunction: () => {
        const simpsons = [
            { name: 'Homer Simpson', age: 20 },
            { name: 'Joey JoeJoe', age: 30 },
            { name: 'Larleen Lumpkin', age: 40 },
            { name: 'BleedingGums Murphy', age: 50 }
        ];
        const simpsonsAge = simpsons.map(simpsons => simpsons.age);
        return simpsonsAge;
    },

    //reduce

    reduceFunction: (array) => {
        const arraySum = array.reduce((total, amount) =>
            total + amount);
        return arraySum;
    },

    //filter

    filterFunction: (array) => {
        const arrayFiltered = array.filter(array => array > 10);
        return arrayFiltered;
    },

    //sort

    sortFunction: (array) => {
        const arraySorted = array.sort();
        return arraySorted;
    },

    // --- Daily 4 - 16 OCT 2019 ---
    // Loops
    // for

    forLoop: (array) => {
        let myNewArray = [];
        for (var i = 0; i < array.length; i++) {
            myNewArray += array[i] * 2;
        } return myNewArray;
    },

    // while

    whileLoop: (array) => {
        let textOutput = "";
        let i = 0;
        while (i < array.length) {
            textOutput += "Array item is " + array[i];
            i++;
        } return textOutput;
    },

    // do while

    doWhileLoop: (array) => {
        let myEvenNewerArray = [];
        let i = 0;
        do {
            myEvenNewerArray += "Array item x 2 is " + array[i] * 2;
            i++;
        }
        while (i < array.length);
        return myEvenNewerArray;
    },

    // //for in

    forInLoop: (txt) => {
        const myProps = {

            prop1: "this is my prop",
            prop2: "there are many like it",
            prop3: "but this one is mine"

        }
        let propVar = "";
        let i;
        for (i in myProps) {
            propVar += myProps[i] + txt + " ";
        } return propVar;
    },

    //for of
    //Need to fix this

    forOfLoop: (array) => {
        for (const x of array) {
            console.log(x);
        }
    },

    // --- Daily 3 ---
    // Write a function to format an email based on an object / map

    makeEmailObj: (name) => {
        return String(name.fname.toLowerCase() + "." + name.lname.toLowerCase() + "@evolveu.ca");
    },

    // --- Daily 2 ---
    //Write a function to format an email based on an array.

    makeEmailArr: (name) => {
        return String(name[0].toLowerCase() + "." + name[1].toLowerCase() + "@evolveu.ca");
    },

    // --- Daily 1 ---

    /*	
    Write the function that will create this output:
 
        *** the two values are not the same:
            p1--> a
            p2--> b
        *** the two values are not the same:
            p1--> 1
            p2--> 2
        *** the two values are not the same:
            p1--> 2
            p2--> 2
    */

    // Write the function after this comment ---

    assertEquals: (p1, p2) => {
        if (p1 === p2)
            return true;
        else console.log("***the two values are not the same:\n   p1--> " + p1 + "\n   p2--> " + p2);
        return false;
    }

    // and before this comment ---
};

export default functions;





