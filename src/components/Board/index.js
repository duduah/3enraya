import React, { Component } from "react";
import Cell from "../Cell";
import { sliceInColumns, sliceInDiagonals, sliceInRows } from "../../utils";

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
    if (board[i] || this.getWinnerChecker(board)) {
      return;
    }
    board[i] = this.getPlayerChecker();
    this.setState({
      board: board,
      ticTurn: !this.state.ticTurn
    });
  }

  getWinnerChecker(board) {
    let winnerRow = "";
    const boardRows = sliceInRows(board, DIMENSION);
    const boardColumns = sliceInColumns(board, DIMENSION);
    const boardDiagonals = sliceInDiagonals(board, DIMENSION);
    const boardEvaluation = boardRows.concat(
      boardColumns.concat(boardDiagonals)
    );

    for (let i = 0; i < boardEvaluation.length && winnerRow === ""; i++) {
      const boardEvaluate = boardEvaluation[i];
      const checker = boardEvaluate[0] ? boardEvaluate[0] : null;
      winnerRow =
        checker && boardEvaluate.every(v => v === checker) ? checker : "";
    }
    return winnerRow;
  }

  printBoardRow(row, rowIndex) {
    if (row && row.length === DIMENSION) {
      return (
        <div key={rowIndex}>
          {row.map((v, k) => (
            <Cell
              key={rowIndex * DIMENSION + k}
              value={v}
              onClick={() => this.onClickCell(rowIndex * DIMENSION + k)}
            />
          ))}
        </div>
      );
    }
  }

  getPlayerChecker() {
    return this.state.ticTurn ? TIC_TURN_CHECKER : TAC_TURN_CHECKER;
  }

  render() {
    const rows = sliceInRows(this.state.board, DIMENSION);
    const winner = this.getWinnerChecker(this.state.board);
    return (
      <div>
        {winner ? (
          <div>{winner} WINS!!!</div>
        ) : (
          <div>Turn for player: {this.getPlayerChecker()}</div>
        )}
        <div>{rows.map((v, k) => this.printBoardRow(v, k))}</div>
      </div>
    );
  }
}

export default Board;
