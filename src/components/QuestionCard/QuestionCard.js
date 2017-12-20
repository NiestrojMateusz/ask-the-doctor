import React, { Component } from 'react';
import styles from './QuestionCard.styl';
import Tab from './Tab/Tab';
import Votes from '../Comments/Votes/Votes';
class Question extends Component {


  render() {
    let tabs,
        activities,
        details;

    tabs = (
      <div className={styles.tab}>
        <Tab type="counter"/>
        <Tab />
      </div>
    )
    activities = (
      <div className={styles.activities}>
        {tabs}
        <div className={styles.summary}>
          <p>1 <i>related discussion</i></p>
          <p>8 <i>peers invloved</i></p>
          <p>3 <i>conversations</i></p>
        </div>
      </div>
    )
    details = (
      <div className={styles.details}>
        <p className={styles.questionContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium earum sed hic ad incidunt provident quam praesentium necessitatibus! Ipsam dignissimos fugit ratione corporis commodi eius magnam molestiae veritatis pariatur alias?Nesciunt, adipisci quod, ducimus, dolore ipsam expedita aperiam suscipit consequuntur quam provident voluptas? Officiis placeat nisi, expedita temporibus iste incidunt ipsam, mollitia repudiandae omnis eum consequuntur esse porro suscipit quasi!
        </p>
        <div className={styles.summary}>
          <a href="">unfollow</a>
          <Votes />
        </div>
      </div>
    )

    return (
      <div
        className={this.props.fullQuestion
          ? [styles.Question, styles.fullQuestion].join(' ')
          : styles.Question} >
        <div className={styles.heading}>
          <img src="http://via.placeholder.com/50x50" alt="" className={styles.logo}/>
          <div>
            <p onClick={(id)=>this.props.showModal("1")}><span className={styles.username}>Nick</span> is asking</p>
            <h2 className={styles.title}>Some question?</h2>
          </div>
        </div>
        {this.props.fullQuestion
          ? details
          : activities
        }
        <p className={styles.foot}>{this.props.fullQuestion ? null : "ASKED"}</p>
      </div>
    );
  }
}
export default Question;