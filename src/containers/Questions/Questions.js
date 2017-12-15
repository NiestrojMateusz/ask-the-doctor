import React, { Component } from 'react';
import styles from './Questions.styl';

import Question from '../../components/Question/Question';

class Questions extends Component {
  render () {
    return (
      <div className={styles.Questions}>
        <Question />
      </div>
    )
  }
}
export default Questions;