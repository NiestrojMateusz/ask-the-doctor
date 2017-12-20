import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './QuestionCard.styl';
import Tab from './Tab/Tab';
import _ from 'lodash';
import Votes from '../Comments/Votes/Votes';
class Question extends Component {

  state = {
    width: window.innerWidth || document.documentElement.clientWidth
  }
  componentWillMount() {
    this.question = this.getQuestion(this.props.id);
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

  getQuestion = (id) => {
    let question = _.find(this.props.questions, {questionID: id})
    return question ? question : null
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
            key={`${this.props.id}_${currentComment}`}
            logo={this.props.logo} />)
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
          key={comment} />
        ))
      } else {
        tabs = this.question.comments.map(comment => (
          <Tab
            logo={this.props.logo}
            key={comment} />
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
          <Votes />
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
            <p onClick={(id)=>this.props.showModal("1")}><span className={styles.username}>{this.props.username}</span> is asking</p>
            <h2 className={styles.title}>{this.props.title}</h2>
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
    questions: state.questions
  }
}
export default connect(mapStateToProps)(Question);