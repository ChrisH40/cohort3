import { AccountController } from './account.js';
import domFunctions from './account-dom-functions.js';

export const accountList = new AccountController("Account List");

const accountCreateButton = () => {
    let array = accountList.listArray;
    let accountNames = array.map(array => array.accountName);
    let matchingName = accountNames.filter(account => account == idAccountNameInput.value)
    if (String(idAccountNameInput.value) == matchingName) {
        clearInputFields();
        return alert("Duplicate Account Name! Please choose another name.");
    }
    else {
        const new_account = accountList.addAccount(String(idAccountNameInput.value), idAccountBalanceInput.value)
        domFunctions.createAccountDiv(idAccountDisplay, new_account);
        balanceChecker(accountList);
        clearInputFields();
    }
}

const accountButtonSelector = (event) => {
    let accountID = event.target.parentNode.getAttribute("counter");
    let index = accountList.findAccount(accountID);
    let input = Number(event.target.parentNode.children[2].value);

    if (event.target.textContent == "Deposit") {
        accountList.listArray[index].accountDeposit(input);
        let balance = event.target.parentNode.children[1]
        balance.textContent = "$" + Number(accountList.listArray[index].accountBalance()).toFixed(2);
        balanceChecker(accountList);
        event.target.parentNode.children[2].value = "";
    } else if (event.target.textContent == "Withdraw") {
        accountList.listArray[index].accountWithdraw(input);
        let balance = event.target.parentNode.children[1]
        balance.textContent = "$" + Number(accountList.listArray[index].accountBalance()).toFixed(2);
        balanceChecker(accountList);
        event.target.parentNode.children[2].value = "";
    } else if (event.target.textContent == "Delete Account") {
        accountList.deleteAccount(accountID);
        domFunctions.deleteAccountCard(event.target);
        balanceChecker(accountList);
    }
}

const clearInputFields = () => {
    idAccountNameInput.value = "";
    idAccountBalanceInput.value = "";
}

const balanceChecker = (array) => {
    if (array.listArray.length > 0) {
        idHighest.textContent = accountList.highestBalance();
        idHighestNumber.textContent = accountList.highestBalanceNumber();
        idLowest.textContent = accountList.lowestBalance();
        idLowestNumber.textContent = accountList.lowestBalanceNumber();
    } else if (array.listArray.length == 0) {
        idHighest.textContent = "";
        idHighestNumber.textContent = "";
        idLowest.textContent = "";
        idLowestNumber.textContent = "";
    }
}

idMiddleContainer.addEventListener("click", accountButtonSelector);
idCreateAcctButton.addEventListener("click", accountCreateButton);