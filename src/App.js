/* eslint-disable */
import React, { Component } from 'react';
/* eslint-enable */
import './App.css';

class App extends Component {
  render() {
    const headerStyles = {
      height: "150px",
      width: "100%"
    };
    return (
      <div className="App">
        <header style={headerStyles}>
          <h1>QUESTIONS</h1>
        </header>
        <main className="questionWall">
          <div className="question">
            <img src="" alt="" className="logo"/>
            <div className="heading">
              <p>Nick is asking</p>
              <h2>Some question?</h2>
            </div>
          </div>
          <div className="question">
            <img src="" alt="" className="logo"/>
            <div className="heading">
              <p>Nick is asking</p>
              <h2>Some question?</h2>
            </div>
          </div>
          <div className="question">
            <img src="" alt="" className="logo"/>
            <div className="heading">
              <p>Nick is asking</p>
              <h2>Some question?</h2>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
