import { AccountController } from './account.js';
import functions from './account-functions.js';

export const accountList = new AccountController("Account List");

const accountCreateButton = () => {
    functions.createAccountDiv(idAccountDisplay, idAccountNameInput.value, idAccountBalanceInput.value);
    accountList.addAccount(idAccountNameInput.value, idAccountBalanceInput.value);
    idAccountNameInput.value = "";
    idAccountBalanceInput.value = "";
    idHighest.textContent = accountList.highestBalance();
    idLowest.textContent = accountList.lowestBalance();
}

const accountButtonSelector = (event) => {
    if (event.target.textContent == "Deposit") {
        let name = event.target.parentNode.children[0].textContent;
        let index = accountList.findAccount(name);
        let input = Number(event.target.parentNode.children[3].value);
        accountList.listArray[index].accountDeposit(input);
        let balance = event.target.parentNode.children[2]
        balance.textContent = Number(accountList.listArray[index].accountBalance()).toFixed(2);
        idHighest.textContent = accountList.highestBalance();
        idLowest.textContent = accountList.lowestBalance();
        event.target.parentNode.children[3].value = "";

    } if (event.target.textContent == "Withdraw") {
        let name = event.target.parentNode.children[0].textContent;
        let index = accountList.findAccount(name);
        let input = Number(event.target.parentNode.children[3].value);
        accountList.listArray[index].accountWithdraw(input);
        let balance = event.target.parentNode.children[2]
        balance.textContent = Number(accountList.listArray[index].accountBalance()).toFixed(2);
        idHighest.textContent = accountList.highestBalance();
        idLowest.textContent = accountList.lowestBalance();
        event.target.parentNode.children[3].value = "";

    } if (event.target.textContent == "Delete") {
        let name = event.target.parentNode.children[0].textContent;
        accountList.deleteAccount(name);
        functions.deleteAccountCard(event.target);
        idHighest.textContent = accountList.highestBalance();
        idLowest.textContent = accountList.lowestBalance();
    }
}

idMiddleContainer.addEventListener("click", accountButtonSelector);
idCreateAcctButton.addEventListener("click", accountCreateButton);