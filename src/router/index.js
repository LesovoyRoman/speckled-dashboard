import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Container  from 'react-bootstrap/Container';
// import Row  from 'react-bootstrap/Row';
// import Col  from 'react-bootstrap/Col';

/**
 * Partials
 */
import Sidebar from './../components/partials/Sidebar'

/**
 * Pages
 */
import Dashboard from './../components/pages/Dashboard'

class RouterApp extends Component {
    render() {
        return (
            <>
                <Sidebar />

                <Router>
                    <Route exact path='/' component={ Dashboard } />
                </Router>
            </>
        )
    }
}

export default RouterApp;
