import React from 'react';
import './App.css';

import Homepage from "./components/MyHomepage.js"
import Game from "./components/MyGame.js"

import explosionIcon from 'C:/code/cohort3/react-02/src/images/explosion-icon.svg';
import houseIcon from 'C:/code/cohort3/react-02/src/images/house-icon.svg';
import nuclearAtomIcon from 'C:/code/cohort3/react-02/src/images/nuclear-atom-icon.svg';
import nuclearRadiationIcon from 'C:/code/cohort3/react-02/src/images/nuclear-radiation-icon.svg';
import ticTacToeIcon from 'C:/code/cohort3/react-02/src/images/tic-tac-toe-icon.svg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: nuclearAtomIcon,
    }
  }

  navIconMapper = (icons) => {
    return icons.map((icon, i) =>
      <img key={i}
        name={icon}
        src={icon}
        tabIndex={0}
        className={`icon icon${i}`}
        alt={`icon ${icon}`}
        onClick={(event) => this.setState({ selected: event.target.name })}
      />
    );
  }

  handleSelected = (clicked) => {
    if (clicked === nuclearAtomIcon) {
      return < Homepage />;
    } if (clicked === ticTacToeIcon) {
      return < Game />;
    } if (clicked === explosionIcon || clicked === nuclearRadiationIcon || clicked === houseIcon) {
      return < Homepage />;
    }
  }

  render() {
    const images = [nuclearAtomIcon, ticTacToeIcon, explosionIcon, nuclearRadiationIcon, houseIcon];
    
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
