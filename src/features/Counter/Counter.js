import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  reduxState: state,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
});

class Counter extends Component {
  render() {
    const counterValue = this.props.reduxState.counter.counterValue;
    const { increment, decrement } = this.props;

    return (
      <div>
        <div>{counterValue}</div>
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Dec</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
