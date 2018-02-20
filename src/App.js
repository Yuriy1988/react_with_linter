import React, { Fragment } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Counter from './features/Counter/Counter';

const NoMatch = () => 'nothing to show';

const App = () => (
  <Fragment>
    <div style={{ border: '2px solid' }}>
      <NavLink
        activeClassName={styles.active}
        to='/counter'
      >About</NavLink>
    </div>
    <div>
      <Switch>
        <Route exact path='/counter' component={Counter} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Fragment>
);

export default App;
