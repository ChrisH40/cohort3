
const functions = {

    addCard: (x, y) => {
        // console.log("i am in add card");
        const newDiv = document.createElement('div');
        newDiv.setAttribute("class", "left-side-scroll-box-card-temp");
        x.appendChild(newDiv);
        newDiv.setAttribute("counter", y);
        newDiv.textContent = "Counter " + y;
        console.log(newDiv);
    },

    whatCards: (z) => {
        return [1,2,3];
    }
}

export default functions