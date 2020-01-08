import React from 'react';
import App from '../App.js';

export const AppContext = React.createContext({});

export class ContextProvider extends React.Component {

    state = {
        themeValue: "default",
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

    handleSettingsChange = (event) => {
        this.setState({
            theme: this.theme[event.target.value],
            themeValue: event.target.value,
        })
    }

    handleSubmit = (event) => {
        this.setState({
            [event.target.name]: "",
        })
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    theme: this.theme,
                    handleOnChange: this.handleOnChange,
                    handleSettingsChange: this.handleSettingsChange,
                }}
            >
                <App />
            </AppContext.Provider>
        );
    }
}
