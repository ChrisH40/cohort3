import React from 'react';
import './App.css';

import Homepage from "./components/MyHomepage.js"
import Game from "./components/MyGame.js"

import bankIcon from 'C:/code/cohort3/react-02/src/images/piggy-bank-icon.svg';
import nuclearAtomIcon from 'C:/code/cohort3/react-02/src/images/nuclear-atom-icon.svg';
import cityIcon from 'C:/code/cohort3/react-02/src/images/city-skyline-icon.svg';
import ticTacToeIcon from 'C:/code/cohort3/react-02/src/images/tic-tac-toe-icon.svg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: nuclearAtomIcon,
      activeIconIndex: 0,
    }
  }

  async handleClick(event) {
    await this.setState({
      selected: event.target.name,
      activeIconIndex: Number(event.target.id),
    })
  }

  navIconMapper = (icons) => {
    return icons.map((icon, i) =>
      <img key={i}
        id={i}
        name={icon}
        src={icon}
        tabIndex={0}
        className={`icon icon${i} `+ (this.state.activeIconIndex === i ? "icon-active" : null)}
        alt={`icon ${icon}`}
        onClick={(event) => this.handleClick(event)}
      />
    );
  }

  handleSelected = (selected) => {
    if (selected === nuclearAtomIcon) {
      return < Homepage />;
    } if (selected === ticTacToeIcon) {
      return < Game />;
    } if (selected === bankIcon || selected === cityIcon) {
      return < Homepage />;
    }
  }

  render() {
    const images = [nuclearAtomIcon, ticTacToeIcon, bankIcon, cityIcon];
    
    return (
      <div className="App">
        <header className="App-header">
          <div className="navbar">
            {this.navIconMapper(images)}
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
