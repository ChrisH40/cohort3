import React from 'react';
import { AppContext } from '../app-context.js';

class AccountBalancesDisplay extends React.Component {
    static contextType = AppContext;

    render() {
        return (
            <div>
                <div className="balances-display top-display">
                    <span className="container-right-display-text">Highest Account Balance:</span>
                    <br/>
                    <p className="balances-display-balance">{this.context.state.highestName}&nbsp;&nbsp;&nbsp;{this.context.state.highestBalance}</p>
                </div>
                <div className="balances-display middle-display">
                    <span className="container-right-display-text">Lowest Account Balance:</span>
                    <br/>
                    <p className="balances-display-balance">{this.context.state.lowestName}&nbsp;&nbsp;&nbsp;{this.context.state.lowestBalance}</p>
                </div>
                <div className="balances-display bottom-display">
                    <span className="container-right-display-text">Total Account Balances:</span>
                    <br />
                    <p className="balances-display-balance-total">{this.context.state.totalBalance}</p>
                </div>
            </div>
        )
    }
}

export default AccountBalancesDisplay;