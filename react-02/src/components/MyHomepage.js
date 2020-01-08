import React from 'react';
import logo from 'C:/code/cohort3/react-02/src/logo.svg';
import { AppContext } from './app-context.js';

class Homepage extends React.Component {

    render() {
        return (
            <AppContext.Consumer>
                {({ state, theme }) => (
                    <div className="homepage" style={{ backgroundColor: theme[state.themeValue].background, color: theme[state.themeValue].color }}>
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>Edit <code>src/App.js</code> and save to reload.</p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </div>
                )}
            </AppContext.Consumer>
        );
    }
}

export default Homepage;