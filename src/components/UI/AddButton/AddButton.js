import React from 'react';
import styles from './AddButton.styl';
const AddButton = (props) => (
  <div className={ styles.circle }>
    <div className={ styles.before }></div>
    <div className={ styles.after }></div>
  </div>
);
export default AddButton;

