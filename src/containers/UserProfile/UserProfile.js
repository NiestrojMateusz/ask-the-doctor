import React, { Component } from 'react';
import styles from './UserProfile.styl'

class UserProfile extends Component {
  render () {
    return (
      <div className={ styles.UserProfile }>
        <div className={ styles.heading }>
          <img src="http://via.placeholder.com/50x50" alt="" className={ styles.logo }/>
          <h2 className={ styles.username }>User Nick</h2>
          <div className={ styles.userDetails }>
            <div>
              <h4>MEMBER FOR</h4>
              <p>5 months</p>
            </div>
            <div>
              <h4>LAST SEEN</h4>
              <p>Saturday afternoon</p>
            </div>
            <div>
              <h4>ACTIVITY LEVEL</h4>
              <p>3</p>
            </div>
          </div>
        </div>
        <main>
          <h1>How it all started</h1>
          <section>
            <h4>THAT'S WHERE WE HAVE BEEN THESE 5 MONTHS AGO</h4>
            <ul className={ styles.stats }>
              <li><span>46</span> peers</li>
              <li><span>29</span>discussions</li>
              <li><span>19</span>finding</li>
              <li><span>10</span>questions</li>
            </ul>
          </section>
          <section className={ styles.user_joined }>
            <h4>WHO JOINED THE PLATFORM THAT SAME PERIOD</h4>
            <ul>
              <li>
                <img src="http://via.placeholder.com/50x50" alt="" className={styles.logo}/>
                <a href="">S.E.N Waweru</a>
              </li>
              <li>
                <img src="http://via.placeholder.com/50x50" alt="" className={ styles.logo }/>
                <a href="">Patricia</a>
              </li>
              <li>
                <img src="http://via.placeholder.com/50x50" alt="" className={ styles.logo }/>
                <a href="">Joseph Aluoch</a>
              </li>
            </ul>
          </section>
          <section className={ styles.hotDisc }>
            <h4>THE HOTTEST DISCUSSION THESE DAYS</h4>
            <img src="http://via.placeholder.com/50x50" alt="" className={ styles.logo }/>
            <a href="">Andrew</a><span> FOUND THE GUARDIAN ARTICLE</span>
            <a className={ styles.title } href="">Vegan diet to stop diabetes progress</a>
            <ul className={ styles.summary }>
              <li><span>3</span> related discussions</li>
              <li><span>3</span> conversations</li>
              <li><span>6</span> peers involved</li>
              <li><span>19</span> upvotes</li>
            </ul>
          </section>
        </main>
      </div>
    )
  }
}
export default UserProfile;