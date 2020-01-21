import React from 'react';
import AccountCard from './MyAccountsCard.js';
import { AppContext } from '../app-context.js';

class AccountCardsList extends React.Component {
    static contextType = AppContext;

    render() {
        const cardList = this.context.accounts.listArray.map((account, i) => {
            return (
                <AccountCard
                    key={i}
                    handleDelete={this.props.handleDelete}
                    handleWarning={this.props.handleWarning}
                    balanceChecker={this.props.balanceChecker}
                    index={i}
                    account={account}
                />
            )
        })

        return (
            <div className="account-display">
                {cardList}
            </div>
        )
    }
}

export default AccountCardsList;