import React from 'react';
import AccountCardsList from './MyAccountsCards.js';
import 'C:/code/cohort3/react-02/src/account-index.css';
import { AccountController } from './account.js';


class Accounts extends React.Component {
    constructor(props) {
        super(props);
        this.accounts = new AccountController('test');
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            listArray: this.accounts.listArray,
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
        this.accounts.addAccount(this.state.acctName, this.state.acctBalance);
        this.setState({
            listArray: this.accounts.listArray,
            acctName: "",
            acctBalance: "",
        })
        this.balanceChecker(this.accounts.listArray);
        event.preventDefault();

    }

    balanceChecker = (array) => {
        this.setState({
            highestName: this.accounts.highestBalance(array),
            highestBalance: this.accounts.highestBalanceNumber(array),
            lowestName: this.accounts.lowestBalance(array),
            lowestBalance: this.accounts.lowestBalanceNumber(array),
            totalBalance: this.accounts.totalBalances(array),
        });
    }

    render() {

        return (
            <div className="wrapper">
                <div className="container-left">
                    <span className="container-left-header display-header">Create New Account</span>
                    <div className="create-account-display">
                        <form onSubmit={this.handleSubmit}>
                            <label className="create-account-text">
                                Name:
                                <input type="text" name="acctName" className="create-account-name-input" value={this.state.acctName} onChange={this.handleOnChange} />
                            </label>
                            <label className="create-account-text">
                                Balance:
                                <input type="number" name="acctBalance" className="create-account-balance-input" value={this.state.acctBalance} onChange={this.handleOnChange} />
                            </label>
                            <input type="submit" value="Submit" className="button create-account-button" />
                        </form>
                    </div>
                </div>
                <div className="container-middle">
                    <span className="container-middle-header display-header">Accounts</span>
                    <div className="account-display">
                        <AccountCardsList
                            listArray={this.accounts.listArray}
                        />
                    </div>
                </div>
                <div className="container-right">
                    <span className="container-right-header display-header">
                        Accounts Information
                    </span>
                    <div className="balances-display top-display">
                        <span className="container-right-display-text">
                            Highest Account Balance:
                        </span>
                        <p className="balances-display-balance">{this.state.highestName}</p>
                        <p className="balances-display-balance-number">{this.state.highestBalance}</p>
                    </div>
                    <div className="balances-display middle-display">
                        <span className="container-right-display-text">
                            Lowest Account Balance:
                        </span>
                        <p className="balances-display-balance">{this.state.lowestName}</p>
                        <p className="balances-display-balance-number">{this.state.lowestBalance}</p>
                    </div>
                    <div className="balances-display bottom-display">
                        <span className="container-right-display-text">
                            Total Account Balances:
                        </span>
                        <p className="balances-display-balance-total">{this.state.totalBalance}</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Accounts;