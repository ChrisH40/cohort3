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
      humanPlayer: "X",
      computerPlayer: "O",
    }
  }

  firstPlayer(event) {
    const booleanState = (event.target.value === "true");
    if (this.state.startGame === false) {
      this.setState({
        computerTurn: booleanState,
      });
    }
  }

  async startGame(event) {
    const booleanState = (event.target.value === "true");
    await this.setState({
      startGame: booleanState,
    });
    if (this.state.computerTurn === true && this.state.startGame === true) {
      await this.setState({
        computerPlayer: "X",
        humanPlayer: "O",
      });
      return this.compDecision(this.state.history[0].squares);
    } return;
  }

  // --- Computer AI (unbeatable) ---
  // Logic (miniMax) inspired by ahmad abdolsaheb at https://www.freecodecamp.org/news/how-to-make-your-tic-tac-toe-game-unbeatable-by-using-the-minimax-algorithm-9d690bad4b37/

  compDecision(board) {
    setTimeout(() => {
      if (this.state.computerTurn === true && this.state.startGame === true) {
        const pick = this.miniMax(board, this.state.computerPlayer);
        this.handleClick(pick.index);
      }
    }, 1000);
  }

  miniMax(board, player) {
    let open_spots = this.emptyIndexes(board);
    let board_copy = board.slice(0);

    if (this.winningMoves(board_copy, this.state.humanPlayer)) {
      return { score: -10 };
    } else if (this.winningMoves(board_copy, this.state.computerPlayer)) {
      return { score: 10 };
    } else if (open_spots.length === 0) {
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

      if (player === this.state.computerPlayer) {
        let result1 = this.miniMax(board_copy, this.state.humanPlayer);
        move.score = result1.score;
      }
      else {
        let result2 = this.miniMax(board_copy, this.state.computerPlayer);
        move.score = result2.score;
      }

      board_copy[open_spots[i]] = move.index;
      moves.push(move);
    }

    let best_pick;
    if (player === this.state.computerPlayer) {
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
    } else {
      return false;
    }
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
    if (
      (this.state.xIsNext === true && this.state.computerPlayer === "X") ||
      (this.state.xIsNext === false && this.state.computerPlayer === "O")) {
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
              onClick={(i) => { if (this.state.computerTurn === false && this.state.startGame === true) { this.handleClick(i) } }} //refactor conditional out?
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