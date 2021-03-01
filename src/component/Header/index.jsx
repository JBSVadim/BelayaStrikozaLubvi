import React, {Component} from 'react';
import cx from 'classname';
import styles from './Header.module.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: false,
    }}

    buttonHandler = () => 
    this.setState((state, props) => {
      const {isSignIn} = state;
      return { isSignIn: !isSignIn };
    });
    render () {
      const {isSignIn} = this.state;
        return (
      <header className={styles.headerNavBar}>
        <div className={styles.logoWrapper}><img src="https://www.squadhelp.com/img/logo.png" alt="Logo"/></div>
        <button className={styles.btn}onClick={this.buttonHandler}>{isSignIn ? 'Log in' : 'Sign in'}</button>
      </header>
    )
  }
}
export default Header;
