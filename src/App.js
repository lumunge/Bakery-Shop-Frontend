import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import CakesAndConfectionaries from './Pages/CakesAndConfectionaries';
import About from './Pages/About';
import Contact from './Pages/Contact';
import './App.css';
import Login from './User/Login';
import Signup from './User/Signup';


export default class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cakes-&-confectionaries" component={CakesAndConfectionaries} />
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact} />
      <Route path="/login-and-sign-up" component={Login} />
      <Route path="/sign-up" component={Signup} />
      </Switch>
      </Router>
    )
  }
}

