import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about';
import Manual from '../pages/manual';
import Contact from '../pages/contact';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/quem-somos" exact component={ About } />
                    <Route path="/manual" exact component={ Manual } />
                    <Route path="/contato" exact component={ Contact } />
                </Switch>
            </Router>
        );
    }
}

export default Routes;