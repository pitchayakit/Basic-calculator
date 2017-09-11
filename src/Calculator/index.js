import React, { Component } from 'react';
import "./Style/index.css"
import Botton from './botton';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculate : '',
      sum : 0,
      status: "CE"
    };
  }

  buttonClick = (event) => {
    if(event.target.value === '='){
      try {
        this.setState({
          calculate : eval(this.state.calculate)
        })
      } catch (e) {
          alert("Worng input")
      }
    }

    else if(event.target.value === '.') {
      try {
        eval(this.state.calculate + event.target.value)
        this.setState({
          calculate : this.state.calculate + event.target.value
        })
      } catch (e) {
        alert("Worng input")
      }
    }

    else {
      try {
        this.setState({
          calculate : this.state.calculate + event.target.value
        })
      } catch (e) {
        alert("Worng input")
      }
    }
  }

  acButtonClick = (event) => {
    let { calculate } = this.state
    let calculateToString = calculate.toString()
    this.setState({
      calculate : calculateToString.substring(0, calculateToString.length - 1)
    })
  }
  
  render() {

    return (
      <div>
        <div className="padding-top-10">
          <input type="text" name="sum" value={this.state.calculate} onChange={this.inputChange} />
        </div>
        <div>
          <Botton bg='bg-operator' type='button' value="(" onButtonClick={this.buttonClick} />
          <Botton bg="bg-operator" type="button" value=")" onButtonClick={this.buttonClick} />
          <Botton bg="bg-operator" type="button" value="%" onButtonClick={this.buttonClick} />
          <Botton bg="bg-operator" type="button" value={this.state.status} onButtonClick={this.acButtonClick} />
        </div>
        <div>
          <Botton bg="bg-number" type="button" value="7" onButtonClick={this.buttonClick} />
          <Botton bg="bg-number" type="button" value="6" onButtonClick={this.buttonClick} />
          <Botton bg="bg-number" type="button" value="5" onButtonClick={this.buttonClick} />
          <Botton bg="bg-operator" type="button" value="/" onButtonClick={this.buttonClick} />
        </div>
        <div>
          <Botton bg="bg-number" type="button" value="4" onButtonClick={this.buttonClick} />
          <Botton bg="bg-number" type="button" value="5" onButtonClick={this.buttonClick} />
          <Botton bg="bg-number" type="button" value="6" onButtonClick={this.buttonClick} />
          <Botton bg="bg-operator" type="button" value="-" onButtonClick={this.buttonClick} />
        </div>
        <div>
          <Botton bg="bg-number" type="button" value="1" onButtonClick={this.buttonClick} />
          <Botton bg="bg-number" type="button" value="2" onButtonClick={this.buttonClick} />
          <Botton bg="bg-number" type="button" value="3" onButtonClick={this.buttonClick} />
          <Botton bg="bg-operator" type="button" value="*" onButtonClick={this.buttonClick} />
        </div>
        <div>
          <Botton bg="bg-number" type="button" value="0" onButtonClick={this.buttonClick} />
          <Botton bg="bg-number" type="button" value="." onButtonClick={this.buttonClick} />
          <Botton bg="bg-equal" type="button" value="=" onButtonClick={this.buttonClick} />
          <Botton bg="bg-operator" type="button" value="+" onButtonClick={this.buttonClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
