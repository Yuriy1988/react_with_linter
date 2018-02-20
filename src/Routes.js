import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Page1 from './features/Page1/Page1';
import Page2 from './features/Page2/Page2';
import PrivatePage from './features/PrivatePage/PrivatePage';
import PageNotFound from './features/PageNotFound/PageNotFound';

class Routes extends Component {
  state = {
    isLoggedIn: false,
  };

  handleLogIn = () => {
    this.setState((prevState) => ({
      isLoggedIn: !prevState.isLoggedIn,
    }));
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        <button onClick={this.handleLogIn}>
          {isLoggedIn ? 'Log out' : 'Log in'}
        </button>
        <Switch>
          <Route
            component={Page1}
            path='/page1'
          />
          <Route
            render={() => <PrivatePage isLoggedIn={isLoggedIn} />}
            exact
            path='/private'
          />
          <Route
            render={() => <Page2 test='HOME PAGE'/>}
            path='/'
          />
        </Switch>
      </div>
    )
  }
}

export default Routes;
