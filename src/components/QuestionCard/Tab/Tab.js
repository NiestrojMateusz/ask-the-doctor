import React from 'react';
import styles from './Tab.styl';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const Tab = (props) => {
  let dot = (<div className={styles.dot}></div>);
  let tab = (
    <div className={styles.Tab}>
      <img src={props.logo} alt="" className={styles.logo}/>
      <p className={styles.foot}>COMMENTED</p>
      {dot}
    </div>
  )

  if (props.type === 'counter') {
    tab = (
        <div className={[styles.Tab, styles.counterTab].join(' ')}>
          <p className={styles.counter}>{props.counter}</p>
          <p className={styles.foot}><i>more activities</i></p>
          {dot}
        </div>
      );
  }

  return (
    <Aux>
      {tab}
    </Aux>
  );
}


export default Tab;