import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './App.module.scss';
import Routes from './Routes';

const App = () => (
  <Fragment>
    <div style={{ border: '2px solid' }}>
      <NavLink
        activeClassName={styles.active}
        className={styles.link}
        to='/page2'
      >
        Page 2
      </NavLink>
      <NavLink
        to="/page1"
        activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}
        activeClassName={styles.active}
      >Page1</NavLink>
      <NavLink
        to="/private"
        activeStyle={{
          fontWeight: 'bold',
          color: 'red'
        }}
        className={styles.link}
        activeClassName={styles.active}
      >Private Page</NavLink>
    </div>
    <Routes />
  </Fragment>
);

export default App;
