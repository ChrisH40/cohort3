
const cardFunctions = {

    cardCount: 0,

    cardCounter: (count) => {
        return cardFunctions.cardCount = count + 1;
    },
    
    addCardBefore: (parent, reference) => {
        return parent.insertBefore(cardFunctions.createCard(cardFunctions.cardCount), reference);
    },

    addCardAfter: (parent, reference) => {
        return parent.insertBefore(cardFunctions.createCard(cardFunctions.cardCount), reference.nextSibling);
    },

    deleteCard: (parent, reference) => {
        return parent.removeChild(reference);
    },

    createCard: (count) => {
        cardFunctions.cardCounter(count);
        const newCard = document.createElement("div");
        newCard.setAttribute("id", "idCard" + (count + 1));
        newCard.setAttribute("class", "card");
        newCard.textContent = "Card " + (count + 1);
        const dividerOne = document.createElement("hr");
        dividerOne.setAttribute("class", "divider");
        newCard.appendChild(dividerOne);
        const addBeforeButton = document.createElement("button");
        addBeforeButton.setAttribute("id", "idCardBeforeButton" + (count + 1));
        addBeforeButton.setAttribute("class", "button card-button");
        addBeforeButton.textContent = "Add Before";
        newCard.appendChild(addBeforeButton);
        const addAfterButton = document.createElement("button");
        addAfterButton.setAttribute("id", "idCardAfterButton" + (count + 1));
        addAfterButton.setAttribute("class", "button card-button");
        addAfterButton.textContent = "Add After";
        newCard.appendChild(addAfterButton);   
        const dividerTwo = document.createElement("hr");
        dividerTwo.setAttribute("class", "divider");
        newCard.appendChild(dividerTwo);
        const deleteCardButton = document.createElement("button");
        deleteCardButton.setAttribute("id", "idCardDeleteButton" + (count + 1));
        deleteCardButton.setAttribute("class", "button card-button");
        deleteCardButton.textContent = "Delete";
        newCard.appendChild(deleteCardButton);
        return newCard;
    }
};

export default cardFunctions;