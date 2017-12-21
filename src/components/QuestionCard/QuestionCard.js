import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './QuestionCard.styl';
import Tab from './Tab/Tab';
import Votes from '../Comments/Votes/Votes';
import {getData, generateRandomInt} from '../../shared/utilities';
import * as actionTypes from '../../store/actionTypes';

class Question extends Component {

  state = {
    width: window.innerWidth || document.documentElement.clientWidth
  }
  componentWillMount() {
    this.question = getData(this.props.questions, "questionID", this.props.id);
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions = () => {
    let width = window.innerWidth || document.documentElement.clientWidth;
    this.setState({width: width})
  }

  getLogo = (commentID) => {
    let userID = getData(this.props.comments, "commentID", commentID).userID
    let user = getData(this.props.users, "userID", userID);
    return user.avatar
  }

  handleUsernameClick = (userID) => {
    this.props.onUsernameClick(userID);
  }

  render() {
    let tabs = [],
        activities,
        details;

    if (this.question.comments.length > 3) {
      let tabsQuantity;

      if (this.state.width >= 550) {
        tabsQuantity = 3
      }
      if (this.state.width < 550) {
        tabsQuantity = 1
      }
      for (let i = 0; i < tabsQuantity; i++) {
        let currentComment = this.question.comments[i];
        tabs.push(
          <Tab
            key={`${this.props.id}_${currentComment}` + generateRandomInt(1, 1000)}
            logo={this.getLogo(currentComment)} />)
      }
      tabs.unshift(
        <Tab
          key={this.props.id + '_counter'}
          type="counter"
          counter={this.question.comments.length - tabsQuantity}/>)
    } else {

      if (this.state.width < 550) {
        tabs = this.question.comments.slice(0,2).map(comment => (
          <Tab
          logo={this.props.logo}
          key={`${this.props.id}_${comment.commentID}` + generateRandomInt(1, 1000)} />
        ))
      } else {
        tabs = this.question.comments.map(comment => (
          <Tab
            logo={this.props.logo}
            key={`${this.props.id}_${comment.commentID}` + generateRandomInt(1, 1000)} />
        ))
      }
    }

    activities = (
      <div className={styles.activities}>
        {tabs}
        <div className={styles.summary}>
          <p>1 <i>related discussion</i></p>
          <p>8 <i>peers invloved</i></p>
          <p>3 <i>conversations</i></p>
        </div>
      </div>
    )
    details = (
      <div className={styles.details}>
        <p className={styles.questionContent}>
          {this.props.content}
        </p>
        <div className={styles.summary}>
          <a href="">unfollow</a>
          <Votes votes={this.question.votes} id={this.question.questionID} type="question"/>
        </div>
      </div>
    )

    return (
      <div
        className={this.props.fullQuestion
          ? [styles.Question, styles.fullQuestion].join(' ')
          : styles.Question} >
        <div className={styles.heading}>
          <img src={this.props.logo} alt="" className={styles.logo}/>
          <div>
            <p onClick={(userID) => this.handleUsernameClick(this.question.userID)}><span className={styles.username}>{this.props.username}</span> is asking</p>
            <Link
              to={{
                  pathname:`/question/${this.props.id}`,
                  search: `?userID=${this.question.userID}`
                }
              }
              className={styles.title}>{this.props.title}
            </Link>
          </div>
        </div>
        {this.props.fullQuestion
          ? details
          : activities
        }
        <p className={styles.foot}>{this.props.fullQuestion ? null : "ASKED"}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
    comments: state.comments,
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUsernameClick: (userID) => dispatch({type: actionTypes.USERNAME_CLICK, userID: userID})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Question);