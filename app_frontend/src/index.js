import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from './Components/App'
import Year from './Components/Year' 


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={() => < App/>} />
        <Route path="/Year/:year" component={() => <Year />} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

