import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "../src/assets/css/material-dashboard-react.css";

import indexRoutes from "../src/routes/index.js";

// import registerServiceWorker from './registerServiceWorker';
const hist = createBrowserHistory();

ReactDOM.render(
  <Router history = {hist}>
    <Switch>
    {indexRoutes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
    </Switch>
  </Router>, document.getElementById('root'));
// registerServiceWorker();
