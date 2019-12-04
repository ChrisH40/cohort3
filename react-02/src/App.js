import React from 'react';
import './App.css';

import Homepage from "./components/MyHomepage.js";
import Game from "./components/tic-tac-toe/MyGame.js";
import Accounts from "./components/accounts/MyAccounts.js";
import Cities from "./components/cities/MyCities.js";

import bankIcon from './images/piggy-bank-icon.svg';
import houseIcon from './images/house-icon.svg';
import cityIcon from './images/city-skyline-icon.svg';
import ticTacToeIcon from './images/tic-tac-toe-icon.svg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: houseIcon,
      activeIconIndex: 0,
    }
  }

  async handleClick(event) {
    await this.setState({
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
          onClick={(event) => this.handleClick(event)}
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
    }
  }


  render() {
    const images = [houseIcon, ticTacToeIcon, bankIcon, cityIcon];
    const image_headers = ['Home', "Tic-Tac-Toe", "Accounts", "Cities"]

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
