import React from 'react';
import styles from './Votes.styl'

const Votes = (props) => (
  <div className={ styles.votes }>
    <div>19 upwotes</div>
    <div className={ [styles.arrow, styles.upvote].join(' ') }></div>
    <div className={ [styles.arrow, styles.downvote].join(' ') }></div>
  </div>
);
export default Votes;