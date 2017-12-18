import React, { Component } from 'react';
import styles from './QuestionCard.styl';
import Tab from './Tab/Tab';

class Question extends Component {

  state = {
    // width: window.innerWidth || document.body.clientWidth
  }

  // componentDidMount() {
  //   window.addEventListener("resize", this.updateDimensions);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.updateDimensions);
  // }

  // updateDimensions = () => {
  //   this.setState({width: window.innerWidth || document.body.clientWidth})
  // }
  render() {
    let tabs;

    tabs = (
      <div className={styles.tab}>
        <Tab type="counter"/>
        <Tab />
      </div>
    )

    // if (this.state.width >= 500) {
    //   tabs = (
    //     <div className={styles.tab}>
    //       <Tab />
    //       <Tab type="counter"/>
    //       <Tab />
    //      </div>
    //   )
    // }

    return (
      <div className={styles.Question}>
        <div className={styles.heading}>
          <img src="http://via.placeholder.com/50x50" alt="" className={styles.logo}/>
          <div>
            <p onClick={(id)=>this.props.showModal("1")}><span className={styles.username}>Nick</span> is asking</p>
            <h2 className={styles.title}>Some question?</h2>
          </div>
        </div>
        <div className={styles.foot}><p>ASKED</p></div>
        <div className={styles.activities}>
          {tabs}
          <div className={styles.summary}>
            <p>1 <i>related discussion</i></p>
            <p>8 <i>peers invloved</i></p>
            <p>3 <i>conversations</i></p>
          </div>
        </div>
      </div>
    );
  }
}
export default Question;