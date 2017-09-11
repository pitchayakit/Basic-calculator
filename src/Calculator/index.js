import React, { Component } from 'react';
import "./Style/index.css"

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculate : '',
      sum : 0
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

    else if(event.target.value === 'CE'){
      let { calculate } = this.state
      let calculateToString = calculate.toString()
      this.setState({
        calculate : calculateToString.substring(0, calculateToString.length - 1)
      })
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
        //eval(this.state.calculate + event.target.value)
        this.setState({
          calculate : this.state.calculate + event.target.value
        })
      } catch (e) {
        alert("Worng input")
      }
    }
  }

  render() {

    return (
      <div>
        <div className="padding-top-10">
          <input type="text" name="sum" value={this.state.calculate} />
        </div>
        <div>
          <button className="bg-operator" type="button" value="(" onClick={this.buttonClick}>(</button>
          <button className="bg-operator" type="button" value=")" onClick={this.buttonClick}>)</button>
          <button className="bg-operator" type="button" value="%" onClick={this.buttonClick}>%</button>
          <button className="bg-operator" type="button" value="CE" onClick={this.buttonClick}>CE</button>
        </div>
        <div>
          <button className="bg-number" type="button" value="7" onClick={this.buttonClick}>7</button>
          <button className="bg-number" type="button" value="6" onClick={this.buttonClick}>6</button>
          <button className="bg-number" type="button" value="5" onClick={this.buttonClick}>5</button>
          <button type="button" value="+" onClick={this.buttonClick}>+</button>
        </div>
        <div>
          <button className="bg-number" type="button" value="4" onClick={this.buttonClick}>4</button>
          <button className="bg-number" type="button" value="5" onClick={this.buttonClick}>5</button>
          <button className="bg-number" type="button" value="6" onClick={this.buttonClick}>6</button>
          <button className="bg-operator" type="button" value="-" onClick={this.buttonClick}>-</button>
        </div>
        <div>
          <button className="bg-number" type="button" value="1" onClick={this.buttonClick}>1</button>
          <button className="bg-number" type="button" value="2" onClick={this.buttonClick}>2</button>
          <button className="bg-number" type="button" value="3" onClick={this.buttonClick}>3</button>
          <button className="bg-operator" type="button" value="*" onClick={this.buttonClick}>*</button>
        </div>
        <div>
          <button className="bg-number" type="button" value="0" onClick={this.buttonClick}>0</button>
          <button className="bg-number" type="button" value="." onClick={this.buttonClick}>.</button>
          <button className="bg-blue" type="button" value="=" onClick={this.buttonClick}>=</button>
          <button className="bg-operator" type="button" value="+" onClick={this.buttonClick}>+</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
