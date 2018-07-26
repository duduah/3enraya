import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Board from "./components/Board";

// const DIMENSION = 3;
// const INITIAL_STATE = {
//   board: Array(DIMENSION * DIMENSION).fill(null),
//   ticTurn: true
// };

class App extends Component {
  // state = INITIAL_STATE;

  // onClickCell(i) {
  //   const board = this.state.board;
  //   board[i] = "X";
  //   this.setState({
  //     board: board
  //   });
  // }

  render() {
    // const { board } = this.state;

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
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
