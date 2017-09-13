import React, { Component } from 'react';
import "./Style/index.css"
//import classNames from 'classnames/bind';
import List from './list';

class Ul extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers : ['yes','no'],
            activeIndex: -1
        }
    }

    handleClick = (event, listId) => {
        this.setState({ activeIndex: listId });
    }

    render() {
    const { label, name, checkRadio, questionId } = this.props
    const { answers, activeIndex } = this.state
    let mapAnswer = answers.map((answer, index) => (
        <List key={index} name={name} checkRadio={checkRadio} value={answer} questionId={questionId} listId={index} listClick={this.handleClick} activeIndex={activeIndex}/>
    ))

    return (
        <div>
            <label>
                <span className="padding-right-10">{label}</span>
                <ul>
                    {mapAnswer}
                </ul>
            </label>
        </div>
    );
  }
}

export default Ul;
