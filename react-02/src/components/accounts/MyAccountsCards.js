import React from 'react';

class AccountCardsList extends React.Component {

    render() {
        const accountCards = this.props.listArray.map((account, i) => {
            return (
                <form
                    key={account.key}
                    id={account.key}
                    className="account-card">
                    <label id={account.key} className="account-name">
                        {account.accountName}
                    </label>
                    <label id={account.key} className="account-balance">
                        {`$${(account.startingBalance).toFixed(2)}`}
                    </label>
                    <input type="number" id={account.key} className="account-input" name="activeBalance" onChange={this.props.handleOnChange} ref={this.props.clearInput}/>
                    <input type="button" id={account.key} value="Deposit" className="deposit-button account-button" onClick={() => this.props.handleDeposit(i)} />
                    <input type="button" id={account.key} value="Withdraw" className="withdraw-button account-button" onClick={() => this.props.handleWithdraw(i)} />
                    <input type="button" id={account.key} value="Delete Account" className="delete-button account-button" onClick={() => this.props.handleDelete(i)}/>
                </form>
            )
        }
        );

        return (
            <div>
                {accountCards}
            </div>
        )
    }
}

export default AccountCardsList;
