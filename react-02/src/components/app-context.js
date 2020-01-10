import React from 'react';
import App from '../App.js';
import { AccountController } from '../components/accounts/account.js';

export const AppContext = React.createContext({});

export const accounts = new AccountController("My Accounts");

export class ContextProvider extends React.Component {

    state = {
        themeValue: "default",
        history: [{
            squares: Array(9).fill(null),
        }],
        ticTacPlayerValue: "human",
        startGame: false,
        humanPlayer: "X",
        computerPlayer: "O",
        stepNumber: 0,
        xIsNext: true,
        acctName: "",
        acctBalance: "",
        highestName: "",
        highestBalance: "",
        lowestName: "",
        lowestBalance: "",
        totalBalance: "",
        current: "",
        lastFifoRemoved: "",
        lastLifoRemoved: "",
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

    handleStateChange = (states) => {
        for (let i = 0; i < states.length; i++) {
            this.setState({
                [states[i].state]: states[i].newState,
            })
        }
    }

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    theme: this.theme,
                    handleOnChange: this.handleOnChange,
                    handleStateChange: this.handleStateChange,
                }}
            >
                <App />
            </AppContext.Provider>
        );
    }
}
