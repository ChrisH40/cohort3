import React from 'react';
import { AppContext } from '../app-context.js';
import AccountCreateDisplay from './MyAccountsCreateDisplay.js';
import AccountCardsList from './MyAccountsCardsList.js';
import AccountBalancesDisplay from './MyAccountsInfoDisplay.js';
import { AccountController } from './account.js';
import './account-index.css';

class Accounts extends React.Component {

    constructor(props) {
        super(props);
        this.accounts = new AccountController('My Accounts');
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            acctName: "",
            acctBalance: "",
            highestName: "",
            highestBalance: "",
            lowestName: "",
            lowestBalance: "",
            totalBalance: "",
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
            acctName: "",
            acctBalance: "",
        })
        this.balanceChecker(this.accounts.listArray);
        event.preventDefault();
    }

    handleDelete = (i) => {
        this.accounts.deleteAccount(this.accounts.listArray, i);
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

    render() {
        return (
            <AppContext.Consumer>
                {({ state, theme }) => (
                    <div className="wrapper" style={{ backgroundColor: theme[state.themeValue].background, color: theme[state.themeValue].color}}>
                        <div className="container-left">
                            <span className="display-header">Create New Account</span>
                            <AccountCreateDisplay
                                handleSubmit={this.handleSubmit}
                                handleOnChange={this.handleOnChange}
                                acctName={this.state.acctName}
                                acctBalance={this.state.acctBalance}
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
                            <AccountBalancesDisplay
                                highestName={this.state.highestName}
                                highestBalance={this.state.highestBalance}
                                lowestName={this.state.lowestName}
                                lowestBalance={this.state.lowestBalance}
                                totalBalance={this.state.totalBalance}
                            />
                        </div>
                    </div>
                )}
            </AppContext.Consumer>
        );
    }
}

export default Accounts;