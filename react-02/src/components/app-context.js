import React from 'react';
import App from '../App.js';
import { AccountController } from '../components/accounts/account.js';

export const AppContext = React.createContext({});

export const accounts = new AccountController("My Accounts");

export class ContextProvider extends React.Component {

    state = {
        themeValue: "default",
        acctName: "",
        acctBalance: "",
        highestName: "",
        highestBalance: "",
        lowestName: "",
        lowestBalance: "",
        totalBalance: "",
    };

    theme = {
        default: {
            background: '#282c34',
            color: 'white',
        },
        dark: {
            background: 'black',
            color: '#61DAFB',
        },
    };

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    };

    handleStateClear = (states) => {
        for (let i = 0; i < states.length; i++) {
            this.setState({
                [states[i]]: "",
            })
        }
    };

    handleStateFunctions = (statefuncs) => {
        for (let i = 0; i < statefuncs.length; i++) {
            this.setState({
                [statefuncs[i].state]: [statefuncs[i].func],
            })
        }
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    theme: this.theme,
                    handleOnChange: this.handleOnChange,
                    handleStateClear: this.handleStateClear,
                    handleStateFunctions:  this.handleStateFunctions,
                }}
            >
                <App />
            </AppContext.Provider>
        );
    }
}
