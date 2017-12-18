/* eslint-disable */
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
/* eslint-enable */
import Aux from './hoc/Auxiliary/Auxiliary';
import Modal from './components/UI/Modal/Modal'
import Header from './components/UI/Header/Header';
import Questions from './containers/Questions/Questions';
import FullQuestion from './containers/FullQuestion/FullQuestion';
import UserProfile from './containers/UserProfile/UserProfile';
import styles from './App.styl';

class App extends Component {
  state = {
    showModal: false
  }
  closeModal = () => {
    this.setState({showModal: false})
  }
  showModal = (e) => {
    console.log(e)
    this.setState({showModal: true})
  }
  render() {
    let routes =(
      <Switch>
        <Route path="/" exact render={() => <Questions showModal={this.showModal}/>} />
        <Route path="/question" component={FullQuestion} />
      </Switch>
    )
    return (
      <div className={styles.App}>
        <Aux>
          <Modal
            show={this.state.showModal}
            modalClosed={this.closeModal}>
            <UserProfile />
          </Modal>
          <Header />
          {routes}
        </Aux>
      </div>
    );
  }
}

export default App;
