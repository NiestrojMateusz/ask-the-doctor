/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
/* eslint-enable */
import Aux from './hoc/Auxiliary/Auxiliary';
import Modal from './components/UI/Modal/Modal'
import Questions from './containers/Questions/Questions';
import FullQuestion from './containers/FullQuestion/FullQuestion';
import UserProfile from './containers/UserProfile/UserProfile';
import styles from './App.styl';
import * as actionTypes from './store/actionTypes';


class App extends Component {

  handleModalClick = () => {
    this.props.onModalClick();
  }
  render() {
    let routes =(
      <Switch>
        <Route path="/" exact render={() => <Questions />} />
        <Route path="/question/:id" component={FullQuestion} />
      </Switch>
    )
    return (
      <div className={styles.App}>
        <Aux>
          <Modal
            show={this.props.showModal}
            modalClosed={this.handleModalClick}>
            <UserProfile user={this.props.currUser}/>
          </Modal>
          {routes}
        </Aux>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showModal: state.showModal,
    currUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onModalClick: () => dispatch({type: actionTypes.MODAL_CLICK})
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
