import React from 'react';
import { AppContext } from '../app-context.js';
import AccountCreateDisplay from './MyAccountsCreateDisplay.js';
import AccountCardsList from './MyAccountsCardsList.js';
import AccountBalancesDisplay from './MyAccountsInfoDisplay.js';
import './account-index.css';

class Accounts extends React.Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        let array = this.context.accounts.listArray;
        let accountNames = array.map(array => array.accountName);
        let matchingName = accountNames.find(account => account === this.context.state.acctName);
        if (this.context.state.acctName === matchingName || this.context.state.acctName === "") {
            this.context.handleStateChange([{ state: "warningSuccess", newState: false }]);
            this.handleWarning("acctfail");
        }
        else {
            this.context.accounts.addAccount(this.context.state.acctName, this.context.state.acctBalance);
            this.context.handleStateChange([{ state: "warningSuccess", newState: true }]);
            this.handleWarning("acctsuccess");
        }
        this.context.handleStateChange([
            { state: "acctName", newState: "" },
            { state: "acctBalance", newState: "" },
        ]);
        this.balanceChecker(this.context.accounts.listArray);
        event.preventDefault();
    }

    handleWarning = (alert) => {
        if (alert === "acctsuccess") {
            this.context.handleStateChange([{ state: "warningMsg", newState: "Account Created!" }]);
            setTimeout(() => {
                this.context.handleStateChange([{ state: "warningMsg", newState: "" }]);
            }, 3000);
        }
        else if (alert === "transsuccess") {
            this.context.handleStateChange([{ state: "warningMsg", newState: "Transaction Successful!" }]);
            setTimeout(() => {
                this.context.handleStateChange([{ state: "warningMsg", newState: "" }]);
            }, 3000);
        }
        else if (alert === "acctfail") {
            this.context.handleStateChange([{ state: "warningMsg", newState: "Account Not Created. Duplicate name." }]);
            setTimeout(() => {
                this.context.handleStateChange([{ state: "warningMsg", newState: "" }]);
            }, 3000);
        }
        else if (alert === "transfail") {
            this.context.handleStateChange([{ state: "warningMsg", newState: "Transaction Failed. Invalid amount." }]);
            setTimeout(() => {
                this.context.handleStateChange([{ state: "warningMsg", newState: "" }]);
            }, 3000);
        }
    }


    handleDelete = (i) => {
        this.context.accounts.deleteAccount(this.context.accounts.listArray, i);
        this.balanceChecker(this.context.accounts.listArray);
    }

    balanceChecker = (array) => {
        if (this.context.accounts.listArray.length > 0) {
            this.context.handleStateChange([
                { state: "highestName", newState: this.context.accounts.highestBalance(array) },
                { state: "highestBalance", newState: this.context.accounts.highestBalanceNumber(array) },
                { state: "lowestName", newState: this.context.accounts.lowestBalance(array) },
                { state: "lowestBalance", newState: this.context.accounts.lowestBalanceNumber(array) },
                { state: "totalBalance", newState: this.context.accounts.totalBalances(array) },
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
                        handleDelete={this.handleDelete}
                        handleWarning={this.handleWarning}
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