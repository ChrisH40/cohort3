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
        this.context.handleStateClear(["acctName", "acctBalance"]);
        this.balanceChecker(this.accounts.listArray);
        event.preventDefault();
    }

    handleDelete = (i) => {
        this.accounts.deleteAccount(this.accounts.listArray, i);
        this.balanceChecker(this.accounts.listArray);
    }

    balanceChecker = (array) => {
        if (accounts.listArray.length > 0) {
            this.context.handleStateFunctions([
                { state: "highestName", func: accounts.highestBalance(array) },
                { state: "highestBalance", func: accounts.highestBalanceNumber(array) },
                { state: "lowestName", func: accounts.lowestBalance(array) },
                { state: "lowestBalanceNumber", func: accounts.lowestBalanceNumber(array) },
                { state: "totalBalance", func: accounts.totalBalances(array) },
            ]);
        }
        else this.context.handleStateClear([
            "highestName",
            "highestBalance",
            "lowestName",
            "lowestBalance",
            "totalBalance"
        ]);
    };

    render() {
        return (
            <AppContext.Consumer>
                {({ state, theme }) => (
                    <div className="wrapper" style={{ backgroundColor: theme[state.themeValue].background, color: theme[state.themeValue].color }}>
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
                )}
            </AppContext.Consumer>
        );
    }
}

export default Accounts;