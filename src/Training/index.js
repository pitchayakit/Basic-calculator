import React, { Component } from 'react';
import "./Style/index.css"
import Ul from './ul';

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
            ],
            countClick: 0
        }
    }

    componentDidUpdate(prevProps, prevState) {
        let {questions, countClick} = this.state
        if(questions.length === countClick && prevState.status === "False"){
            this.setState({
                status : "true"
            })
            console.log(questions)
        }
    }

    checkRadio = (event,id,value) => {
        let { questions } = this.state
        if(questions[id].click !== 1){
            questions[id].click = 1
            this.setState({
                countClick : this.state.countClick += 1
            })
        }
        questions[id].value = value
    }

    render() {
    let { status, questions} = this.state
    let mapQuestions = questions.map((question, index) => (
        <Ul key={index} label={question.label} name={question.name} checkRadio={this.checkRadio} questionId={index}/>
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
