
export class Account {

    constructor(accountName, startingBalance) {
        this.accountName = accountName;
        this.startingBalance = startingBalance;
    }

    accountDeposit(amount) {
        this.startingBalance = this.startingBalance + amount;
        return this.startingBalance;
    }

    accountWithdraw(amount) {
        this.startingBalance = this.startingBalance - amount;
        return this.startingBalance;
    }

    accountBalance() {
        return this.startingBalance;
    }
};


export class AccountController {

    constructor(accountList) {
        this.accountList = accountList;
    }   
}