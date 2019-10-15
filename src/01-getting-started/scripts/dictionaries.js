const objectInput = document.getElementById("idObjectInput");
const objectMessage = document.getElementById("idObjectMsg");

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

    objectLookup: () => {
        let prop = (objectInput.value).toUpperCase();
        if (dictionaryFunctions.myDictionary.hasOwnProperty(prop)) {
            return objectMessage.textContent = dictionaryFunctions.myDictionary[prop];
        } else return objectMessage.textContent = "Please enter a valid provincial/territorial abbreviation.";
    }
};

export default dictionaryFunctions;