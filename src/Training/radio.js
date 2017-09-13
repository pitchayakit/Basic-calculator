import React, { Component } from 'react';
import "./Style/index.css"

class Training extends Component {

    render() {
    const { label, name, checkRadio} = this.props
    return (
        <div>
            <label onClick={checkRadio}>
                {label}
                <input type="radio" name={name} value="1" />
                <input type="radio" name={name} value="0" />
            </label>
        </div>
    );
  }
}

export default Training;
