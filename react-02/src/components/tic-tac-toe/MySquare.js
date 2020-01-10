import React from 'react';
import { AppContext } from '../app-context.js';

class Square extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ state }) => (
          <button
            className={"square " + (this.props.winningRow ? "winning-square" : [])}
            onClick={() => this.props.onClick()}
          >
            {state.history[state.stepNumber].squares[this.props.index]}
          </button>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Square;