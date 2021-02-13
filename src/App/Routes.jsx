import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
  
  export default function Routes() {
      return (
        <Router>
          <div>          
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={About}/>
            </Switch>
          </div>
        </Router>
      );
    }