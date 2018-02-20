import React, { Component } from 'react';
import { withRouter } from 'react-router';

class SomeComponent extends Component {
  handleClick = () => {
    this.props.history.push('/page2');
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        Change route by click
      </button>
    );
  }
}
export default withRouter(SomeComponent);
