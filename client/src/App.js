import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

import Welcome from './pages/Welcome/index.js';
import Login from './pages/Login/login';
import NoMatch from './pages/NoMatch/NoMatch';
// Testing purposes
import DailyReflection from './pages/DailyReflection/DailyReflection';
// import Welcome from './pages/Welcome';
import Graphs from './pages/Graph/Graphs'
import CalendarPage from './pages/Calendar'
import WordMap from './pages/WordMap/WordMap'



function App() {


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Daily" component={DailyReflection} />
        <Route exact path='/welcome' component={Welcome} />
        <Route exact path='/calendar' component={CalendarPage} />
        <Route exact path='/Graphs' component={Graphs} />
        <Route exact path='/WordMap' component={WordMap} />
        <Route exact path='*' component={NoMatch} />
      </Switch>
    </Router>



  );
}

export default App;