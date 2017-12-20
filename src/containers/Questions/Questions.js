import React, { Component } from 'react';
import styles from './Questions.styl';

import Question from '../../components/QuestionCard/QuestionCard';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Header from '../../components/UI/Header/Header';

class Questions extends Component {
  render () {
    return (
      <Aux>
        <Header />
        <div className={styles.Questions}>
          <Question showModal={this.props.showModal}/>
          <Question showModal={this.props.showModal}/>
        </div>
      </Aux>
    )
  }
}
export default Questions;