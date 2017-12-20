import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import styles from './Questions.styl';

import Question from '../../components/QuestionCard/QuestionCard';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Header from '../../components/UI/Header/Header';

class Questions extends Component {

  getUser = (id) => {
    let user = _.find(this.props.users, {userId: id});
    return user ? user : null
  }

  render () {
    let questions = this.props.questions.map(question => {
      let user = this.getUser(question.userID)
      return (
        <Question
          key={question.questionID}
          username={user.username}
          logo={user.avatar}
          title={question.title}
          showModal={this.props.showModal}
          id={question.questionID}/>
      )
  })
    return (
      <Aux>
        <Header />
        <div className={styles.Questions}>
          {questions}
        </div>
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
    users: state.users,
    comments: state.comments
  }
}
export default connect(mapStateToProps)(Questions);