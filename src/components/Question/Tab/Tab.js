import React from 'react';
import styles from './Tab.styl';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const Tab = (props) => {
  let tab = (
    <div className={styles.Tab}>
      <img src="http://via.placeholder.com/50x50" alt="" className={styles.logo}/>
      <p className={styles.foot}>COMMENTED</p>
    </div>
  )

  if (props.type === 'counter') {
    tab = (
        <div className={styles.Tab}>
          <p className={styles.counter}>6</p>
          <p className={styles.foot}><i>more activities</i></p>
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