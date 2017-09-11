import React, { Component } from 'react';

class Botton extends Component {
  shouldComponentUpdate(nextProps, nextState) {
      return 0;
  }

  render() {
    let { bg,type,value,onButtonClick } = this.props
    return (
        <button className={bg} type={type} value={value} onClick={onButtonClick}>{value}</button>
    );
  }
}

export default Botton;
