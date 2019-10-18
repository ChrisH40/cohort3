const list = document.querySelector(".list");

const functions = {
    
    boxClickEvent: (x) => {
        console.log(x);
    },

    showList: () => {
        console.log(list.children);
    },

    addItemBefore: () => {
        let newLi = document.createElement("li");
        list.insertBefore(newLi, list.firstChild);
        newLi.textContent = "Item";
    },

    addItemAfter: () => {
        let newLi = document.createElement("li");
        list.appendChild(newLi);
        newLi.textContent = "Item";
    },

    deleteItem: () => {
        list.removeChild(list.lastElementChild);
    }
};

export default functions;