import React from "react";
import Votes from "../Votes/Votes";
import styles from "./Comment.styl";

const Comment = props => (
  <div className={props.replyComment ? styles.Reply : styles.Comment}>
    <div className={styles.logoContainer}>
      <img
        src="http://via.placeholder.com/50x50"
        alt=" "
        className={styles.logo}
      />
    </div>
    <div className={styles.contentContainer}>
      <div className={styles.heading}>
        <a
          href=""
          className={styles.username}>
          David
        </a>
        <p>
          COMMENTED IT <span>yesterday</span>
        </p>
      </div>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illum
          explicabo voluptate maxime. Quos laudantium ullam delectus inventore
          eos, enim adipisci incidunt labore distinctio ab, earum iste rerum
          minima corporis! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Hic quo cumque eligendi nisi ut quas velit libero recusandae
          repellat ex! Eligendi expedita iste necessitatibus totam iusto soluta
          laudantium enim aliquid?
        </p>
      </div>
      <div className={styles.votes}>
        <Votes />
      </div>
    </div>
  </div>
);
export default Comment;
