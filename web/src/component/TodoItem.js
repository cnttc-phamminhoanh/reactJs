/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import checkImg from '../image/check.svg';
import checkCompleteImg from '../image/checked.svg';
class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let url = checkCompleteImg;
        if(item.isComplete) {
            url = checkImg;
        }
        let className = classNames('TodoItem', {
            'TodoItem-complete': item.isComplete === true
        })
        
        return (
            <div className={className}>
                <img onClick={onClick} src={url} width={32} height={32}/>
                <p>{item.title}</p>
            </div>
        ); 
    }
}
export default TodoItem;