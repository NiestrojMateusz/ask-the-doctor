import React from 'react';
import styles from './AppLogo.styl'

const AppLogo = (props) => (
  <div className={ styles.appLogo }>
    <div className={ styles.before }></div>
    <div className={ styles.after }></div>
  </div>
);
export default AppLogo;

