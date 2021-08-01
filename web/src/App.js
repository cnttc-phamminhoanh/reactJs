import React, { Component } from 'react';
import './App.css';
import TodoItem from './component/TodoItem';
import TrafficLight from './component/TrafficLight';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;
class App extends Component {
  constructor() {
    super();

    this.state = {
        currentColor: RED,
        todoItems: [
          { title : 'Go to market', isComplete: false },
          { title : 'Go fishing', isComplete: false},
          { title : 'Go to the cinema', isComplete: false }
        ]
    };
  }

  componentDidMount() {
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

  render() {
    const { currentColor } = this.state;
    const { todoItems } = this.state;
    if(todoItems.length) {
      return (
        <div className="App">
          { todoItems.length > 0 && todoItems.map((item, index) => 
              <TodoItem key={index} item={item} onClick={this.onItemClicked(item)} />
            )
          }
  
          <TrafficLight currentColor={currentColor} />
        </div>
      );
    }
    
  }
  
}

export default App;
