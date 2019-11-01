
const functions = {

    createAccountDiv: (parent, accountName, startingBalance, accountID) => {
        let accountNameNoSpace = accountName.replace(/\s/g, "-");
        const newAccount = document.createElement("div");
        newAccount.id = `id-${accountID}`.toLowerCase();
        newAccount.setAttribute("class", "account-card");
        newAccount.setAttribute("counter", accountID);
        parent.appendChild(newAccount);
        const newSpanName = document.createElement("span");
        newSpanName.setAttribute("class", "account-name");
        newSpanName.textContent = accountName;
        newAccount.appendChild(newSpanName);
        const newSpanBalance = document.createElement("span");
        newSpanBalance.setAttribute("class", "account-balance");
        newSpanBalance.textContent = "$" + Number(startingBalance).toFixed(2);
        newAccount.appendChild(newSpanBalance);
        const newInput = document.createElement("input");
        newInput.type = "number";
        newInput.id = `id-${accountNameNoSpace}-input`.toLowerCase();
        newInput.setAttribute("class", "account-input");
        newAccount.appendChild(newInput);
        const newDepositButton = document.createElement("button");
        newDepositButton.textContent = "Deposit";
        newDepositButton.id = `id-${accountNameNoSpace}-deposit-button`.toLowerCase();
        newDepositButton.setAttribute("class", "deposit-button account-button");
        newAccount.appendChild(newDepositButton);
        const newWithdrawButton = document.createElement("button");
        newWithdrawButton.textContent = "Withdraw";
        newWithdrawButton.id = `id-${accountNameNoSpace}-withdraw-button`.toLowerCase();
        newWithdrawButton.setAttribute("class","withdraw-button account-button");
        newAccount.appendChild(newWithdrawButton);
        const newDeleteButton = document.createElement("button");
        newDeleteButton.textContent = "Delete Account";
        newDeleteButton.id = `id-${accountNameNoSpace}-delete-button`.toLowerCase();
        newDeleteButton.setAttribute("class","delete-button account-button");
        newAccount.appendChild(newDeleteButton);
        console.log(newAccount);
    },

        deleteAccountCard: (button) => {
            return button.parentNode.parentNode.removeChild(button.parentNode);
        }
};

export default functions;
