import React, { Component } from 'react';

class Calculator extends Component {
  

  render() {
    return (
        <input type={this.props.type} name={this.props.name} value={this.props.value} />
    );
  }
}

export default Calculator;
