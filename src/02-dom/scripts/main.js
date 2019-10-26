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

    cardAction: (e) => {
        if (e.target.innerText === "Add Before") {
            cardFunctions.addCardBefore(idCardContainer, e.target.parentNode);
        } if (e.target.innerText === "Add After") {
            cardFunctions.addCardAfter(idCardContainer, e.target.parentNode);
        } if (e.target.innerText === "Delete") {
            cardFunctions.deleteCard(idCardContainer, e.target.parentNode);
        }
    }
}

idBox.addEventListener("click", mainFunctions.boxClickEvent);
idShowButton.addEventListener("click", mainFunctions.showList);
idAddBeforeButton.addEventListener("click", mainFunctions.addItemBefore);
idAddAfterButton.addEventListener("click", mainFunctions.addItemAfter);
idDeleteButton.addEventListener("click", mainFunctions.deleteItem);
idAddCardButton.addEventListener("click", mainFunctions.addCard);
idScrollBox.addEventListener("click", mainFunctions.cardAction);