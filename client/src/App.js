import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from '../src/components/PrivateRoute';
import { useHistory } from "../src/components/LoginBtn";
import './App.css';
import Homepage from './pages/Homepage/homepage';
import Welcome from './pages/Welcome/index.js';
import Login from './pages/Login/login';
import NoMatch from './pages/NoMatch/NoMatch';
// Testing purposes
import DailyReflection from './pages/DailyReflection/DailyReflection';
// import Welcome from './pages/Welcome';



function App() {


  return (
    <useHistory value={false}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Daily" component={DailyReflection} />
          <PrivateRoute exact path='/welcome' component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path='*' component={NoMatch} />
        </Switch>
      </Router>

    </useHistory>


  );
}

export default App;