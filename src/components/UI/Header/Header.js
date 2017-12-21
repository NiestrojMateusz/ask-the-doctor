import React from 'react';
import AddButton from '../AddButton/AddButton';
import AppLogo from '../AppLogo/AppLogo';
import styles from './Header.styl';
const Header = (props) => {
  let header;

  header = (
    <form>
      <fieldset className={styles.fs1}>
        <div>
          <h1>QUESTIONS <AddButton /></h1>
          <div>
            <input type="radio" name="category" id="my_shelf"/>
            <label htmlFor="my_shelf"><b>My shelf</b></label>
            <input type="radio" name="category" id="all_q"/>
            <label htmlFor="all_q"><b>All questions</b></label>
          </div>
        </div>
        <input type="search" name="" id={styles.search} placeholder="Search questions" />
      </fieldset>

      <fieldset className={styles.fs2}>
        <label><i>Sort by: </i></label>
        <select name="sort_by" onChange={props.sortChange}>
          <option value="recent">recent</option>
          <option value="newest">newset</option>
          <option value="oldest">oldest</option>
        </select>
        <span><i>or </i></span>
        <p className={styles.hot}><b>hot</b></p>
        <button className={styles.submit}>SEARCH</button>
      </fieldset>
    </form>
  )

  if (props.simpleType) {
    header = (
      <div className={styles.Simple}>
       <AppLogo />
       <h1>QUESTION</h1>
       <AddButton/>
       <p className={styles.lastActivity}> Last time discussed <span>1</span> day ago</p>
      </div>
    )
  }

  return (
    <header className={styles.Header}>
      {header}
    </header>
  )
};
export default Header;

