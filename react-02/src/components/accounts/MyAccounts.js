import React from 'react';
import AccountCreateDisplay from './MyCreateAccountDisplay.js'
import AccountCardsList from './MyAccountsCards.js';
import AccountBalancesDisplay from './MyAccountDisplay.js'
import { AccountController } from './account.js';
import './account-index.css';

class Accounts extends React.Component {
    constructor(props) {
        super(props);
        this.accounts = new AccountController('test');
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeposit = this.handleDeposit.bind(this);
        this.state = {
            listArray: this.accounts.listArray,
            acctName: "",
            acctBalance: "",
            highestName: "",
            highestBalance: "",
            lowestName: "",
            lowestBalance: "",
            totalBalance: "",
            changeBalance: "",
        };
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        let array = this.accounts.listArray;
        let accountNames = array.map(array => array.accountName);
        let matchingName = accountNames.find(account => account === this.state.acctName);
        if (this.state.acctName === matchingName || this.state.acctName === "") {
            alert("Duplicate or no account name entered!");
        }
        else {
            this.accounts.addAccount(this.state.acctName, this.state.acctBalance);
        }
        this.setState({
            listArray: this.accounts.listArray,
            acctName: "",
            acctBalance: "",
        })
        this.balanceChecker(this.accounts.listArray);
        event.preventDefault();
    }

    handleDeposit = (i) => {
        if (this.state.changeBalance < 0.01) {
            alert("Please enter a number greater than zero!");
        }
        else {
            this.accounts.listArray[i].accountDeposit(Number(this.state.changeBalance));
        }
        this.setState({
            listArray: this.accounts.listArray,
            changeBalance: "",
        })
        this.balanceChecker(this.accounts.listArray);
        this.accountInput.value = '';
        
    }

    handleWithdraw = (i) => {
        if (this.state.changeBalance < 0.01) {
            alert("Please enter a number greater than zero!");
        } 
        else {
            this.accounts.listArray[i].accountWithdraw(Number(this.state.changeBalance));
        }
        this.setState({
            listArray: this.accounts.listArray,
            changeBalance: "",
        })
        this.balanceChecker(this.accounts.listArray);
        
        
    }

    handleDelete = (i) => {
        this.accounts.listArray.splice(i, 1);
        this.setState({
            listArray: this.accounts.listArray,
        })
        this.balanceChecker(this.accounts.listArray);
    }

    balanceChecker = (array) => {
        if (this.accounts.listArray.length > 0) {
            this.setState({
                highestName: this.accounts.highestBalance(array),
                highestBalance: this.accounts.highestBalanceNumber(array),
                lowestName: this.accounts.lowestBalance(array),
                lowestBalance: this.accounts.lowestBalanceNumber(array),
                totalBalance: this.accounts.totalBalances(array),
            });
        }
        else {
            this.setState({
                highestName: "",
                highestBalance: "",
                lowestName: "",
                lowestBalance: "",
                totalBalance: "",
            });
        }
    }

    clearInput = (input) => {
        this.accountInput = input
    }

    render() {
        return (
            <div className="wrapper">
                <div className="container-left">
                    <span className="container-left-header display-header">Create New Account</span>
                    <AccountCreateDisplay
                        handleSubmit={this.handleSubmit}
                        handleOnChange={this.handleOnChange}
                        acctName={this.state.acctName}
                        acctBalance={this.state.acctBalance}
                    />
                </div>
                <div className="container-middle">
                    <span className="container-middle-header display-header">Accounts Display</span>
                    <AccountCardsList
                        listArray={this.accounts.listArray}
                        handleOnChange={this.handleOnChange}
                        changeBalance={this.state.changeBalance}
                        handleDeposit={this.handleDeposit}
                        handleWithdraw={this.handleWithdraw}
                        handleDelete={this.handleDelete}
                        clearInput={this.clearInput}
                    />
                </div>
                <div className="container-right">
                    <span className="container-right-header display-header">Accounts Information</span>
                    <AccountBalancesDisplay
                        highestName={this.state.highestName}
                        highestBalance={this.state.highestBalance}
                        lowestName={this.state.lowestName}
                        lowestBalance={this.state.lowestBalance}
                        totalBalance={this.state.totalBalance}
                    />
                </div>
            </div>
        );
    }
}

export default Accounts;