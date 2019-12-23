import React from 'react';
import './App.css';

import Homepage from "./components/MyHomepage.js";
import Game from "./components/tic-tac-toe/MyGame.js";
import Accounts from "./components/accounts/MyAccounts.js";
import Cities from "./components/cities/MyCities.js";
import LinkedListDisplay from "./components/linked-list/MyLinkedList.js";
import FifoLifoListDisplay from "./components/fifo-lifo-list/MyFifoLifoList.js";

import houseIcon from './images/house-icon.svg';
import ticTacToeIcon from './images/tic-tac-toe-icon.svg';
import bankIcon from './images/piggy-bank-icon.svg';
import cityIcon from './images/city-skyline-icon.svg';
import linkedListIcon from './images/linked-list-icon.svg';
import fifoLifoIcon from './images/pancake-stack-icon.svg';
import settingsIcon from './images/settings-icon.svg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selected: houseIcon,
      activeIconIndex: 0,
    }
  }

  handleClick = (event) => {
    this.setState({
      selected: event.target.name,
      activeIconIndex: Number(event.target.id),
    })
  }

  navIconMapper = (icons, image_headers) => {
    return icons.map((icon, i) =>
      <div className="icon-icon-header" key={i}>
        <img
          id={i}
          name={icon}
          src={icon}
          tabIndex={0}
          className={`icon icon${i} ` + (this.state.activeIconIndex === i ? "icon-active" : null)}
          alt={`icon ${icon}`}
          onClick={this.handleClick}
        />
        <span
          id={i}>
          {image_headers[i]}
        </span>
      </div>
    );
  }

  handleSelected = (selected) => {
    if (selected === houseIcon) {
      return < Homepage />;
    } if (selected === ticTacToeIcon) {
      return < Game />;
    } if (selected === bankIcon) {
      return < Accounts />
    } if (selected === cityIcon) {
      return < Cities />
    } if (selected === linkedListIcon) {
      return < LinkedListDisplay />
    } if (selected === fifoLifoIcon) {
      return < FifoLifoListDisplay />
    } if (selected === settingsIcon) {
      return < Homepage />
    }
  }

  render() {
    const images = [houseIcon, ticTacToeIcon, bankIcon, cityIcon, linkedListIcon, fifoLifoIcon, settingsIcon];
    const image_headers = ['Home', "Tic-Tac-Toe", "Accounts", "Cities", "Linked List", "FIFO Queue/LIFO Stack", "Settings"];

    return (
      <div className="App">
        <header className="App-header">
          <div className="nav-bar">
            {this.navIconMapper(images, image_headers)}
          </div>
        </header>
        <div className="App-display">
          {this.handleSelected(this.state.selected)}
        </div>
      </div>
    );
  }
}

export default App;
