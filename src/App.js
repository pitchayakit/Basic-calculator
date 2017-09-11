import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator/index';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Calculator</h2>
        </div>
        <Calculator />
      </div>
    );
  }
}

export default App;
