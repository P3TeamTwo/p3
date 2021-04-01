import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import ProtectedRoute from './components/ProtectedRoute';
import './App.css';


import Welcome from './pages/Welcome/index.js';
import Login from './pages/Login/login';
import NoMatch from './pages/NoMatch/NoMatch';
import DailyReflection from './pages/DailyReflection/DailyReflection';
import Graphs from './pages/Graph/Graphs'
import CalendarPage from './pages/Calendar'
import Memo from './pages/Memo/Memo';


function App() {


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Daily" component={DailyReflection} />
        <Route exact path='/welcome' component={Welcome} />
        <Route exact path='/calendar' component={CalendarPage} />
        <Route exact path='/Graphs' component={Graphs} />
        <Route exact path='/Memo' component={Memo} />
        <Route exact path='*' component={NoMatch} />
        <Route exact path='/logout' />
      </Switch>
    </Router>



  );
}

export default App;