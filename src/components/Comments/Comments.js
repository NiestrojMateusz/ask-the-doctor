import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, generateRandomInt } from '../../shared/utilities';

import styles from './Comments.styl';
import Comment from './Comment/Comment';
class Comments extends Component {
  render () {
    let comments = [];

    this.props.commentsID.map(id => {
      comments.push(getData(this.props.comments, 'commentID', id))
      return this;
    })

    let discuss = comments.map((comment, i) => {

      let user = getData(this.props.users, "userID", comment.userID)

      if (i % 2 !== 0) {
        return (
          <Comment
            user={user}
            key={`${comment.commentID}_${generateRandomInt(1, 500)}`}
            replyComment={true}
            content={comment.content}
            votes={comment.votes}
            commentID={comment.commentID}/>
        )
      }
      return (
        <Comment
          user={user}
          key={`${comment.commentID}_${generateRandomInt(1, 500)}`}
          content={comment.content}
          votes={comment.votes}
          commentID={comment.commentID}/>
      )
    })

    return (
      <div className={styles.Comments}>
        <div className={styles.discussion}>
          {discuss}
        </div>
      </div>
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

export default connect(mapStateToProps)(Comments);