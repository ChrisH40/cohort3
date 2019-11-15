import cardFunctions from './functions.js';

const mainFunctions = {

    boxClickEvent: (x) => {
        console.log(x);
    },

    showList: () => {
        console.log(idList.children);
    },

    addItemBefore: () => {
        const newLi = document.createElement("li");
        idList.insertBefore(newLi, idList.firstChild);
        newLi.textContent = "Item " + idList.childElementCount;
    },

    addItemAfter: () => {
        const newLi = document.createElement("li");
        idList.appendChild(newLi);
        newLi.textContent = "Item " + idList.childElementCount;
    },

    deleteItem: () => {
        idList.removeChild(idList.lastElementChild);
    },

    // Card Container Functions

    addCard: () => {
        return idCardContainer.appendChild(cardFunctions.createCard(cardFunctions.cardCount));
    },

    cardAction: (event) => {
        if (event.target.textContent == "Add Before") {
            cardFunctions.addCardBefore(idCardContainer, event.target.parentNode);
        } if (event.target.textContent == "Add After") {
            cardFunctions.addCardAfter(idCardContainer, event.target.parentNode);
        } if (event.target.textContent == "Delete") {
            cardFunctions.deleteCard(idCardContainer, event.target.parentNode);
        }
    }
}

idBox.addEventListener("click", mainFunctions.boxClickEvent);
idShowButton.addEventListener("click", mainFunctions.showList);

idAddCardButton.addEventListener("click", mainFunctions.addCard);

idAddBeforeButton.addEventListener("click", mainFunctions.addItemBefore);
idAddAfterButton.addEventListener("click", mainFunctions.addItemAfter);
idDeleteButton.addEventListener("click", mainFunctions.deleteItem);

idScrollBox.addEventListener("click", mainFunctions.cardAction);