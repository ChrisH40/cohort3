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

  navIconMapper = () => {
    const images = [nuclearAtomIcon, ticTacToeIcon, explosionIcon, nuclearRadiationIcon, houseIcon];
    return images.map((image, i) =>
      <img key={i}
        name={image}
        src={image}
        tabIndex={0}
        className={`icon icon${i}`}
        alt={`icon ${image}`}
        onClick={(event) => this.setState({ selected: event.target.name })}
      />
    );
  }

  handleSelected = () => {
    if (this.state.selected === nuclearAtomIcon) {
      return < Homepage />;
    } if (this.state.selected === ticTacToeIcon) {
      return < Game />;
    } if (this.state.selected === explosionIcon || this.state.selected === nuclearRadiationIcon || this.state.selected === houseIcon) {
      return < Homepage />;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="navbar">
            {this.navIconMapper()}
          </div>
        </header>
        <div className="App-display">
          {this.handleSelected()}
        </div>
      </div>
    );
  }
}

export default App;
