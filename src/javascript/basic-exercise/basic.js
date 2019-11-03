console.log("Hello World from basic.js");

const button = document.getElementById("IDclick");
const header = document.getElementById("IDheader");
const textbox = document.getElementById("IDinput");

button.addEventListener("click", onButtonClicked);
header.addEventListener("mouseover", onHeaderHover);
header.addEventListener("mouseout", onHeaderOut);


function onButtonClicked() {
    let buttonValue = document.getElementById("IDinput").value;
    if (buttonValue = Number(buttonValue)) {
        alert(size(buttonValue));
        textbox.value = "";
    } else alert("Please enter a number!");
        textbox.value = "";
};

function onHeaderHover() {
    header.textContent = "Hello World from Canada EH!";
};

function onHeaderOut() {
    header.textContent = "Hello World from HTML"; 
};

function size (int) {
    if (int < 10) {
        return "small";
    } else if (int > 10 && int < 20) {
        return "med"
    } else if (int >= 20) {
        return "large";
    }
};

