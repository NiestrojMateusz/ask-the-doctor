import React from 'react';
import styles from './Header.styl';
const Header = (props) => {
  return (
    <header className={styles.Header}>
      <form>
        <fieldset className={styles.fs1}>
          <div>
            <h1>QUESTIONS</h1>
            <div>
              <input type="radio" name="my_shelf" id="my_shelf"/>
              <label htmlFor="my_shelf"><b>My shelf</b></label>
              <input type="radio" name="all_q" id="all_q"/>
              <label htmlFor="all_q"><b>All questions</b></label>
            </div>
          </div>
          <input type="search" name="" id={styles.search} placeholder="Search questions" />
        </fieldset>

        <fieldset className={styles.fs2}>
          <label>Sort by: </label>
          <select name="sort_by">
            <option value="recent">recent</option>
            <option value="newest">newset</option>
            <option value="oldest">oldest</option>
          </select>
          <input type="text" name="hot" id="hot" value="hot" className="hot"/>
          <input type="submit" value="Search"/>
        </fieldset>
      </form>
    </header>
  )
};
export default Header;

