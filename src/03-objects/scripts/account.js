import functions from './account-functions.js';

export class Account {

    constructor(accountName, startingBalance, accountID) {
        this.accountName = accountName;
        this.startingBalance = Number(startingBalance);
        this.accountID = accountID;
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

    constructor(listName) {
        this.listName = listName;
        this.listArray = [];
    }

    addAccount(accountName, startingBalance, counter) {
        let account = new Account(accountName, startingBalance, counter);
        return this.listArray.push(account);
    }

    totalBalances() {
        let array = this.listArray;
        let balanceArray = array.map(a => a.startingBalance);
        let totalBalance = balanceArray.reduce((a, b) =>
            a + b, 0);
        return totalBalance;
    }

    lowestBalance() {
        let array = this.listArray;
        let balanceArray = array.map(a => a.startingBalance);
        let lowestNumber = Math.min(...balanceArray);
        let searchedBalance = (balance) => {
            return balance == lowestNumber;
        }
        let keyElement = balanceArray.findIndex(searchedBalance);
        return array[keyElement].accountName;
    }

    lowestBalanceNumber() {
        let array = this.listArray;
        let balanceArray = array.map(a => a.startingBalance);
        let lowestNumber = Math.min(...balanceArray);
        return "$" + lowestNumber.toFixed(2);
    }

    highestBalance() {
        let array = this.listArray;
        let balanceArray = array.map(a => a.startingBalance);
        let highestNumber = Math.max(...balanceArray);
        let searchedBalance = (balance) => {
            return balance == highestNumber;
        }
        let keyElement = balanceArray.findIndex(searchedBalance);
        return array[keyElement].accountName;
    }

    highestBalanceNumber() {
        let array = this.listArray;
        let balanceArray = array.map(a => a.startingBalance);
        let highestNumber = Math.max(...balanceArray);
        return "$" + highestNumber.toFixed(2);
    }

    deleteAccount(search) {
        let array = this.listArray;
        let IDArray = array.map(a => a.accountID);
        let searchedID = (ID) => {
            return ID == search;
        }
        let keyElement = IDArray.findIndex(searchedID);
        array.splice(keyElement, 1);
        return array;
    }

    findAccount(search) {
        let array = this.listArray;
        let IDArray = array.map(a => a.accountID);
        let searchedID = (ID) => {
            return ID == search;
        }
        let keyElement = IDArray.findIndex(searchedID);
        return keyElement;
    }
};