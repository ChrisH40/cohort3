import React from 'react';
import { AppContext } from '../app-context.js';

class AccountCreateDisplay extends React.Component {
    static contextType = AppContext;

    render() {
        return (
            <div>
                <div className="create-account-display">
                    <form onSubmit={(event) => this.props.handleSubmit(event)}>
                        <div>Name:</div>
                        <input
                            type="text"
                            name="acctName"
                            value={this.context.state.acctName}
                            placeholder="name"
                            className="create-account-name-input"
                            onChange={(event) => this.context.handleOnChange(event)} />
                        <div>Opening Balance:</div>
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
                <div className="account-warning-display">
                    <span className="account-warning-text" style={this.context.state.acctWarningSuccess === true ? { color: "#09d3ac" } : { color: "red" }}>{this.context.state.acctWarningMsg}</span>
                </div>
            </div>
        )
    };
}

export default AccountCreateDisplay;