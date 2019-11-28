import React from 'react';
// import AccountsCard from './MyAccountsCards.js'
import 'C:/code/cohort3/react-02/src/account-index.css';
import { AccountController } from './account.js';


class Accounts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listArray: [],
            counter: 0,
            acctName: "",
            acctBalance: "",
            highestName: "",
            highestBalance: "",
            lowestName: "",
            lowestBalance: "",
            totalBalance: "",
        };
        this.accounts = new AccountController('test');
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log(this.accounts.listArray);
        event.preventDefault();
        
    }

    balanceChecker = (array) => {
        console.log(this.accounts.highestBalance(array));
        console.log(this.accounts.highestBalanceNumber(array));
        console.log(this.accounts.lowestBalance(array));
        console.log(this.accounts.lowestBalanceNumber(array));
        console.log(this.accounts.totalBalances(array));
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
                            <input type="submit" value="Submit" className="button create-account-button" id="idCreateAcctButton" />
                        </form>
                    </div>
                </div>
                <div className="container-middle" id="idMiddleContainer">
                    <span className="container-middle-header display-header">Accounts</span>
                    <div className="account-display" id="idAccountDisplay">
                        {/* <!-- created account divs go here --> */}
                    </div>
                </div>
                <div className="container-right">
                    <span className="container-right-header display-header">Accounts Information</span>
                    <div className="balances-display top-display" id="idHighestDisplay">
                        <span className="container-right-display-text">Highest Account Balance:</span>
                        <p className="balances-display-balance" id="idHighest">{this.state.highestName}</p>
                        <p className="balances-display-balance-number" id="idHighestNumber">{this.state.highestBalance}</p>
                    </div>
                    <div className="balances-display middle-display" id="idLowestDisplay">
                        <span className="container-right-display-text">Lowest Account Balance:</span>
                        <p className="balances-display-balance" id="idLowest">{this.state.lowestName}</p>
                        <p className="balances-display-balance-number" id="idLowestNumber">{this.state.lowestBalance}</p>
                    </div>
                    <div className="balances-display bottom-display" id="idTotalDisplay">
                        <span className="container-right-display-text">Total Account Balances:</span>
                        <p className="balances-display-balance-total" id="idTotalNumber">{this.state.totalBalance}</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Accounts;