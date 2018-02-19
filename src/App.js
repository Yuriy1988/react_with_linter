import React, { Component } from 'react';
import styles from './App.module.scss';
var a = 9;

class App extends Component {
  render() {
    return (
      <div style={{ color: "green"}} className={styles.test}>Hi!</div>
     )
  }
}

export default App;
