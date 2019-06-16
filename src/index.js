import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './base.css';

import Index from './component/index';

ReactDOM.render((
    <Router>
        <Route path="/" component={Index}></Route>
    </Router>
),document.getElementById('root'))
