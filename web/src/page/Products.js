import React, { Component } from 'react';

class Products extends Component {
    constructor() {
        super();
        this.state = {
            newItem: '',
        };
    
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    onChange(event) {
        this.setState({
            newItem: event.target.value
        });
    }

    onKeyUp(event) {
        let text = event.target.value;
        if(event.keyCode === 13) {
            if(!text) {
                return;
            }
            this.props.parentCallback(text);
            event.preventDefault();
        }
    }

    render() {   
        return (
            <div style={{marginLeft: 'auto', marginRight: "auto", width: "171px"}}>
                {this.props.msg}
                <div className="input">
                <input style={{width: "152px"}} type="text" onChange={this.onChange} onKeyUp={this.onKeyUp}/>
                </div>
            </div>
        );
    }
}

export default Products;