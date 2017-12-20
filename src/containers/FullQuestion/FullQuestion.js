import React, { Component } from 'react';

import styles from './FullQuestion.styl';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import Comments from '../../components/Comments/Comments';
import Header from '../../components/UI/Header/Header';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Button from '../../components/UI/Button/Button';

class FullQuestion extends Component {
  render () {
    return (
      <Aux>
        <Header simpleType={true}/>
        <main>
          <div className={styles.FullQuestion}>
            <QuestionCard fullQuestion="true"/>
            <Button>GIVE new answer</Button>
            <p className={ styles.answersSummary }>2 peers already answerd Eva</p>
            <Comments />
            <Button>COMMENT</Button>
          </div>
        </main>
      </Aux>
    )
  }
}
export default FullQuestion;