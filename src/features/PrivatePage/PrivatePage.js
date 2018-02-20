import React, { Component } from 'react';
import { Redirect } from 'react-router';

class PrivatePage extends Component {
  render() {
  const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn
          ? 'Cool private page'
          : <Redirect to='/' />
        }
      </div>
    );
  }
}

export default PrivatePage;
