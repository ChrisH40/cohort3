const dictionaryFunctions = {

    myDictionary: {

        AB: "Alberta",
        BC: "British Columbia",
        MB: "Manitoba",
        NB: "New Brunswick",
        NL: "Newfoundland and Labrador",
        NT: "Northwest Territories",
        NS: "Nova Scotia",
        NU: "Nunavut",
        ON: "Ontario",
        PE: "Prince Edward Island",
        QC: "Quebec",
        SK: "Saskatchewan",
        YT: "Yukon"

    },

    objectLookupFunction: (prop) => {
        prop = prop.toUpperCase();
        if (dictionaryFunctions.myDictionary.hasOwnProperty(prop)) {
            return dictionaryFunctions.myDictionary[prop];
        } else return "Please enter a valid provincial/territorial abbreviation.";
    }
};

export default dictionaryFunctions;