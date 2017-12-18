import React, { Component } from 'react';

import styles from './FullQuestion.styl';
import QuestionCard from '../../components/QuestionCard/QuestionCard';

class FullQuestion extends Component {
  render () {
    return (
      <div className={styles.FullQuestion}>
        <QuestionCard fullQuestion="true"/>
      </div>
    )
  }
}
export default FullQuestion;