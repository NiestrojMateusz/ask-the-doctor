import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import styles from './Questions.styl';
import * as actionTypes from '../../store/actionTypes';

import Question from '../../components/QuestionCard/QuestionCard';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Header from '../../components/UI/Header/Header';
import { getData } from '../../shared/utilities';
import InfiniteScroll from 'react-infinite-scroller';

class Questions extends Component {

  getUser = (id) => {
    let user = _.find(this.props.users, {userId: id});
    return user ? user : null
  }

  loadItems = () => {
    this.props.onLoadingMoreQuestions();
  }

  render () {
    let questions = this.props.questions.map(question => {
      // let user = this.getUser(question.userID)
      let user = getData(this.props.users, 'userID', question.userID)
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
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems}
          hasMore={this.props.hasMore}
        >
          <div className={styles.Questions}>
            {questions}
          </div>
        </InfiniteScroll>
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
    users: state.users,
    comments: state.comments,
    hasMore: state.hasMoreItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoadingMoreQuestions: () => dispatch({type: actionTypes.LOAD_MORE})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Questions);