import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./Style/index.css"
import List from './list';

class Ul extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answers : ['yes','no'],
            activeIndex: -1
        }
    }

    checkListClick = (event, listId) => {
        this.setState({ activeIndex: listId })
    }

    render() {
    const { label, name, checkAllUlClick, questionId } = this.props
    const { answers, activeIndex } = this.state
    let mapAnswer = answers.map((answer, index) => (
        <List key={index} name={name} checkAllUlClick={checkAllUlClick} value={answer} questionId={questionId} listId={index} checkListClick={this.checkListClick} activeIndex={activeIndex}/>
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
    )
  }
}

Ul.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    checkAllUlClick: PropTypes.func,
    questionId: PropTypes.number
}

export default Ul;
