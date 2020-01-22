import React from 'react';
import { AppContext } from '../app-context.js';

class AccountBalancesDisplay extends React.Component {
    static contextType = AppContext;

    render() {
        return (
            <div>
                <span className="container-right-display-text">Highest Account Balance:</span>
                <div className="balances-display top-display">
                    <p className="balances-display-balance">{this.context.state.highestName}</p>
                    <p className="balances-display-balance">{this.context.state.highestBalance}</p>
                </div>
                <span className="container-right-display-text">Lowest Account Balance:</span>
                <div className="balances-display middle-display">
                    <p className="balances-display-balance">{this.context.state.lowestName}</p>
                    <p className="balances-display-balance">{this.context.state.lowestBalance}</p>
                </div>
                <span className="container-right-display-text">Total Account Balances:</span>
                <div className="balances-display bottom-display">
                    <br/>
                    <p className="balances-display-balance-total">{this.context.state.totalBalance}</p>
                </div>
            </div>
        )
    }
}

export default AccountBalancesDisplay;