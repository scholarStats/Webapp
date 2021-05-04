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
import GetUsers from './Components/Admin/Pages/getUsers';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={() => < App/>} />
        <Route exact path="/login" component={() => < Login/>} />
        <Route path="/year/:year" component={() => <Year />} />
        <Route path="/error/:code" component={() => <Error />} />
        <Route path="/dashboard" component={() => <Dashboard />} />
        <Route path="/insert" component={() => <Insert />} />
        <Route path="/insertUser" component={() => <InsertUser />} />
        <Route path="/getUsers" component={() => <GetUsers />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

