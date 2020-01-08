import React from 'react';
import AccountCard from './MyAccountsCard.js';

class AccountCardsList extends React.Component {

    render() {
        const cardList = this.props.listArray.map((account, i) => {
            return (
                <AccountCard
                    key={i}
                    listArray={this.props.listArray}
                    handleDelete={this.props.handleDelete}
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