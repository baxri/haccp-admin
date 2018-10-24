import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PublicRoute exact path="/login" component={Login} />
          <PrivateRoute path="/" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
