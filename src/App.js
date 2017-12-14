/* eslint-disable */
import React, { Component } from 'react';
/* eslint-enable */
import Header from './components/UI/Header/Header';
import styles from './App.styl';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <main>
          <div className={styles.questions}>
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
          </div>
        </main>
      </div>
    );
  }
}

export default App;
