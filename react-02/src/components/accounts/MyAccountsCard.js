import React from 'react';

class AccountCard extends React.Component {
    
    constructor() {
        super();
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleDeposit = this.handleDeposit.bind(this);
        this.handleWithdraw = this.handleWithdraw.bind(this);
        this.state = {
            changeBalance: "",
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleDeposit(i) {
        if (this.state.changeBalance < 0.01) {
            alert("Please enter a number greater than zero!");
        }
        else {
            this.props.listArray[i].accountDeposit(Number(this.state.changeBalance));
        }
        this.setState({
            changeBalance: "",
        })
        this.props.balanceChecker(this.props.listArray);
    }

    handleWithdraw(i) {
        if (this.state.changeBalance < 0.01) {
            alert("Please enter a number greater than zero!");
        } 
        else {
            this.props.listArray[i].accountWithdraw(Number(this.state.changeBalance));
        }
        this.setState({
            changeBalance: "",
        })
        this.props.balanceChecker(this.props.listArray);
    }

    render() {
        return (
            <div className="account-card">
                <form>
                    <label className="account-name">
                        {this.props.name}
                    </label>
                    <label className="account-balance">
                        {`$${(this.props.balance).toFixed(2)}`}
                    </label>
                    <input type="number" name="changeBalance" value={this.state.changeBalance} className="account-input" onChange={this.handleOnChange} />
                    <input type="button" value="Deposit" className="deposit-button account-button" onClick={() => this.handleDeposit(this.props.index) } />
                    <input type="button" value="Withdraw" className="withdraw-button account-button" onClick={() => this.handleWithdraw(this.props.index)} />
                    <input type="button" value="Delete Account" className="delete-button account-button" onClick={() => this.props.handleDelete(this.props.index)} />
                </form>
            </div>
        )
    }
}

export default AccountCard;