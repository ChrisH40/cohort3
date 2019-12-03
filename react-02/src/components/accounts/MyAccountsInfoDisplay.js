import React from 'react';

class AccountBalancesDisplay extends React.Component {

    render() {
        return (
            <div>
                <div className="balances-display top-display">
                    <span className="container-right-display-text">
                        Highest Account Balance:
                    </span>
                    <p className="balances-display-balance">{this.props.highestName}</p>
                    <p className="balances-display-balance-number">{this.props.highestBalance}</p>
                </div>
                <div className="balances-display middle-display">
                    <span className="container-right-display-text">
                        Lowest Account Balance:
                    </span>
                    <p className="balances-display-balance">{this.props.lowestName}</p>
                    <p className="balances-display-balance-number">{this.props.lowestBalance}</p>
                </div>
                <div className="balances-display bottom-display">
                    <span className="container-right-display-text">
                        Total Account Balances:
                    </span>
                    <p className="balances-display-balance-total">{this.props.totalBalance}</p>
                </div>
            </div>
        )
    }
}

export default AccountBalancesDisplay;