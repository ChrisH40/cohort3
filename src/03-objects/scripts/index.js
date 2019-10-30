import { Account, AccountController } from './account.js';
import functions from './account-functions.js';

export const accountList = new AccountController("Account List");

const accountCreateButton = () => {
    functions.createAccountDiv(idAccountDisplay, idAccountNameInput.value, idAccountBalanceInput.value);
    accountList.addAccount(idAccountNameInput.value, idAccountBalanceInput.value);
    idAccountNameInput.value = "";
    idAccountBalanceInput.value = "";
    console.log(accountList)}

const accountButtonSelector = (event) => {
    if (event.target.textContent == "Deposit") {
        let name = event.target.parentNode.children[0].textContent;
        let index = accountList.findAccount(name);
        let input = Number(event.target.parentNode.children[3].value);
        accountList.listArray[index].accountDeposit(input);
        let balance = event.target.parentNode.children[2]
        balance.textContent = Number(accountList.listArray[index].accountBalance()).toFixed(2)
        console.log(accountList.listArray[index].startingBalance);
    } if (event.target.textContent == "Withdraw") {
        newAccount.accountWithdraw(Number(idAccountInput.value));
        idAccountBalance.innerText = "$" + newAccount.accountBalance();
        idAccountInput.value = "";
        // } if (for DeleteButton...)
    }
}

idMiddleContainer.addEventListener("click", accountButtonSelector);
idCreateAcctButton.addEventListener("click", accountCreateButton);