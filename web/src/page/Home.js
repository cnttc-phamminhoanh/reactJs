/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import TodoItem from '../component/TodoItem';
import TrafficLight from '../component/TrafficLight';
import PropsChildren from '../component/PropsChildren';

import tick from '../image/tick.svg';
import close from '../image/cancel.svg';

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class Home extends Component {
    constructor() {
        super();
    
        this.inputElment = React.createRef();
    
        this.state = {
            // checkAll: false,
            currentColor: RED,
            newItem: '',
            todoItems: [
              { title : 'Go to market', isComplete: false },
              { title : 'Go fishing', isComplete: false},
              { title : 'Go to the cinema', isComplete: false }
            ]
        };
    
        this.onKeyUp = this.onKeyUp.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onCheckAll = this.onCheckAll.bind(this);
        this.onCloseAll = this.onCloseAll.bind(this);
    }

    componentDidMount() {
        this.inputElment.current.focus();
        setInterval(() => {
            this.setState({ 
                currentColor: this.getNextColor(this.state.currentColor)
            });
        }, 1000);
      }
    
    getNextColor(color) {
        switch(color) {
            case RED:
                return YELLOW;
            case YELLOW:
                return GREEN;
            default:
                return RED;        
        }
    }
    
    onItemClicked(item) {
        return(event) => {
            const isComplete = item.isComplete;
            const { todoItems } = this.state;
            const index = todoItems.indexOf(item);
            this.setState({
                todoItems: [
                    ...todoItems.slice(0, index),
                    {
                        ...item,
                        isComplete: !isComplete
                    },
                    ...todoItems.slice(index+1)
                ]
            })
        }
    }
    
    onKeyUp(event) {
        let text = event.target.value;
        if(event.keyCode === 13) {
            if(!text) {
                return;
            }
            this.setState({
                newItem: '',
                todoItems: [
                    { title: text, isComplete: false },
                    ...this.state.todoItems
                ]
            })
        }
    }
    
    onChange(event) {
        this.setState({
          newItem: event.target.value
        });
    }

    onCheckAll() {  
        let newToDoItems = [...this.state.todoItems];
        newToDoItems.map((item) => 
          item.isComplete = true
        )  
        this.setState({
          todoItems: newToDoItems
        })  
    }
    
    onCloseAll() {
        let newToDoItems = [...this.state.todoItems];
        newToDoItems.map((item) => 
          item.isComplete = false
        )
        this.setState({
          todoItems: newToDoItems
        })  
    }

    render() {
        const { todoItems, newItem, currentColor } = this.state;
        if(todoItems.length) {
            return (
                <div className="App">
                    <div className="Header">
                        <img onClick={this.onCheckAll} src={tick} width={32} height={32} alt="description of image" />
                        <img onClick={this.onCloseAll} style={{marginLeft: '5px'}} src={close} width={32} height={32} alt="button close all image" />
                        <input onChange={this.onChange} ref={this.inputElment} value={newItem} type='text' placeholder="Add a item" onKeyUp={this.onKeyUp} />
                    </div>

                    { 
                        todoItems.length > 0 && todoItems.map((item, index) => 
                            <TodoItem key={index} item={item} onClick={this.onItemClicked(item)} />
                        )
                    }
            
                    <TrafficLight currentColor={currentColor} />

                    <PropsChildren heading="Private web">
                    Now you can browse privately, and other people who use this device won’t see your activity. However, downloads, bookmarks and reading list items will be saved. 
                    </PropsChildren>
                </div>
            );
        }
    }
}

export default Home;

    // changeStateCheckAll() {
    //   return new Promise(resolve => {  
    //     resolve(this.setState({
    //       checkAll: !this.state.checkAll
    //       })
    //     )
    //   })
    // }

    // async onCheckAll() {
    //   await this.changeStateCheckAll();
    //   let newToDoItems = this.state.todoItems;
    //   let checkAll = this.state.checkAll;
    //   if(checkAll) {
    //     newToDoItems.map((item) => 
    //       item.isComplete = true
    //     )
    //   }
    //   else{
    //     newToDoItems.map((item) => 
    //       item.isComplete = false
    //     )
    //   }
    //   this.setState({
    //     todoItems: newToDoItems
    //   })  
    // }

    // TodoItem.PropTypes = {
    //   item: PropTypes.shape({
    //     isComplete: PropTypes.bool,
    //     title: PropTypes.string
    //   }),
    //   onClick: PropTypes.func
    // }