import React from 'react';

class AccountCardsList extends React.Component {

    render() {
        const accountCards = this.props.listArray.map((account, i) => {
            return (
                <div 
                    key={account.key}
                    id={account.key}
                    className="account-card">
                    <form id={account.key}>
                        <label id={account.key} className="account-name">
                            {account.accountName}
                        </label>
                        <label id={account.key} className="account-balance">
                            {`$${(account.startingBalance).toFixed(2)}`}
                        </label>
                        <input type="number" id={account.key} min="0.01" step="0.01" className="account-input" name="changeBalance" onChange={this.props.handleOnChange} ref={this.props.clearInput} />
                        <input type="button" id={account.key} value="Deposit" className="deposit-button account-button" onClick={() => this.props.handleDeposit(i)} />
                        <input type="button" id={account.key} value="Withdraw" className="withdraw-button account-button" onClick={() => this.props.handleWithdraw(i)} />
                        <input type="button" id={account.key} value="Delete Account" className="delete-button account-button" onClick={() => this.props.handleDelete(i)} />
                    </form>
                </div>
            )
        }
        );

        return (
            <div className="account-display">
                {accountCards}
            </div>
        )
    }
}

export default AccountCardsList;
