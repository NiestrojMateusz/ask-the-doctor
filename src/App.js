/* eslint-disable */
import React, { Component } from 'react';
/* eslint-enable */
import Header from './components/UI/Header/Header';
import Questions from './containers/Questions/Questions';
import styles from './App.styl';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <Questions />
      </div>
    );
  }
}

export default App;
