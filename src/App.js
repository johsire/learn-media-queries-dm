import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <span className="navbar-text">Start Bootstrap</span>

          <div className="gutter"></div>

          <div className="menu-small">
          <button className="menu-btn">
            <span className="menu-text">Menu</span>
          </button>
        </div>
        <div className="menu-large">
          <span className="menu-text">About</span>
          <span className="menu-text">Projects</span>
          <span className="menu-text">Contact</span>
        </div>
      </div>
    );
  }
}

export default App;
