const firstInput = document.getElementById("idInputDisplay1");
const secondInput = document.getElementById("idInputDisplay2");
const totalOutput = document.getElementById("idTotalDisplay");

let arithmeticField = document.getElementById("idArithmetic");
let op = "0";

const calculatorFunctions = {

    clearDisplay: () => {
        firstInput.value = 0;
        secondInput.value = 0;
        totalOutput.value = 0;
        op = "0";
        arithmeticField.textContent = " + - x / ";
    },

    addButton: () => {
        op = "+";
        arithmeticField.textContent = " + ";
    },

    addOperator: (num1, num2) => {
        return num1 + num2;
    },

    subtractButton: () => {
        op = "-";
        arithmeticField.textContent = " - ";
    },

    subtractOperator: (num1, num2) => {
        return num1 - num2
    },

    multiplyButton: () => {
        op = "x";
        arithmeticField.textContent = " x ";
    },

    multiplyOperator: (num1, num2) => {
        return num1 * num2;
    },

    divideButton: () => {
        op = "/";
        arithmeticField.textContent = " / ";
    },

    divideOperator: (num1, num2) => {
        return num1 / num2;
    },

    equalsButton: () => {
        if (op === "+")
            return totalOutput.value = calculatorFunctions.addOperator(Number(firstInput.value), Number(secondInput.value));
        if (op === "-")
            return totalOutput.value = calculatorFunctions.subtractOperator(Number(firstInput.value), Number(secondInput.value));
        if (op === "x")
            return totalOutput.value = calculatorFunctions.multiplyOperator(Number(firstInput.value), Number(secondInput.value));
        if (op === "/")
            return totalOutput.value = calculatorFunctions.divideOperator(Number(firstInput.value), Number(secondInput.value));
    }
};

export default calculatorFunctions;