import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';

import HomePage from './pages/HomePage';

class App extends Component {
  // wrap in Provider for access to store
  render() {
    return (
      <Provider className="App" store={this.props.store}>
        <HomePage />
      </Provider>
    );
  }
}

export default App;
