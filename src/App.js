import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'
import RouterApp from './router'
import './styles/modules.scss'

class App extends Component {
  render() {
    return (
        <Provider store={ store }>
            <RouterApp />
        </Provider>
    );
  }
}

export default App;
