
export class Account {

    constructor(accountName, startingBalance) {
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

    accountBalance() {
        return this.startingBalance;
    }

    
};

export class AccountController {

    constructor(listName) {
        this.listName = listName;
        this.listArray = [];
    }

    addAccount(accountName, startingBalance) {
        let account = new Account(accountName, startingBalance);
        this.listArray.push(account);
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

    deleteAccount(search) {
        let array = this.listArray;
        let nameArrays = array.map(a => a.accountName);
        let searchedName = (name) => {
            return name == search;
        }
        let keyElement = nameArrays.findIndex(searchedName);
        array.splice(keyElement, 1);
        return array;
    }

    findAccount(search) {
        let array = this.listArray;
        let nameArrays = array.map(a => a.accountName);
        let searchedName = (name) => {
            return name == search;
        }
        let keyElement = nameArrays.findIndex(searchedName);
        return keyElement;
    }
};