import React, { Component } from 'react';
import Login from './components/Login/Login';
import Garage from './components/Garage/Garage';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Login />
        <Garage />
      </div>
    );
  }
}

export default App;
