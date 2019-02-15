import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <HashRouter>{routes}</HashRouter>
      </div>
    );
  }
}

export default App;
