import React from 'react';
import logo from 'C:/code/cohort3/react-02/src/logo.svg';
import { AppContext } from './app-context.js';

class Homepage extends React.Component {
    static contextType = AppContext;

    render() {
        return (
            <div className="homepage" style={{ backgroundColor: this.context.theme[this.context.state.themeValue].background, color: this.context.theme[this.context.state.themeValue].color }}>
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

        );
    }
}

export default Homepage;