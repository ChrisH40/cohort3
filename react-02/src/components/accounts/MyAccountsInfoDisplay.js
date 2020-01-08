import React from 'react';
import { AppContext } from '../app-context.js';

class AccountBalancesDisplay extends React.Component {

    render() {
        return (
            <AppContext.Consumer>
                {({state}) => (
                    <div>
                        <div className="balances-display top-display">
                            <span className="container-right-display-text">Highest Account Balance:</span>
                            <p className="balances-display-balance">{state.highestName}</p>
                            <p className="balances-display-balance-number">{state.highestBalance}</p>
                        </div>
                        <div className="balances-display middle-display">
                            <span className="container-right-display-text">Lowest Account Balance:</span>
                            <p className="balances-display-balance">{state.lowestName}</p>
                            <p className="balances-display-balance-number">{state.lowestBalance}</p>
                        </div>
                        <div className="balances-display bottom-display">
                            <span className="container-right-display-text">Total Account Balances:</span>
                            <p className="balances-display-balance-total">{state.totalBalance}</p>
                        </div>
                    </div>
                )}
            </AppContext.Consumer>
        )
    }
}

export default AccountBalancesDisplay;