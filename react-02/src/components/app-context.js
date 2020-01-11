import React from 'react';
import App from '../App.js';
import { AccountController } from '../components/accounts/account.js';
import { Community } from '../components/cities/cities.js';

export const AppContext = React.createContext();

export class ContextProvider extends React.Component {

    accounts = new AccountController("My Accounts");
    cities = new Community('Cities Controller');

    state = {
    // Settings
        themeValue: "default",
    // Tic Tac Toe
        history: [{
            squares: Array(9).fill(null),
        }],
        ticTacPlayerValue: "human",
        startGame: false,
        xIsNext: true,
        humanPlayer: "X",
        computerPlayer: "O",
        stepNumber: 0,
    // Accounts
        acctName: "",
        acctBalance: "",
        highestName: "",
        highestBalance: "",
        lowestName: "",
        lowestBalance: "",
        totalBalance: "",
    // Cities
        dataLoad: false,
        apiAlert: false,
        cityName: "",
        latitude: "",
        longitude: "",
        population: "",
        mostNorthern: "",
        mostSouthern: "",
        totalPopulation: "",
        showCity: "",
        howBigCity: "",
        whichSphereCity: "",
        selectedCity: "",
    // Linked-List
        current: "",
    // Fifo-Lifo List
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
                    accounts: this.accounts,
                    cities: this.cities,
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
