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

    handleClear = (states) => {
        for (let i = 0; i < states.length; i++) {
            this.setState({
                [states[i]]: "",
            })
        }
    };

    handleAccountsBalanceChecker = (array) => {
        if (accounts.listArray.length > 0) {
            this.setState({
                highestName: accounts.highestBalance(array),
                highestBalance: accounts.highestBalanceNumber(array),
                lowestName: accounts.lowestBalance(array),
                lowestBalance: accounts.lowestBalanceNumber(array),
                totalBalance: accounts.totalBalances(array),
            });
        }
        else this.handleClear(["highestName", "highestBalance", "lowestName", "lowestBalance", "totalBalance"]);
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    theme: this.theme,
                    handleOnChange: this.handleOnChange,
                    handleClear: this.handleClear,
                    handleAccountsBalanceChecker: this.handleAccountsBalanceChecker,
                }}
            >
                <App />
            </AppContext.Provider>
        );
    }
}
