import React from 'react';
import { AppContext } from '../app-context.js';

class AccountCreateDisplay extends React.Component {

    render() {
        return (
            <AppContext.Consumer>
                {({ state, handleOnChange }) => (
                    <div className="create-account-display">
                        <form onSubmit={(event) => this.props.handleSubmit(event)}>
                            <label className="create-account-text">Name:</label>
                            <input
                                type="text"
                                name="acctName"
                                value={state.acctName}
                                placeholder="name"
                                className="create-account-name-input"
                                onChange={(event) => handleOnChange(event)} />
                            <label className="create-account-text">Opening Balance:</label>
                            <input
                                type="number"
                                name="acctBalance"
                                value={state.acctBalance}
                                placeholder="balance"
                                className="create-account-balance-input"
                                onChange={(event) => handleOnChange(event)} />
                            <input
                                type="submit"
                                value="Submit"
                                className="account-button create-account-button" />
                        </form>
                    </div>
                )}
            </AppContext.Consumer>
        )
    }
}

export default AccountCreateDisplay;