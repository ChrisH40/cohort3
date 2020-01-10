import React from 'react';
import Board from "./MyBoard.js";
import { AppContext } from '../app-context.js';

class Game extends React.Component {
  static contextType = AppContext;

  firstPlayer = (event) => {
    if (this.context.state.startGame === false && event.target.value === "human") {
      this.context.handleStateChange([
        { state: "ticTacPlayerValue", newState: "human" },
        { state: "humanPlayer", newState: "X" },
        { state: "computerPlayer", newState: "O" },
      ])
    }
    else if (this.context.state.startGame === false && event.target.value === "computer") {
      this.context.handleStateChange([
        { state: "ticTacPlayerValue", newState: "computer" },
        { state: "humanPlayer", newState: "O" },
        { state: "computerPlayer", newState: "X" },
      ])
    }
    else return;
  }

  async startGame() {
    await this.context.handleStateChange([
      { state: "startGame", newState: true },
    ])
    if (this.context.state.startGame === true && this.context.state.computerPlayer === "X" && this.context.state.xIsNext === true) {
      return this.compDecision(this.context.state.history[0].squares);
    }
    else return;
  }

  humanDecision(i) {
    if ((this.context.state.startGame === true && this.context.state.humanPlayer === "X" && this.context.state.xIsNext === true) || (this.context.state.startGame === true && this.context.state.humanPlayer === "O" && this.context.state.xIsNext === false)) {
      return this.handleClick(i)
    }
    else return;
  }

  compDecision(board) {
    setTimeout(() => {
      if (board.includes(null)) {
        const pick = this.miniMax(board, this.context.state.computerPlayer);
        this.handleClick(pick.index);
      }
    }, 500);
  }

  // --- Computer AI (unbeatable) ---
  // Logic (miniMax) inspired by ahmad abdolsaheb at https://www.freecodecamp.org/news/how-to-make-your-tic-tac-toe-game-unbeatable-by-using-the-minimax-algorithm-9d690bad4b37/


  miniMax(board, player) {
    let open_spots = this.emptyIndexes(board);
    let board_copy = board.slice(0);

    if (this.winningMoves(board_copy, this.context.state.humanPlayer)) {
      return { score: -10 };
    }
    else if (this.winningMoves(board_copy, this.context.state.computerPlayer)) {
      return { score: 10 };
    }
    else if (open_spots.length === 0) {
      return { score: 0 };
    }

    let moves = [];

    for (let i = 0; i < open_spots.length; i++) {
      let move = {};
      let corresponding_index = (index) => {
        return index === board_copy[open_spots[i]];
      }
      move.index = board_copy.findIndex(corresponding_index);

      board_copy[open_spots[i]] = player;

      if (player === this.context.state.computerPlayer) {
        let result1 = this.miniMax(board_copy, this.context.state.humanPlayer);
        move.score = result1.score;
      }
      else {
        let result2 = this.miniMax(board_copy, this.context.state.computerPlayer);
        move.score = result2.score;
      }

      board_copy[open_spots[i]] = move.index;
      moves.push(move);
    }

    let best_pick;
    if (player === this.context.state.computerPlayer) {
      let best_score = -10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > best_score) {
          best_score = moves[i].score;
          best_pick = i;
        }
      }
    }
    else {
      let best_score = 10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < best_score) {
          best_score = moves[i].score;
          best_pick = i;
        }
      }
    }
    return moves[best_pick];
  }

  emptyIndexes(board) {
    var open_spots = [];
    for (var i = 0; i < board.length; i++) {
      if (board[i] !== "O" && board[i] !== "X") {
        open_spots.push(i);
      }
    }
    return open_spots;
  }

  winningMoves(board, player) {
    if (
      (board[0] === player && board[1] === player && board[2] === player) ||
      (board[3] === player && board[4] === player && board[5] === player) ||
      (board[6] === player && board[7] === player && board[8] === player) ||
      (board[0] === player && board[3] === player && board[6] === player) ||
      (board[1] === player && board[4] === player && board[7] === player) ||
      (board[2] === player && board[5] === player && board[8] === player) ||
      (board[0] === player && board[4] === player && board[8] === player) ||
      (board[2] === player && board[4] === player && board[6] === player)
    ) {
      return true;
    }
    else return false;
  }

  // --- ---

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
    const history = this.context.state.history.slice(0, this.context.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.context.state.xIsNext ? 'X' : 'O';
    await this.context.handleStateChange([
      {
        state: "history", newState:
          this.context.state.history.concat([{
            squares: squares,
            location: location[i],
          }])
      },
      { state: "stepNumber", newState: this.context.state.history.length },
      { state: "xIsNext", newState: !this.context.state.xIsNext },
    ])

    if ((this.context.state.computerPlayer === "X" && this.context.state.xIsNext === true && this.context.state.startGame === true) ||
      (this.context.state.computerPlayer === "O" && this.context.state.xIsNext === false && this.context.state.startGame === true)) {
      return this.compDecision(squares);
    }
    else return;
  }

  async jumpTo(step) {
    await this.context.handleStateChange([
      { state: "stepNumber", newState: step },
      { state: "xIsNext", newState: (step % 2) === 0 },
    ])

    if (this.context.state.stepNumber === 0) {
      await this.context.handleStateChange([
        { state: "history", newState: [{ squares: Array(9).fill(null) }] },
        { state: "stepNumber", newState: 0 },
        { state: "xIsNext", newState: true },
        { state: "startGame", newState: false },
        { state: "humanPlayer", newState: "X" },
        { state: "computerPlayer", newState: "O" },
      ])
    }
    if (
      (this.context.state.xIsNext === true && this.context.state.computerPlayer === "X") || (this.context.state.xIsNext === false && this.context.state.computerPlayer === "O")) {
      return this.compDecision(this.context.state.history[step].squares);
    }
    else if (
      (this.context.state.xIsNext === true && this.context.state.humanPlayer === "X") || (this.context.state.xIsNext === false && this.context.state.humanPlayer === "O")) {
      return;
    }
    else return;
  }

  render() {
    const history = this.context.state.history;
    const current = history[this.context.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move + ` (${history[move].location})` :
        'Reset Game';
      return (
        <li key={move}>
          <button className="history-button" onClick={() => this.jumpTo(move)}>{move === this.context.state.stepNumber ? <b>{desc}</b> : desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner.player;
    }
    else if (!current.squares.includes(null)) {
      status = 'Draw';
    }
    else {
      status = 'Next Move: ' + (this.context.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game" style={{ backgroundColor: this.context.theme[this.context.state.themeValue].background, color: this.context.theme[this.context.state.themeValue].color }}>
        <h1>Tic-Tac-Toe</h1>
        <div>
          <span>First Player (X):</span>
          <select
            className="first-player-dropdown"
            onChange={(event) => this.firstPlayer(event)}
            name="ticTacPlayerValue"
            value={this.context.state.ticTacPlayerValue}
          >
            <option value="human">Human</option>
            <option value="computer">Computer</option>
          </select>
        </div>
        <div>
          <button className="start-button" name="startGame" onClick={(event) => this.startGame(event)}>{this.context.state.startGame ? "Game On!" : "Start Game"}</button>
        </div>
        <div className="game board-info-wrapper" style={{ backgroundColor: this.context.theme[this.context.state.themeValue].background, color: this.context.theme[this.context.state.themeValue].color }}>
          <div className="game-board">
            <Board
              winningRow={winner ? winner.row : []}
              onClick={(i) => this.humanDecision(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <div className="game-info-display">
              <ol>{moves}</ol>
            </div>
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
