import React, { Component } from 'react'
import "./Style/index.css"
import Botton from './botton'
import Record from './record'

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculate : '0',
      record : []
    }
  }

  componentDidUpdate () {
    let { calculate } = this.state
    let calculateToString = calculate.toString()
    if(calculate[0] === '0' && calculateToString.length >= 2){
      this.setState({
        calculate : calculateToString.substring(1, calculateToString.length)
      })
    }
  }
 
  buttonClick = (event) => {
    let { calculate } = this.state
    let calculateToString = calculate.toString()
    if(calculate+event.target.value === '00'){
      return 0
    }

    if(event.target.value === '='){
      try {
        const sum = eval(this.state.calculate)
        this.setState({
          calculate : sum,
          record : this.state.record.concat(this.state.calculate + "=" + sum)  
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

    else if(event.target.value === 'AC') {
      this.setState({
        calculate : calculateToString.substring(0, calculateToString.length - 1)
      })
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

  render() {
    let calculateBotton = [
      {bg: "bg-operator", value:"("},
      {bg: "bg-operator", value:")"}, 
      {bg: "bg-operator", value:"%"}, 
      {bg: "bg-operator", value:"AC"},
      {bg: "bg-number", value:"7"},
      {bg: "bg-number", value:"8"},
      {bg: "bg-number", value:"9"},
      {bg: "bg-operator", value:"/"},
      {bg: "bg-number", value:"4"},
      {bg: "bg-number", value:"5"},
      {bg: "bg-number", value:"6"},
      {bg: "bg-operator", value:"*"},
      {bg: "bg-number", value:"1"},
      {bg: "bg-number", value:"2"},
      {bg: "bg-number", value:"3"},
      {bg: "bg-operator", value:"-"},
      {bg: "bg-number", value:"0"},
      {bg: "bg-number", value:"*"},
      {bg: "bg-equal", value:"="},
      {bg: "bg-operator", value:"+"}
    ]
    
    let mapCalculateBotton = calculateBotton.map((obj, index) => (
      <Botton key={index} bg={obj.bg} type="botton" value={obj.value} onButtonClick={this.buttonClick}/>
    ))

    return (
      <div className="calculator">
        <div className="padding-top-10">
          <input type="text" name="sum" value={this.state.calculate} />
        </div>
        <div>
          {mapCalculateBotton}
        </div>
        <Record inputValue={this.state.record} />
      </div>
    );
  }
}

export default Calculator;
