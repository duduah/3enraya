import React, { Component } from 'react';

import { DIMENSION, sliceInColumns, sliceInDiagonals, sliceInRows } from '../../utils';

import { StyledRow, Template } from '../../layouts';
import { ButtonGrid, Grid, HeaderDisplay } from '../../components';

const TIC_TURN_CHECKER = 'X';
const TAC_TURN_CHECKER = 'O';
const INITIAL_STATE = {
  board: Array(DIMENSION * DIMENSION).fill(null),
  ticTurn: true,
  gameFinished: false,
};

class Game extends Component {
  state = INITIAL_STATE;

  onClickCell(i) {
    const { board, gameFinished, ticTurn } = this.state;
    if (board[i] || gameFinished) {
      return;
    }
    board[i] = this.getPlayerChecker();
    const winner = this.getWinnerChecker(board);
    this.setState({
      board: board,
      ticTurn: winner !== '' ? ticTurn : !ticTurn,
      gameFinished: winner !== '' || this.boardCompleted(),
    });
  }

  restartGame() {
    this.setState({
      board: Array(DIMENSION * DIMENSION).fill(null),
      ticTurn: true,
      gameFinished: false,
    });
  }

  getWinnerChecker(board) {
    let winnerRow = '';
    const boardRows = sliceInRows(board, DIMENSION);
    const boardColumns = sliceInColumns(board, DIMENSION);
    const boardDiagonals = sliceInDiagonals(board, DIMENSION);
    const boardEvaluation = boardRows.concat(boardColumns.concat(boardDiagonals));

    for (let i = 0; i < boardEvaluation.length && winnerRow === ''; i++) {
      const boardEvaluate = boardEvaluation[i];
      const checker = boardEvaluate[0] ? boardEvaluate[0] : null;
      winnerRow = checker && boardEvaluate.every(v => v === checker) ? checker : '';
    }
    return winnerRow;
  }

  getPlayerChecker() {
    if (this.boardCompleted()) {
      return null;
    } else {
      return this.state.ticTurn ? TIC_TURN_CHECKER : TAC_TURN_CHECKER;
    }
  }

  boardCompleted() {
    const { board } = this.state;
    return board.filter(e => e).length === board.length;
  }

  render() {
    const rows = sliceInRows(this.state.board, DIMENSION);
    return (
      <Template logo="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/2000px-Tic_tac_toe.svg.png">
        <HeaderDisplay
          finished={this.state.gameFinished}
          completed={this.boardCompleted()}
          playerChecker={this.getPlayerChecker()}
          onClick={() => this.restartGame()}
        />
        <Grid>
          {rows.map((row, rowIndex) => (
            <StyledRow key={rowIndex} className="board-row">
              {row.map((v, k) => (
                <ButtonGrid
                  key={rowIndex * DIMENSION + k}
                  value={v}
                  onClick={() => this.onClickCell(rowIndex * DIMENSION + k)}
                />
              ))}
            </StyledRow>
          ))}
        </Grid>
      </Template>
    );
  }
}

export default Game;
