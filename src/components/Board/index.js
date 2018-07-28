import React, { Component } from "react";
import Cell from "../Cell";

const DIMENSION = 3;
const TIC_TURN_CHECKER = "X";
const TAC_TURN_CHECKER = "O";
const INITIAL_STATE = {
  board: Array(DIMENSION * DIMENSION).fill(null),
  ticTurn: true
};

const sliceInRows = (array, size) =>
  array
    .map((_, index) => index % size === 0 && array.slice(index, index + size))
    .filter(row => row);

const sliceInColumns = (array, size) => {
  const arrayRows = sliceInRows(array, size);
  let arrayColums = Array(arrayRows.length);
  for (let i = 0; i < arrayRows.length; i++) {
    arrayColums[i] = arrayRows.map((_, k) => arrayRows[k][i]);
  }
  return arrayColums;
};

const sliceInDiagonals = (array, size) => {
  const boardRows = sliceInRows(array, size);
  const diagonal1 = boardRows.map((_, k) => boardRows[k][k]);
  const diagonal2 = boardRows.reverse().map((_, k) => boardRows[k][k]);

  return [diagonal1, diagonal2];
};

class Board extends Component {
  state = INITIAL_STATE;

  onClickCell(i) {
    const board = this.state.board;
    if (board[i] || this.getWinnerChecker(board)) {
      return;
    }
    board[i] = this.state.ticTurn ? TIC_TURN_CHECKER : TAC_TURN_CHECKER;
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

  render() {
    const rows = sliceInRows(this.state.board, DIMENSION);
    return <div>{rows.map((v, k) => this.printBoardRow(v, k))}</div>;
  }
}

export default Board;
