import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './base.css';

import Index from './component/index';
import Search from './component/search';

ReactDOM.render((
    <Router>
        <Route exact path="/" component={Index}></Route>
        <Route path="/search" component={Search}></Route>
    </Router>
),document.getElementById('root'))
