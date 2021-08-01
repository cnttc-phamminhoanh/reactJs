import React, { Component } from 'react';
import classNames from 'classnames';
import './TrafficLight.css';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends Component {
    render() {
        const { currentColor } = this.props;
        return (
            <div className="TrafficLight">
                <div className= {classNames('buld','red', {
                    active: currentColor === RED
                })} />
                <div className= {classNames('buld','yellow', {
                    active: currentColor === YELLOW
                })} />
                <div className= {classNames('buld','green', {
                    active: currentColor === GREEN
                })} />
            </div>
        );
    }
}

export default TrafficLight;