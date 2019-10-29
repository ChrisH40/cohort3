import { Account, AccountController } from './account.js';
import { functions } from './account-functions.js';

const newAccountController = new AccountController("John", "Smith", "DOG");


const newAccount = new Account("New Account", 100);
// console.log(newAccount)

const buttonSelector = (event) => {
    if (event.target.value == "Deposit") {
        newAccount.accountDeposit(Number(idAccountInput.value));
        idAccountBalance.innerText = "$" + newAccount.accountBalance();
        idAccountInput.value = "";
    } if (event.target.value == "Withdraw") {
        newAccount.accountWithdraw(Number(idAccountInput.value));
        idAccountBalance.innerText = "$" + newAccount.accountBalance();
        idAccountInput.value = "";
    }
}



console.log(newAccountController)

idMiddleContainer.addEventListener("click", buttonSelector);

// newAccountController.catFood = newAccount

// console.log(AccountController)