import React, { Component } from 'react';
import classNames from 'classnames/bind';

class list extends Component {

    render() {
    const { name, checkRadio, value, questionId, listId, listClick, activeIndex } = this.props
    const active = activeIndex === listId ? 'active' : ''; 

    return (
        <li className={classNames(active)} name={name} onClick={(event)=>{checkRadio(event,questionId,"Yes"),listClick(event,listId)}} value={value}>{value}</li>
    );
  }
}

export default list;
