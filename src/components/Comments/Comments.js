import React, { Component } from 'react';
import styles from './Comments.styl';
import Comment from './Comment/Comment';
class Comments extends Component {
  render () {
    return (
      <div className={styles.Comments}>
        <div className={styles.discussion}>
          <Comment />
          <Comment replyComment={true} />
          <Comment />
        </div>
      </div>
    )
  }
}
export default Comments;