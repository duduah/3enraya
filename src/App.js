import React, { Component } from "react";
import "./App.css";

import Board from "./components/Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/2000px-Tic_tac_toe.svg.png"
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">Welcome to the classic Tic Tac Toe game</h1>
        </header>
        <div>
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
