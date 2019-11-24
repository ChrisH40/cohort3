import React from 'react';
import Board from "./MyBoard.js"

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      startGame: false,
      computerTurn: false,
      computerIsX: false,
    }
  }

  firstPlayer(event) {
    const booleanState = (event.target.value === "true");
    if (this.state.startGame === false) {
      this.setState(() => ({
        computerTurn: booleanState,
      }));
    }
  }

  async startGame(event) {
    const booleanState = (event.target.value === "true");
    await this.setState({
      startGame: booleanState,
    });
    if (this.state.computerTurn === true && this.state.startGame === true) {
      await this.setState({
        computerIsX: booleanState,
      });
      return this.compDecision(this.state.history[0].squares);
    } return;
  }

  // minimax?
  compDecision(board) {
    setTimeout(() => {
      if (this.state.computerTurn === true && this.state.startGame === true) {
        const is_null = (index) => {
          return index === null;
        }
        const pick = board.findIndex(is_null);
        return this.handleClick(pick);
      }
    }, 1500);
  }

  async handleClick(i) {
    const location = [
      [1, 1],
      [2, 1],
      [3, 1],
      [1, 2],
      [2, 2],
      [3, 2],
      [1, 3],
      [2, 3],
      [3, 3],
    ];
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    await this.setState({
      history: history.concat([{
        squares: squares,
        location: location[i],
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      computerTurn: !this.state.computerTurn,
    });
    if (this.state.computerTurn === true && this.state.startGame === true) {
      return this.compDecision(squares);
    }
  }

  async jumpTo(step) {
    await this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
    if (this.state.xIsNext === true && this.state.computerIsX === true) {
      await this.setState({
        computerTurn: true,
      });
      return this.compDecision(this.state.history[step].squares);
    } else if (this.state.xIsNext === false && this.state.computerIsX === false) {
      await this.setState({
        computerTurn: true,
      });
      return this.compDecision(this.state.history[step].squares);
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move + ` (${history[move].location})` :
        'Go to game start';
      return (
        <li key={move}>
          <button className="history-button" onClick={() => this.jumpTo(move)}>{move === this.state.stepNumber ? <b>{desc}</b> : desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner.player;
    } else if (!current.squares.includes(null)) {
      status = 'Draw';
    } else {
      status = 'Next Move: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <h1>Tic-Tac-Toe</h1>
        <div>
          <p>First Player (X):</p>
          <select
            className="first-player-dropdown"
            onChange={(event) => { this.firstPlayer(event) }}
          >
            <option value="false">Human</option>
            <option value="true">Computer</option>
          </select>
        </div>
        <div>
          <button className="start-button" value="true" onClick={(event) => this.startGame(event)}>Start Game</button>
        </div>
        <div className="game board-info-wrapper">
          <div className="game-board">
            <Board
              winningRow={winner ? winner.row : []}
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    );
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { player: squares[a], row: [a, b, c] };
      }
    }
    return null;
  }
}

export default Game;