import React, { Component } from "react";
import Cell from "../Cell";

const DIMENSION = 3;
const TIC_TURN_CHECKER = "X";
const TAC_TURN_CHECKER = "O";
const INITIAL_STATE = {
  board: Array(DIMENSION * DIMENSION).fill(null),
  ticTurn: true
};

class Board extends Component {
  state = INITIAL_STATE;

  onClickCell(i) {
    const board = this.state.board;
    if (board[i]) {
      return;
    }
    board[i] = this.state.ticTurn ? TIC_TURN_CHECKER : TAC_TURN_CHECKER;
    this.setState({
      board: board,
      ticTurn: !this.state.ticTurn
    });
  }

  render() {
    return (
      <div>
        <div>
          <Cell
            value={this.state.board[0]}
            onClick={() => this.onClickCell(0)}
          />
          <Cell
            value={this.state.board[1]}
            onClick={() => this.onClickCell(1)}
          />
          <Cell
            value={this.state.board[2]}
            onClick={() => this.onClickCell(2)}
          />
        </div>
        <div>
          <Cell
            value={this.state.board[3]}
            onClick={() => this.onClickCell(3)}
          />
          <Cell
            value={this.state.board[4]}
            onClick={() => this.onClickCell(4)}
          />
          <Cell
            value={this.state.board[5]}
            onClick={() => this.onClickCell(5)}
          />
        </div>
        <div>
          <Cell
            value={this.state.board[6]}
            onClick={() => this.onClickCell(6)}
          />
          <Cell
            value={this.state.board[7]}
            onClick={() => this.onClickCell(7)}
          />
          <Cell
            value={this.state.board[8]}
            onClick={() => this.onClickCell(8)}
          />
        </div>
      </div>
    );
  }
}

// const Board = ({ board, onClick }) => (
//     <div>
//         <div>
//             <Cell value={board[0]} onClick={onClick(0)} />
//             <Cell value={board[1]} onClick={onClick(1)} />
//             <Cell value={board[2]} onClick={onClick(2)} />
//         </div>
//         <div>
//             <Cell value={board[3]} onClick={onClick(3)} />
//             <Cell value={board[4]} onClick={onClick(4)} />
//             <Cell value={board[5]} onClick={onClick(5)} />
//         </div>
//         <div>
//             <Cell value={board[6]} onClick={onClick(6)} />
//             <Cell value={board[7]} onClick={onClick(7)} />
//             <Cell value={board[8]} onClick={onClick(8)} />
//         </div>
//     </div>
// );

export default Board;
