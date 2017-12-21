import React from "react";
import Votes from "../Votes/Votes";
import styles from "./Comment.styl";

const Comment = props => (
  <div className={props.replyComment ? styles.Reply : styles.Comment}>
    <div className={styles.logoContainer}>
      <img
        src={props.user.avatar}
        alt=" "
        className={styles.logo}
      />
    </div>
    <div className={styles.contentContainer}>
      <div className={styles.heading}>
        <a
          href=""
          className={styles.username}>
          {props.user.username}
        </a>
        <p>
          COMMENTED IT <span>yesterday</span>
        </p>
      </div>
      <div className={styles.content}>
        <p>
          {props.content}
        </p>
      </div>
      <div className={styles.votes}>
        <Votes votes={props.votes} id={props.commentID} type="comment"/>
      </div>
    </div>
  </div>
);
export default Comment;
