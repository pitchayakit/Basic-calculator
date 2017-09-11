import React, { Component } from 'react';

class botton extends Component {

  render() {
    console.log(this.state.sum)
    return (
        <button type={this.props.type} value={this.props.value} onClick={this.bottonClick}>{this.props.label}</button>
    );
  }
}

export default botton;
