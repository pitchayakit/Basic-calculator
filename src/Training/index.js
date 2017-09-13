import React, { Component } from 'react';
import "./Style/index.css"
import Radio from './radio';

class Training extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status : "False",
            questions : [
                {label: "Q1", name:"Q1", click:0},
                {label: "Q2", name:"Q2", click:0},
                {label: "Q3", name:"Q3", click:0},
                {label: "Q4", name:"Q4", click:0}
            ]
        }
    }

    checkRadio = (event) => {
        let { questions } = this.state
        const question = questions.find(function (obj) { return obj.name === event.target.name; });
        question.click = 1
        let radioClick = 0;
        for (let i = 0; i < questions.length; i++) {
            if(questions[i].click === 0) {
                radioClick = 0
                break;
            }
            radioClick = 1;
        }
        if(radioClick === 1){
            this.setState({
                status : "true"
            })
        }
    }

    render() {
    let { status,questions } = this.state
    let mapQuestions = questions.map((question, index) => (
        <Radio key={index} label={question.label} name={question.name} checkRadio={this.checkRadio}/>
    ))
    return (
        <div className="training">
            {mapQuestions}
            <p>{status}</p>
        </div>
    );
  }
}

export default Training;
