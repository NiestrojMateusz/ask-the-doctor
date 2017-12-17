/* eslint-disable */
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
/* eslint-enable */
import Header from './components/UI/Header/Header';
import Questions from './containers/Questions/Questions';
import FullQuestion from './containers/FullQuestion/FullQuestion';
import styles from './App.styl';

class App extends Component {
  render() {
    let routes =(
      <Switch>
        {/* <Route path="/question" component={} */}
        <Route path="/" exact component={Questions} />
        <Route path="/question" component={FullQuestion} />
      </Switch>
    )
    return (
      <div className={styles.App}>
        <Header />
        {routes}
      </div>
    );
  }
}

export default App;
