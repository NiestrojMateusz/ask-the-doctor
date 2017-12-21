import React from 'react';
import styles from './Votes.styl'
import { connect } from 'react-redux'

import * as actionTypes from '../../../store/actionTypes';

const Votes = (props) => (
  <div className={ styles.votes }>
    <div>{props.votes + " votes"}</div>
    <div className={ [styles.arrow, styles.upvote].join(' ') }  onClick={(id, voteFor) => props.onAddingVote(props.id, props.type)}></div>
    <div className={ [styles.arrow, styles.downvote].join(' ') }onClick={(id, voteFor) => props.onSubtractVote(props.id, props.type)}></div>
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    onAddingVote: (id, voteFor) => dispatch({type: actionTypes.ADD_VOTE, id: id, voteFor: voteFor}),
    onSubtractVote: (id, voteFor) => dispatch({type: actionTypes.SUBTRACT_VOTE, id: id, voteFor: voteFor})
  }
}
export default connect(null, mapDispatchToProps)(Votes);