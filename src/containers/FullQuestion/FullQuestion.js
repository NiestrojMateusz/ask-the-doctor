import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './FullQuestion.styl';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import Comments from '../../components/Comments/Comments';
import Header from '../../components/UI/Header/Header';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Button from '../../components/UI/Button/Button';
import { getData, handleQueryParams} from '../../shared/utilities';

class FullQuestion extends Component {
  componentWillMount() {
    this.question = getData(this.props.questions, "questionID", +this.props.match.params.id);
    const query = new URLSearchParams(this.props.location.search)
    let queryParams = handleQueryParams(query)
    this.user = getData(this.props.users, "userID", +queryParams.userID )
  }


  render () {
    return (
      <Aux>
        <Header simpleType={true}/>
        <main>
          <div className={styles.FullQuestion}>
            <QuestionCard
              fullQuestion="true"
              username={this.user.username}
              logo={this.user.avatar}
              title={this.question.title}
              showModal={this.props.showModal}
              id={+this.props.match.params.id}
              content={this.question.content}
              />
            <Button>GIVE new answer</Button>
            <p className={ styles.answersSummary }>2 peers already answerd Eva</p>
            <Comments
              question={this.question}
              commentsID={this.question.comments}
            />
            <Button>COMMENT</Button>
          </div>
        </main>
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
    users: state.users
  }
}

export default connect(mapStateToProps)(FullQuestion);