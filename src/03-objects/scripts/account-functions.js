// Target div

/*
<div class="account-card" id="idAcctCard">
    <span class="account-name" id="idAccountName">New Account</span>
    <span class="account-balance" id="idAccountBalance">$0.00</span>
    <input type="number" class="account-input">
    <input type="submit" value="Deposit" class="button account-button" id="idDepositButton">
    <input type="submit" value="Withdraw" class="button account-button" id="idWithdrawButton">
</div>
*/


export const functions = {
    createAccount: (parent) => {
        const newAccount = document.createElement("div");
        parent.appendChild(newAccount);
        const newSpanName = document.createElement("span");
        newSpanName.className = "account-name";
        newAccount.appendChild(newSpanName);
        const newSpanBalance = document.createElement("span");
        newSpanBalance.className = "account-balance";
        newAccount.appendChild(newSpanBalance);
        const newInput = document.createElement("input");
        newInput.type = "number";
        newAccount.appendChild(newInput);
        const newDepositButton = document.createElement("button");
        newDepositButton.textContent = "Deposit";
        newAccount.appendChild(newDepositButton);
        const newWithdrawButton = document.createElement("button");
        newWithdrawButton.textContent = "Withdraw";
        newAccount.appendChild(newWithdrawButton);

        
        // newAccount.setAttribute("")
        // const 
    }
}

