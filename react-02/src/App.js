import React from 'react';
import './App.css';

import { AppContext } from './components/app-context.js';
import Homepage from "./components/MyHomepage.js";
import Game from "./components/tic-tac-toe/MyGame.js";
import Accounts from "./components/accounts/MyAccounts.js";
import Cities from "./components/cities/MyCities.js";
import LinkedListDisplay from "./components/linked-list/MyLinkedList.js";
import FifoLifoListDisplay from "./components/fifo-lifo-list/MyFifoLifoList.js";
import ChangeSettingsDisplay from './components/settings/MySettings.js';

import houseIcon from './images/house-icon.svg';
import ticTacToeIcon from './images/tic-tac-toe-icon.svg';
import bankIcon from './images/piggy-bank-icon.svg';
import cityIcon from './images/city-skyline-icon.svg';
import linkedListIcon from './images/linked-list-icon.svg';
import fifoLifoIcon from './images/pancake-stack-icon.svg';
import settingsIcon from './images/settings-icon.svg';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      selected: houseIcon,
    }
  }

  handleClick = (event) => {
    this.setState({
      selected: event.target.name,
    })
  }

  handleSelected = (selected) => {
    if (selected === houseIcon) {
      return < Homepage />;
    }
    if (selected === ticTacToeIcon) {
      return < Game />;
    }
    if (selected === bankIcon) {
      return < Accounts />
    }
    if (selected === cityIcon) {
      return < Cities />
    }
    if (selected === linkedListIcon) {
      return < LinkedListDisplay />
    }
    if (selected === fifoLifoIcon) {
      return < FifoLifoListDisplay />
    }
    if (selected === settingsIcon) {
      return < ChangeSettingsDisplay />
    }
    return
  }

  navIconMapper = (images, image_headers) => {
    return images.map((image, i) =>
      <div className="icon-icon-header" key={i}>
        <img
          id={i}
          name={image}
          src={image}
          className={`icon icon${i} ` + (this.state.selected === image ? "icon-active" : null)}
          alt={`icon ${image}`}
          onClick={this.handleClick}
        />
        <span
          id={i}>
          {image_headers[i]}
        </span>
      </div>
    );
  }

  render() {
    const images = [houseIcon, ticTacToeIcon, bankIcon, cityIcon, linkedListIcon, fifoLifoIcon, settingsIcon];
    const image_headers = ['Home', "Tic-Tac-Toe", "Accounts", "Cities", "Linked List", "FIFO Queue/LIFO Stack", "Settings"];

    return (
      <AppContext.Consumer>
        {({ state, theme }) => (
          <div className="App">
            <header className="App-header" style={{ backgroundColor: theme[state.themeValue].background, color: theme[state.themeValue].color }}>
              <div className="nav-bar">
                {this.navIconMapper(images, image_headers)}
              </div>
            </header>
            <div className="App-display">
              {this.handleSelected(this.state.selected)}
            </div>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default App;
