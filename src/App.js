import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const DIMENSION = 3;

const BoardRow = ({ rowCells, rowIndex }) => (
  <div>{rowCells.map((_, k) => <button key={`${rowIndex}${k}`} />)}</div>
);
const Board = ({ board }) => (
  <div>
    {board.map((_, k) => <BoardRow key={k} rowCells={board[k]} rowIndex={k} />)}
  </div>
);

class App extends Component {
  render() {
    const boardRowCells = Array(DIMENSION).fill(null);
    const board = Array(DIMENSION).fill(boardRowCells);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Board board={board} />
        </div>
      </div>
    );
  }
}

export default App;
