import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let className = classNames('TodoItem', {
            'TodoItem-complete': item.isComplete === true
        })
        
        return (
            <div onClick={onClick} className={className}>
                <p>{this.props.item.title}</p>
            </div>
        ); 
    }
}
export default TodoItem;