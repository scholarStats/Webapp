import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './Components/App';
import Year from './Components/Year';
import Error from './Components/Partials/Error';
import Login from './Components/Login';
import Dashboard from './Components/Admin/Dashboard';
import Insert from './Components/Admin/Pages/Insert';
import InsertUser from './Components/Admin/Pages/InsertUser';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={() => < App/>} />
        <Route exact path="/Login" component={() => < Login/>} />
        <Route path="/Year/:year" component={() => <Year />} />
        <Route path="/Error/:code" component={() => <Error />} />
        <Route path="/Dashboard" component={() => <Dashboard />} />
        <Route path="/Insert" component={() => <Insert />} />
        <Route path="/InsertUser" component={() => <InsertUser />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

