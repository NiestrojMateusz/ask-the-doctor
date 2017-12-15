import React from 'react';
import styles from './Question.styl';
import Tab from './Tab/Tab';

const Question = (props) => {
  return (
    <div className={styles.Question}>
      <div className={styles.heading}>
        <img src="http://via.placeholder.com/50x50" alt="" className={styles.logo}/>
        <div>
          <p><span className={styles.username}>Nick</span> is asking</p>
          <h2 className={styles.title}>Some question?</h2>
        </div>
      </div>
      <div className={styles.activities}>
        <div className={styles.tab}>
          <Tab type="counter"/>
          <Tab />
        </div>
        <div className={styles.summary}>
          <p>1 <i>related discussion</i></p>
          <p>8 <i>peers invloved</i></p>
          <p>3 <i>conversations</i></p>
        </div>
      </div>
    </div>
  );
}
export default Question;