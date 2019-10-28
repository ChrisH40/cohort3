
class Account {

    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    accountDeposit(deposit) {
        this.balance = this.balance + deposit;
        return this.balance;
    }

    accountWithdraw(withdraw) {
        this.balance = this.balance - withdraw;
        return this.balance;
    }

    accountBalance() {
        return this.balance;
    }
};

export default Account;