import React from 'react';
import AccountCard from './MyAccountsCard.js'

class AccountCardsList extends React.Component {

    render() {
        const cardList = this.props.listArray.map((account, i) => {
            return <AccountCard
                listArray={this.props.listArray}
                handleDelete={this.props.handleDelete}
                balanceChecker={this.props.balanceChecker}
                index={i}
                key={account.key}
                name={account.accountName}
                balance={account.startingBalance}
            />
        })

        return (
            <div className="account-display">
                {cardList}
            </div>
        )
    }
}

export default AccountCardsList;