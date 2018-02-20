import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

class Page1 extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path={`${this.props.match.url}/first`}
            render={() => <div>First Component</div>}
          />
          <Route
            path={`${this.props.match.url}/second`}
            render={() => <div>Second Component</div>}
          />
        </Switch>
      </div>
    );
  }
}

export default Page1;
