import React from 'react';
import Square from "./MySquare.js";

class Board extends React.Component {

  renderSquare(i) {
    return (
      <Square
        key={i}
        index={i}
        winningRow={this.props.winningRow.includes(i)}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderSquares(num) {
    let squares = [];
    for (let i = num; i < num + 3; i++) {
      squares.push(this.renderSquare(i));
    } return squares;
  }

  renderRows(i) {
    return <div className="board-row">{this.renderSquares(i)}</div>;
  }

  render() {
    return (
      <div>
        {this.renderRows(0)}
        {this.renderRows(3)}
        {this.renderRows(6)}
      </div>
    );
  }
}

export default Board;