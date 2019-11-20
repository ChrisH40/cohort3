import React from 'react';
import logo from 'C:/code/cohort3/react-02/src/logo.svg';

class Homepage extends React.Component {

    render() {
        return (
            <div className="homepage">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
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