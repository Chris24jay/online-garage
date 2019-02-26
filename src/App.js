import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import routes from './routes'
import { Provider } from 'react-redux'
import store from './dux/store'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Provider store={store}>
          <Navbar />
          <HashRouter>{routes}</HashRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
