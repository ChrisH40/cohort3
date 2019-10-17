const list = document.querySelector(".list");
const listTxt = list.textContent;

const functions = {

    boxClickEvent: (x) => {
        console.log(x);
    },

    showButton: () => {
        console.log(listTxt);
    },

    addButton: () => {
        const newLi = document.createElement("li");
        list.appendChild(newLi);

        // list.insertBefore(newLi, list.childNodes[0]); // add to start 
        // list.removeChild(list.lastChild); // delete last item
    }
};

export default functions;