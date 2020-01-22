import React from 'react';
import { AppContext } from '../app-context.js';

class AccountCard extends React.Component {
    static contextType = AppContext;

    constructor() {
        super();
        this.state = {
            changeBalance: "",
        }
    };

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    handleDeposit(i) {
        if (this.state.changeBalance < 0.01) {
            this.context.handleStateChange([{ state: "acctWarningSuccess", newState: false }]);
            this.props.handleWarning("transfail", this.context.accounts.listArray[i].accountName);
        }
        else {
            this.context.accounts.listArray[i].accountDeposit(Number(this.state.changeBalance));
            this.context.handleStateChange([{ state: "acctWarningSuccess", newState: true }]);
            this.props.handleWarning("transsuccess", this.context.accounts.listArray[i].accountName);
        }
        this.setState({
            changeBalance: "",
        })
        this.props.balanceChecker(this.context.accounts.listArray);
    };

    handleWithdraw(i) {
        if (this.state.changeBalance < 0.01) {
            this.props.handleWarning("transfail", this.context.accounts.listArray[i].accountName);
        }
        else {
            this.context.accounts.listArray[i].accountWithdraw(Number(this.state.changeBalance));
            this.props.handleWarning("transsuccess", this.context.accounts.listArray[i].accountName);
        }
        this.setState({
            changeBalance: "",
        })
        this.props.balanceChecker(this.context.accounts.listArray);
    };

    render() {
        return (
            <div className="account-card">
                <label className="account-name">
                    {this.props.account.accountName}
                </label>
                <label className="account-balance">
                    {`$${(this.props.account.startingBalance).toFixed(2)}`}
                </label>
                <input
                    type="number"
                    name="changeBalance"
                    placeholder="amt."
                    value={this.state.changeBalance}
                    className="account-input"
                    onChange={this.handleOnChange} />
                <input
                    type="button"
                    value="Deposit"
                    className="account-button"
                    onClick={() => this.handleDeposit(this.props.index)} />
                <input
                    type="button"
                    value="Withdraw"
                    className="account-button"
                    onClick={() => this.handleWithdraw(this.props.index)} />
                <input
                    type="button"
                    value="Delete Account"
                    className="account-button"
                    onClick={() => this.props.handleDelete(this.props.index)} />
            </div>
        )
    }
}

export default AccountCard;