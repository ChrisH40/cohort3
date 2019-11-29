
// --- From cohort3/src/03-objects/scripts/account.js --- 

export class Account {

    constructor(key, accountName, startingBalance) {
        this.key = Number(key)
        this.accountName = accountName;
        this.startingBalance = Number(startingBalance);
    }

    accountDeposit(amount) {
        this.startingBalance = this.startingBalance + amount;
        return this.startingBalance;
    }

    accountWithdraw(amount) {
        this.startingBalance = this.startingBalance - amount;
        return this.startingBalance;
    }

    accountBalance(account) {
        return account.startingBalance;
    }
};

export class AccountController {

    constructor(listName) {
        this.listName = listName;
        this.listArray = [];
        this.counter = 0;
    }

    addAccount(accountName, startingBalance) {
        this.counter++
        let account = new Account(this.counter, accountName, startingBalance);
        this.listArray.push(account);
        return account;
    }

    totalBalances(array) {
        let balanceArray = array.map(a => a.startingBalance);
        let totalBalance = balanceArray.reduce((sum, num) => sum + num, 0);
        return "$" + totalBalance.toFixed(2);
    }

    lowestBalance(array) {
        let balanceArray = array.map(a => a.startingBalance);
        let highestNumber = Math.min(...balanceArray);
        let found_index = balanceArray.indexOf(highestNumber);
        return array[found_index].accountName;
    }

    lowestBalanceNumber(array) {
        let balanceArray = array.map(a => a.startingBalance);
        let lowestNumber = Math.min(...balanceArray);
        return "$" + lowestNumber.toFixed(2);
    }

    highestBalance(array) {
        let balanceArray = array.map(a => a.startingBalance);
        let highestNumber = Math.max(...balanceArray);
        let found_index = balanceArray.indexOf(highestNumber);
        return array[found_index].accountName;
    }

    highestBalanceNumber(array) {
        let balanceArray = array.map(a => a.startingBalance);
        let highestNumber = Math.max(...balanceArray);
        return "$" + highestNumber.toFixed(2);
    }

    deleteAccount(array, accountKey) {
        let array_keys = array.map(account => account.key);
        let found_key = array_keys.find((key)=> key == accountKey)
        let found_index = array_keys.indexOf(found_key);
        array.splice(found_index, 1);
        return array;
    }

    findAccount(array, accountKey) {
        let array_keys = array.map(account => account.key);
        let found_key = array_keys.find((key) => key == accountKey);
        let found_index = array_keys.indexOf(found_key);
        return found_index;
    }
};