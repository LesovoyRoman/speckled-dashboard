import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './../components/pages/Dashboard'

class RouterApp extends Component {
    render() {
        return (
            <Router>
                <Route exact path='/' component={ Dashboard } />
            </Router>
        )
    }
}

export default RouterApp;
