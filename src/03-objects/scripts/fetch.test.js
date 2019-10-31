import fetchFunctions from './fetch.js';

const data = JSON.parse(`[

    { "name": "Maricica", "surname": "Ghinea", "gender": "female", "region": "Romania" },
    { "name": "Nishant", "surname": "Bhattarai", "gender": "male", "region": "Nepal" },
    { "name": "Nicuță", "surname": "Lotru", "gender": "male", "region": "Romania" },
    { "name": "Barbara", "surname": "Schneider", "gender": "female", "region": "United States" },
    { "name": "Stanca", "surname": "Grigoriu", "gender": "female", "region": "Romania" },
    { "name": "Bella", "surname": "Musker", "gender": "female", "region": "New Zealand" },
    { "name": "Fabian", "surname": "Dediu", "gender": "male", "region": "Romania" },
    { "name": "Славчо", "surname": "КОСТАДИНОВ", "gender": "male", "region": "Bulgaria" },
    { "name": "Upendra", "surname": "Ranjit", "gender": "male", "region": "Nepal" },
    { "name": "Dumitra", "surname": "Vicovean", "gender": "female", "region": "Romania" }
]`);

test('test getFirstName', () => {
    expect(fetchFunctions.getFirstName(data)).toBe("Maricica");
});

test('test getAllFirstNames', () => {
    expect(fetchFunctions.getAllFirstNames(data)).
        toEqual(
            ["Maricica", "Nishant", "Nicuță", "Barbara", "Stanca", "Bella", "Fabian", "Славчо", "Upendra", "Dumitra"]);
});

// test('test showDelayProblem', done => {
//     function callback() {
//         expect(fetchFunctions.showDelayProblem()).toBe();
//         done();
//     }
//     fetchFunctions.showDelayProblem(callback);
// });

// test('test showDelaySolution', done => {
//     function callback() {
//         expect(fetchFunctions.showDelaySolution()).toBe();
//         done();
//     }
//     fetchFunctions.showDelaySolution(callback);
// });

// test('test getUsers', async () => {
//     await expect(fetchFunctions.getUsers()).rejects.toThrow();
//     await expect(fetchFunctions.getUsers()).resolves.toBe();
// });

// test('test workWithData', async () => {
//     await fetchFunctions.workWithData(done);
// });