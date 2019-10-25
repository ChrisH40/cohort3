
const cardFunctions = {

    cardCount: 0,

    addCardBefore: () => {

    },

    addCardAfter: () => {

    },

    deleteCard: (e) => {
        e.currentTarget.parentNode.remove();
    },

    createCard: (parent, counter) => {
        const newCard = document.createElement('div');
        newCard.setAttribute("id", "idCard" + (counter + 1));
        newCard.setAttribute("class", "card");
        newCard.textContent = "Card " + (counter + 1);
        parent.appendChild(newCard);
        const dividerOne = document.createElement('hr');
        dividerOne.setAttribute("class", "divider");
        newCard.appendChild(dividerOne);
        const addBeforeButton = document.createElement('button');
        addBeforeButton.setAttribute("id", "idCardBeforeButton" + (counter + 1));
        addBeforeButton.setAttribute("class", "card-button");
        addBeforeButton.textContent = "Add Before";
        addBeforeButton.addEventListener("click", cardFunctions.addCardBefore);
        newCard.appendChild(addBeforeButton);
        const addAfterButton = document.createElement('button');
        addAfterButton.setAttribute("id", "idCardAfterButton" + (counter + 1));
        addAfterButton.setAttribute("class", "card-button");
        addAfterButton.textContent = "Add After";
        newCard.appendChild(addAfterButton);
        addAfterButton.addEventListener("click", cardFunctions.addCardAfter);
        const dividerTwo = document.createElement('hr')
        dividerTwo.setAttribute("class", "divider");
        newCard.appendChild(dividerTwo);
        const deleteCardButton = document.createElement('button');
        deleteCardButton.setAttribute("id", "idCardDeleteButton" + (counter + 1));
        deleteCardButton.setAttribute("class", "card-button");
        deleteCardButton.textContent = "Delete";
        deleteCardButton.addEventListener("click", cardFunctions.deleteCard);
        newCard.appendChild(deleteCardButton);
        return cardFunctions.cardCount = (counter + 1);
    }
};

export default cardFunctions;