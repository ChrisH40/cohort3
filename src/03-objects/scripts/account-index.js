import { AccountController } from './account.js';
import domFunctions from './account-dom-functions.js';

export const accountList = new AccountController("Account List");

const accountCreateButton = () => {
    let array = accountList.listArray;
    let accountNames = array.map(array => array.accountName);
    let matchingName = accountNames.filter(account => account == idAccountNameInput.value)
    if (String(idAccountNameInput.value) == matchingName) {
        clearInputFields();
        alert("Duplicate Account Name! Please choose another name.");
    }
    else {
        const newAccount = accountList.addAccount(String(idAccountNameInput.value), idAccountBalanceInput.value);
        domFunctions.createAccountDiv(idAccountDisplay, newAccount);
        balanceChecker(array);
        clearInputFields();
    }
    return
}

const accountButtonSelector = (event) => {
    let array = accountList.listArray;
    let accountKey = event.target.parentNode.getAttribute("counter");
    let index = accountList.findAccount(array, accountKey);

    if (event.target.textContent == "Deposit") {
        let input = Number(event.target.parentNode.children[2].value);
        array[index].accountDeposit(input);
        let balance = event.target.parentNode.children[1]
        balance.textContent = "$" + Number(array[index].accountBalance(array[index])).toFixed(2);
        balanceChecker(array);
        event.target.parentNode.children[2].value = "";
    } 
    else if (event.target.textContent == "Withdraw") {
        let input = Number(event.target.parentNode.children[2].value);
        array[index].accountWithdraw(input);
        let balance = event.target.parentNode.children[1]
        balance.textContent = "$" + Number(array[index].accountBalance(array[index])).toFixed(2);
        balanceChecker(array);
        event.target.parentNode.children[2].value = "";
    } 
    else if (event.target.textContent == "Delete Account") {
        accountList.deleteAccount(array, accountKey);
        domFunctions.deleteAccountCard(event.target);
        balanceChecker(array);
    } 
    return
}

const clearInputFields = () => {
    idAccountNameInput.value = "";
    idAccountBalanceInput.value = "";
}

const balanceChecker = (array) => {
    if (array.length > 0) {
        idHighest.textContent = accountList.highestBalance(array);
        idHighestNumber.textContent = accountList.highestBalanceNumber(array);
        idLowest.textContent = accountList.lowestBalance(array);
        idLowestNumber.textContent = accountList.lowestBalanceNumber(array);
    } 
    else if (array.length == 0) {
        idHighest.textContent = "";
        idHighestNumber.textContent = "";
        idLowest.textContent = "";
        idLowestNumber.textContent = "";
    } 
    return
}

idAccountDisplay.addEventListener("click", accountButtonSelector);
idCreateAcctButton.addEventListener("click", accountCreateButton);