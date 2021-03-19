import React from 'react';
import {HashRouter as Router , Route, Switch} from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage/homepage';
import Welcome from './pages/Welcome/index.js';
import Login from './pages/Login/login';
import NoMatch from './pages/NoMatch/NoMatch';
// Testing purposes
import DailyReflection from './pages/DailyReflection/DailyReflection';
import Welcome from './pages/Welcome/welcome';


//  suppppppp


function App() {
  return (
        <Router>
        <Switch>        
        <Route exact path="/" component={Login} />
        <Route exact path="/Daily" component={DailyReflection} />
        <Route exact path="/Welcome" component={Welcome} />
        <Route exact path='*' component={NoMatch}/>
        </Switch>
      </Router>
        
      
  );
}

export default App;
