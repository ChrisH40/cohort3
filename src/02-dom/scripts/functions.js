const cardFunctions = {

    cardCount: 0,

    cardCounter: (count) => {
        return cardFunctions.cardCount = count + 1;
    },
    
    addCardBefore: (par, ref) => {
        return par.insertBefore(cardFunctions.createCard(cardFunctions.cardCount), ref);
    },

    addCardAfter: (par, ref) => {
        return par.insertBefore(cardFunctions.createCard(cardFunctions.cardCount), ref.nextSibling);
    },

    deleteCard: (par, ref) => {
        return par.removeChild(ref);
    },

    createCard: (count) => {
        const newCard = document.createElement("div");
        const dividerOne = document.createElement("hr");
        const addBeforeButton = document.createElement("button");
        const addAfterButton = document.createElement("button");
        const dividerTwo = document.createElement("hr");
        const deleteCardButton = document.createElement("button");
        cardFunctions.cardCounter(cardFunctions.cardCount);
        newCard.setAttribute("id", "idCard" + (count + 1));
        newCard.setAttribute("class", "card");
        newCard.textContent = "Card " + (count + 1);
        dividerOne.setAttribute("class", "divider");
        addBeforeButton.setAttribute("id", "idCardBeforeButton" + (count + 1));
        addBeforeButton.setAttribute("class", "button card-button");
        addBeforeButton.textContent = "Add Before";
        addAfterButton.setAttribute("id", "idCardAfterButton" + (count + 1));
        addAfterButton.setAttribute("class", "button card-button");
        addAfterButton.textContent = "Add After";
        dividerTwo.setAttribute("class", "divider");
        deleteCardButton.setAttribute("id", "idCardDeleteButton" + (count + 1));
        deleteCardButton.setAttribute("class", "button card-button");
        deleteCardButton.textContent = "Delete";
        newCard.appendChild(dividerOne);
        newCard.appendChild(addBeforeButton);
        newCard.appendChild(addAfterButton);   
        newCard.appendChild(dividerTwo);
        newCard.appendChild(deleteCardButton);
        return newCard;
    }
};

export default cardFunctions;