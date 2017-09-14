import React from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames/bind';

const list = ({ name, checkAllUlClick, value, questionId, listId, checkListClick, activeIndex }) => {
    const active = activeIndex === listId ? 'active' : ''
    return <li className={classNames(active)} name={name} onClick={(event)=>{checkAllUlClick(event,questionId,value);checkListClick(event,listId)}} value={value}>{value}</li>
}

list.propTypes = {
    name: PropTypes.string,
    checkAllUlClick: PropTypes.func,
    value: PropTypes.string,
    questionId: PropTypes.number,
    listId: PropTypes.number,
    checkListClick: PropTypes.func,
    activeIndex: PropTypes.number
}
export default list;