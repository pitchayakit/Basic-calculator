// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Training from './Training';
import Stateless from './Stateless';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/training" component={Training} />
    <Route path="/stateless" component={Stateless} />
  </Router>
);

export default Routes;