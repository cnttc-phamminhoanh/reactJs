  /* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react';
import TopMenu from './component/TopMenu';

// import PropTypes from 'prop-types';

import Products from './page/Products';
import Home from './page/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }
  
  handleCallback = async (childData) =>{
    await this.setState({
      data: childData
    });
  }
 
  render() {
    
    return (
      <Router>
        <TopMenu />
        <Switch>
          <Route exact path="/products">
            <Products parentCallback={this.handleCallback} msg="This is products page" />
            {this.state.data}
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>      
    );  
  }
}

export default App;
