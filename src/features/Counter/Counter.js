import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, setCounterValue } from './counterActions';
import { getCounterValue } from './selectors';

const mapStateToProps = (state) => ({
  counterValue: getCounterValue(state),
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  setCounterValue: value => dispatch(setCounterValue(value)),
});

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: 0,
    };
  }

  setCounterValue = () => {
    this.props.setCounterValue(this.state.inputValue);
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    const { inputValue } = this.state;
    console.log(this.props)
    const { increment, decrement, counterValue } = this.props;

    return (
      <div>
        <input
          type='text'
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.setCounterValue}>Set value</button>
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
