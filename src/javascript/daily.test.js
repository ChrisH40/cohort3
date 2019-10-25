import functions from './daily.js'

// --- Daily 7 - 9 Data ---

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

// --- Daily 9 Tests - 25 OCT 2019 ---
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

// --- Daily 8 Tests - 24 OCT 2019 ---

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

// --- Daily 7 Tests - 21 OCT 2019 ---

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

