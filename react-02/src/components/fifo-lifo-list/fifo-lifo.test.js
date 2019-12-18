import { ListGenerator } from './fifo-lifo.js';

test('test add remove', () => {
    const testGenerator = new ListGenerator();
    expect(testGenerator.add("Calgary")).toBe("Calgary");
    expect(testGenerator.list)
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
    expect(testGenerator.remove()).toBe("Ottawa");
    expect(testGenerator.list)
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
    expect(testGenerator.list)
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
});
