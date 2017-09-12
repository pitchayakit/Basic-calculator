import React, { Component } from 'react';

class Record extends Component {

    render() {
    let { inputValue } = this.props
    return (
        <div>
            {inputValue.map(item => <p>{item}</p>)}
        </div>
    );
  }
}

export default Record;
