import { ListGenerator } from './fifo-lifo.js';

test('test add remove from Master List', () => {
    const testGenerator = new ListGenerator();
    expect(testGenerator.addMasterList("Calgary")).toBe("Calgary");
    expect(testGenerator.masterList)
        .toEqual(
            ["Ottawa", "Oklahoma", "Tampa", "Panama", "Mattawa",
                "La Paloma", "Bangor", "Baltimore", "Salvador", "Amarillo",
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
                "Sioux City", "Cedar City", "Dodge City", "Calgary"]
        );
    expect(testGenerator.removeMasterList()).toBe("Ottawa");
    expect(testGenerator.masterList)
        .toEqual(
            ["Oklahoma", "Tampa", "Panama", "Mattawa", "La Paloma",
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
                "Sioux City", "Cedar City", "Dodge City", "Calgary"]
        );
});

test('test nextToAdd', () => {
    const testGenerator = new ListGenerator();
    expect(testGenerator.nextToAdd()).toBe("Ottawa");
    expect(testGenerator.masterList)
        .toEqual(
            ["Ottawa", "Oklahoma", "Tampa", "Panama", "Mattawa",
                "La Paloma", "Bangor", "Baltimore", "Salvador", "Amarillo",
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
                "Sioux City", "Cedar City", "Dodge City"]
        );
    testGenerator.masterList = [];
    expect(testGenerator.nextToAdd()).toBe("You've been everywhere!")
});

test('test add to fifo queue, lifo stack lists', () => {
    const testGenerator = new ListGenerator();
    expect(testGenerator.add("Calgary")).toBe("Calgary");
    expect(testGenerator.list)
        .toEqual(["Reno", "Chicago", "Fargo", "Minnesota", "Buffalo", "Toronto", "Winslow", "Sarasota", "Wichita", "Tulsa", "Calgary"]);
});
