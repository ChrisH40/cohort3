import React from 'react';

class AccountCardsList extends React.Component {

    render() {
        const array = this.props.listArray;
        const accountCards = array.map((account) => {
            return (
                <div
                    key={account.key}
                    id={account.key}
                    className="account-card"
                >
                    <form>
                        <label className="account-name">
                            {account.accountName}
                        </label>
                        <label className="account-balance">
                            ${account.startingBalance.toFixed(2)}
                        </label>
                        <input type="number" className="account-input" />
                        <input type="button" value="Deposit" className="deposit-button account-button" />
                        <input type="button" value="Withdraw" className="withdraw-button account-button" />
                        <input type="button" value="Delete Account" className="delete-button account-button" />
                    </form>
                </div>
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