import React, { Component } from 'react';
import styled from 'styled-components';
import { DIMENSION, sliceInColumns, sliceInDiagonals, sliceInRows } from '../../utils';

import Row from '../../layouts/RowGrid';
import ButtonGrid from '../ButtonGrid';
import Grid from '../Grid';
import Button from '../Button';
import Text from '../Text';

const TIC_TURN_CHECKER = 'X';
const TAC_TURN_CHECKER = 'O';
const INITIAL_STATE = {
  board: Array(DIMENSION * DIMENSION).fill(null),
  ticTurn: true,
  gameFinished: false,
};

const StyledContainer = styled.div`
  flex: 1;
  display: block;
  justify-content: center;
`;

class Game extends Component {
  state = INITIAL_STATE;

  onClickCell(i) {
    const board = this.state.board;
    if (board[i] || this.state.gameFinished) {
      return;
    }
    board[i] = this.getPlayerChecker();
    const winner = this.getWinnerChecker(board);
    this.setState({
      board: board,
      ticTurn: winner !== '' ? this.state.ticTurn : !this.state.ticTurn,
      gameFinished: winner !== '',
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
    return this.state.ticTurn ? TIC_TURN_CHECKER : TAC_TURN_CHECKER;
  }

  render() {
    const rows = sliceInRows(this.state.board, DIMENSION);
    return (
      <StyledContainer>
        {this.state.gameFinished ? (
          <div>
            <Text center color="white" background="active" space>
              {this.getPlayerChecker()} WINS!!!
            </Text>
            <Button type="butotn" text="Restart" onClick={() => this.restartGame()}>
              Restart
            </Button>
          </div>
        ) : (
          <div>
            <Text center space>
              Turn for player:
            </Text>
            <Text center color="white" background={this.getPlayerChecker()} space>
              {this.getPlayerChecker()}
            </Text>
          </div>
        )}
        <Grid>
          {rows.map((row, rowIndex) => (
            <Row key={rowIndex} className="board-row">
              {row.map((v, k) => (
                <ButtonGrid
                  key={rowIndex * DIMENSION + k}
                  value={v}
                  onClick={() => this.onClickCell(rowIndex * DIMENSION + k)}
                />
              ))}
            </Row>
          ))}
        </Grid>
      </StyledContainer>
    );
  }
}

export default Game;
