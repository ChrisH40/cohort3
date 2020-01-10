import React from 'react';
import { AppContext } from '../app-context.js';
import AccountCreateDisplay from './MyAccountsCreateDisplay.js';
import AccountCardsList from './MyAccountsCardsList.js';
import AccountBalancesDisplay from './MyAccountsInfoDisplay.js';
import { accounts } from '../app-context.js';
import './account-index.css';

class Accounts extends React.Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.accounts = accounts;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        let array = this.accounts.listArray;
        let accountNames = array.map(array => array.accountName);
        let matchingName = accountNames.find(account => account === this.context.state.acctName);
        if (this.context.state.acctName === matchingName || this.context.state.acctName === "") {
            alert("Duplicate or no account name entered!");
        }
        else {
            this.accounts.addAccount(this.context.state.acctName, this.context.state.acctBalance);
        }
        this.context.handleStateChange([
            { state: "acctName", newState: "" },
            { state: "acctBalance", newState: "" },
        ]);
        this.balanceChecker(this.accounts.listArray);
        event.preventDefault();
    }

    handleDelete = (i) => {
        this.accounts.deleteAccount(this.accounts.listArray, i);
        this.balanceChecker(this.accounts.listArray);
    }

    balanceChecker = (array) => {
        if (accounts.listArray.length > 0) {
            this.context.handleStateChange([
                { state: "highestName", newState: accounts.highestBalance(array) },
                { state: "highestBalance", newState: accounts.highestBalanceNumber(array) },
                { state: "lowestName", newState: accounts.lowestBalance(array) },
                { state: "lowestBalanceNumber", newState: accounts.lowestBalanceNumber(array) },
                { state: "totalBalance", newState: accounts.totalBalances(array) },
            ]);
        }
        else this.context.handleStateChange([
            { state: "highestName", newState: "" },
            { state: "highestBalance", newState: "" },
            { state: "lowestName", newState: "" },
            { state: "lowestBalanceNumber", newState: "" },
            { state: "totalBalance", newState: "" },
        ]);
    };

    render() {
        return (
            <div className="wrapper" style={{ backgroundColor: this.context.theme[this.context.state.themeValue].background, color: this.context.theme[this.context.state.themeValue].color }}>
                <div className="container-left">
                    <span className="display-header">Create New Account</span>
                    <AccountCreateDisplay
                        handleSubmit={this.handleSubmit}
                    />
                </div>
                <div className="container-middle">
                    <span className="display-header">Accounts Display</span>
                    <AccountCardsList
                        listArray={this.accounts.listArray}
                        handleDelete={this.handleDelete}
                        balanceChecker={this.balanceChecker}
                    />
                </div>
                <div className="container-right">
                    <AccountBalancesDisplay />
                </div>
            </div>

        );
    }
}

export default Accounts;