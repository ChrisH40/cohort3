import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent.js"
import EvenComponent from "./components/EvenComponent.js"
import OddComponent from "./components/OddComponent.js"


class App extends React.Component {

  constructor() {
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD",
      evenOddDisplay: <OddComponent appCounter={this.counter} />
    }
  }

  onPushMe = () => {
    console.log("You pushed me");
    this.counter++;
    console.log(this.counter);
    this.setState(
      { myState: "now:" + this.counter },
    )
    this.numberChecker();
  }

  numberChecker = () => {
    if (this.counter % 2 === 0) {
      this.setState({ evenOddDisplay: <EvenComponent appCounter={this.counter} /> })
    } else this.setState({ evenOddDisplay: <OddComponent appCounter={this.counter} /> })
  }

  whatToSay = "What Ever";

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>I am in control of this application and my name is Chris {this.counter} {this.state.myState}</h1>
          <button onClick={this.onPushMe}>
            Push Me
          </button>
          <MyComponent whatToSay={this.whatToSay} appOnPushMe={this.onPushMe} />
          {this.state.evenOddDisplay}
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
        </header>
      </div>
    );
  }
}

export default App;
