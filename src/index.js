import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

// Pages
import Home from './Home';

import './index.css';
import './lib.css';
import moment from "moment";

moment.locale('fr'); 

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
 </Router>
), document.getElementById('page'))