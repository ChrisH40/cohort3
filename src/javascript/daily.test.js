import functions from './daily.js'

// --- Daily 13 Data ---

const people = [
    { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
    { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
    { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
    { fname: "Brent", lname: "Riddle", province: "MN", age: 79 },
    { fname: "Byron", lname: "Cardenas", province: "BC", age: 38 },
    { fname: "Carrie", lname: "Ramirez", province: "AB", age: 89 },
    { fname: "Cheryl", lname: "Glenn", province: "SK", age: 70 },
    { fname: "Dima", lname: "Curry", province: "MN", age: 67 },
    { fname: "Dustin", lname: "Bullock", province: "BC", age: 59 },
    { fname: "Eva", lname: "Keiths", province: "AB", age: 24 },
    { fname: "Faith", lname: "Liu", province: "SK", age: 46 },
    { fname: "Fawad", lname: "Bowman", province: "MN", age: 69 },
    { fname: "Forest", lname: "Vaughn", province: "BC", age: 52 },
    { fname: "Giovanni", lname: "Browning", province: "AB", age: 32 },
    { fname: "Greg", lname: "Hogan", province: "SK", age: 55 },
    { fname: "Harpreet", lname: "Ramsey", province: "MN", age: 18 },
    { fname: "Ian", lname: "Fitzgerald", province: "BC", age: 16 },
    { fname: "James", lname: "Kramer", province: "AB", age: 57 },
    { fname: "Jarvis", lname: "Ortega", province: "SK", age: 69 },
    { fname: "Jawad", lname: "Huerta", province: "MN", age: 35 },
    { fname: "Jinbong", lname: "Robinson", province: "BC", age: 26 },
    { fname: "Jingnan", lname: "Hatfield", province: "AB", age: 71 },
    { fname: "Joe", lname: "Banks", province: "SK", age: 37 },
    { fname: "Kristina", lname: "Dalton", province: "MN", age: 73 },
    { fname: "Latora", lname: "Matthews", province: "BC", age: 25 },
    { fname: "Lauren", lname: "McClure", province: "AB", age: 42 },
    { fname: "Licedt", lname: "Rasmussen", province: "SK", age: 30 },
    { fname: "Linden", lname: "Pierce", province: "MN", age: 68 },
    { fname: "Luis", lname: "Price", province: "BC", age: 23 },
    { fname: "Marcela", lname: "Perez", province: "AB", age: 20 },
    { fname: "Marilou", lname: "Graham", province: "SK", age: 32 },
    { fname: "Matt", lname: "Novak", province: "MN", age: 29 },
    { fname: "Monica", lname: "Giles", province: "BC", age: 34 },
    { fname: "Niloufar", lname: "Carson", province: "AB", age: 29 },
    { fname: "Omar", lname: "Olson", province: "SK", age: 69 },
    { fname: "Roger", lname: "Woodard", province: "MN", age: 84 },
    { fname: "Roman", lname: "Swanson", province: "BC", age: 21 },
    { fname: "Seun", lname: "Kelly", province: "AB", age: 60 },
    { fname: "Shane", lname: "Frost", province: "SK", age: 87 },
    { fname: "Steven", lname: "Haynes", province: "MN", age: 47 },
    { fname: "Thomas", lname: "Hart", province: "BC", age: 14 },
    { fname: "Trent", lname: "Kerr", province: "AB", age: 12 },
    { fname: "Darrell", lname: "Koch", province: "SK", age: 10 },
    { fname: "Tylor", lname: "Torres", province: "MN", age: 98 }
];

// --- Daily 13 Tests (Part 1) - 2019 NOV 8 ---

test('people britishColumbiaAlberta', () => {
    const testpeople = [

        { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
        { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
        { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
        { fname: "Brent", lname: "Riddle", province: "MN", age: 79 }
    ]

    expect(functions.britishColumbiaAlberta(testpeople, functions.callbackFirstLastNames)).toEqual(["Alex Smith", "Angela Jones"]);

    const testpeople_east = [

        { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
        { fname: "Brent", lname: "Riddle", province: "MN", age: 79 }
    ]

    expect(functions.britishColumbiaAlberta(testpeople_east, functions.callbackFirstLastNames)).toBe("SK or MN");
});

test('people callbackFirstLastNames', () => {
    const testpeople = [

        { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
        { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
        { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
        { fname: "Brent", lname: "Riddle", province: "MN", age: 79 }
    ]
    expect(functions.callbackFirstLastNames(testpeople)).toEqual(["Alex Smith", "Angela Jones", "Anne Bird", "Brent Riddle"]);
});

// --- Daily 7 - 12 Data ---

const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

// --- Daily 12 Tests - 2019 NOV 6 ---
//Balance >= 1000
test('staff balanceGreaterEqualThousand callback', () => {
    functions.balanceGreaterEqualThousand(data.staff);
    expect(functions.balanceGreaterEqualThousand(data.staff)).toEqual([1000, 1330]);
});

// --- Daily 10 Tests - 2019 OCT 29 ---
//Average Balance
test('staff averageBalance loop', () => {
    functions.staffAverageBalance(data.staff);
    expect(functions.staffAverageBalance(data.staff)).toBeCloseTo(546.14);
});

// Total Balances
test('staff totalBalance loop', () => {
    functions.staffTotalBalance(data.staff);
    expect(functions.staffTotalBalance(data.staff)).toEqual(3823);
});

// --- Daily 9 Tests - 2019 OCT 25 ---
test('email forEach loop', () => {
    const staffEmail = functions.loopStaffForEach(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test('email map loop', () => {
    const staffEmail = functions.loopStaffMap(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[1])
        .toEqual("liam.henry@evolveu.ca");
    expect(staffEmail[5])
        .toEqual("william.lee@evolveu.ca");
});

// --- Daily 8 Tests - 2019 OCT 24 ---

test('email builder for in loop', () => {
    const staffEmail = functions.loopStaffIn(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[1])
        .toEqual("liam.henry@evolveu.ca");
    expect(staffEmail[2])
        .toEqual("emma.jones@evolveu.ca");
});

test('email builder for of loop', () => {
    const staffEmail = functions.loopStaffOf(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[4])
        .toEqual("noah.ho@evolveu.ca");
});

// --- Daily 7 Tests - 2019 OCT 21 ---

test('email builder for company', () => {
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

// --- Daily 5 Tests - 2019 OCT 18 ---
//slice

test('does slice work', () => {
    expect(functions.sliceFunction([1, 2, 3, 4, 5])).toEqual([3, 4, 5]);
    expect(functions.sliceFunction([25, 21, 3, 42, -5])).toEqual([3, 42, -5]);
});

//splice

test('does splice work', () => {
    expect(functions.spliceFunction([1, 2, 3, 4, 5])).toEqual([1, 2]);
    expect(functions.spliceFunction([5, 4, 3, 2, 1])).toEqual([5, 4]);
});

//forEach

test('does for each work', () => {
    expect(functions.forEachFunction(["do", "ray", "me", "fah", "so", "la", "tee", "DOH"])).toEqual(["do!", "ray!", "me!", "fah!", "so!", "la!", "tee!", "DOH!"]);
    expect(functions.forEachFunction(["oh", "me", "oh", "my"])).toEqual(["oh!", "me!", "oh!", "my!"]);
});

//map

test('does map work', () => {
    expect(functions.mapFunction()).toEqual([20, 30, 40, 50]); // only possible outcome..
});

//reduce

test('does reduce work', () => {
    expect(functions.reduceFunction([1, 2, 3, 4, 5])).toEqual(15);
    expect(functions.reduceFunction([10, 20, 30, 40, 50])).toEqual(150);
    expect(functions.reduceFunction([-1, -2, -3, 1, 2, 3])).toEqual(0);

});

//filter

test('does filter work', () => {
    expect(functions.filterFunction([1, 2, 3, 4, 5])).toEqual([]);
    expect(functions.filterFunction([10, 20, 30, 40, 50])).toEqual([20, 30, 40, 50]);
    expect(functions.filterFunction([11, 1, 12, 2, 20])).toEqual([11, 12, 20]);
});

//sort

test('does sort work', () => {
    expect(functions.sortFunction([1, 5, 2, 4, 6, 3])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(functions.sortFunction(["a", "f", "e", "d", "c", "b"])).toEqual(["a", "b", "c", "d", "e", "f"]);
    expect(functions.sortFunction([-50, 40, 30, 20, 10])).toEqual([-50, 10, 20, 30, 40]);
});


// --- Daily 4 Tests - 2019 OCT 16 ---
// for

test('does for loop work', () => {
    expect(functions.forLoop([1, 2, 3])).toBe("246");
    expect(functions.forLoop([10, 20, 30])).toBe("204060");
});

// while

test('does while loop work', () => {
    expect(functions.whileLoop([1, 2, 3])).toBe("Array item is 1Array item is 2Array item is 3");
    expect(functions.whileLoop([10, 20, 30])).toBe("Array item is 10Array item is 20Array item is 30");
    expect(functions.whileLoop([-12, 43, 0])).toBe("Array item is -12Array item is 43Array item is 0");
    expect(functions.whileLoop(["my", "test", "array"])).toBe("Array item is myArray item is testArray item is array");
});

// do while

test('does do while loop work', () => {
    expect(functions.doWhileLoop([1, 2, 3])).toBe("Array item x 2 is 2Array item x 2 is 4Array item x 2 is 6");
    expect(functions.doWhileLoop([10, 20, 30])).toBe("Array item x 2 is 20Array item x 2 is 40Array item x 2 is 60");
    expect(functions.doWhileLoop([-5, -1, 0])).toBe("Array item x 2 is -10Array item x 2 is -2Array item x 2 is 0");
});

// //for in

test('does for in loop work', () => {
    expect(functions.forInLoop("!")).toBe("this is my prop! there are many like it! but this one is mine! ");
    expect(functions.forInLoop(".")).toBe("this is my prop. there are many like it. but this one is mine. ");
});

//for of
//Need to fix this
test('does for of loop work', () => {
    expect(functions.forOfLoop([1, 2, 3])).toBe(undefined); // should be 1, 2, 3 in console
    expect(functions.forOfLoop([1, 10, 100])).toBe(undefined); // should be 1, 10, 100 in console
});

//--- Daily 3 Test ---

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});

//--- Daily 2 Test ---

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(["one", "two"]))
        .toEqual("one.two@evolveu.ca");
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

//--- Daily 1 Test ---

test('Checking if the parameters are equal', () => {
    expect(functions.assertEquals("a", "b")).toBe(false);
    expect(functions.assertEquals("a", "a")).toBe(true);
    expect(functions.assertEquals(1, 2)).toBe(false);
    expect(functions.assertEquals(2, 2)).toBe(true);
    expect(functions.assertEquals("2", 2)).toBe(false);
    expect(functions.assertEquals("This value", "This value")).toBe(true);
});

