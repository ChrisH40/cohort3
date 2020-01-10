import React from 'react';
import { AppContext } from '../app-context.js';

class AccountCreateDisplay extends React.Component {
    static contextType = AppContext;

    render() {
        return (
            <div className="create-account-display">
                <form onSubmit={(event) => this.props.handleSubmit(event)}>
                    <label className="create-account-text">Name:</label>
                    <input
                        type="text"
                        name="acctName"
                        value={this.context.state.acctName}
                        placeholder="name"
                        className="create-account-name-input"
                        onChange={(event) => this.context.handleOnChange(event)} />
                    <label className="create-account-text">Opening Balance:</label>
                    <input
                        type="number"
                        name="acctBalance"
                        value={this.context.state.acctBalance}
                        placeholder="balance"
                        className="create-account-balance-input"
                        onChange={(event) => this.context.handleOnChange(event)} />
                    <input
                        type="submit"
                        value="Submit"
                        className="account-button create-account-button" />
                </form>
            </div>

        )
    }
}

export default AccountCreateDisplay;