import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'
import RouterApp from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/modules.scss'

/**
 * Partials
 */
import Sidebar from './components/partials/Sidebar'
import Header from './components/partials/Header'

class App extends Component {
  render() {
    return (
        <Provider store={ store }>
            <Sidebar />

            <Header />

            <RouterApp />
        </Provider>
    );
  }
}

export default App;
