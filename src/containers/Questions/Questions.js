import React, { Component } from 'react';
import styles from './Questions.styl';

import Question from '../../components/QuestionCard/QuestionCard';

class Questions extends Component {
  render () {
    return (
      <div className={styles.Questions}>
        <Question showModal={this.props.showModal}/>
        <Question showModal={this.props.showModal}/>
      </div>
    )
  }
}
export default Questions;