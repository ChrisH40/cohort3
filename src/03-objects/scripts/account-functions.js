import { Account, AccountController } from './account.js'

const functions = {

        createAccountDiv: (parent, accountName, startingBalance) => {
            let accountNameNoSpace = accountName.replace(/\s/g, "-");
            const newAccount = document.createElement("div");
            newAccount.id = `id-${accountNameNoSpace}`;
            newAccount.setAttribute("class", "account-card");
            parent.appendChild(newAccount);
            const newSpanName = document.createElement("span");
            newSpanName.setAttribute("class", "account-name");
            newSpanName.textContent = accountName;
            newAccount.appendChild(newSpanName);
            const dollarSign = document.createElement("span");
            dollarSign.textContent = "$"
            dollarSign.setAttribute("class", "dollar")
            newAccount.appendChild(dollarSign);
            const newSpanBalance = document.createElement("span");
            // newSpanBalance.id = `id-${accountNameNoSpace}-balance-display`;
            newSpanBalance.setAttribute("class", "account-balance");
            newSpanBalance.textContent = Number(startingBalance).toFixed(2);
            newAccount.appendChild(newSpanBalance);
            const newInput = document.createElement("input");
            newInput.type = "number";
            newInput.id = `id-${accountNameNoSpace}-input`;
            newInput.setAttribute("class", "account-input");
            newAccount.appendChild(newInput);
            const newDepositButton = document.createElement("button");
            newDepositButton.textContent = "Deposit";
            newDepositButton.id = `id-${accountNameNoSpace}-deposit-button`;
            newDepositButton.setAttribute("class", "deposit-button account-button");
            newAccount.appendChild(newDepositButton);
            const newWithdrawButton = document.createElement("button");
            newWithdrawButton.textContent = "Withdraw";
            newWithdrawButton.id = `id-${accountNameNoSpace}-withdraw-button`;
            newWithdrawButton.setAttribute("class","withdraw-button account-button");
            newAccount.appendChild(newWithdrawButton);
            const newDeleteButton = document.createElement("button");
            newDeleteButton.textContent = "Delete";
            newDeleteButton.id = `id-${accountNameNoSpace}-delete-button`;
            newDeleteButton.setAttribute("class","delete-button account-button");
            newAccount.appendChild(newDeleteButton);
        },
};

export default functions;
