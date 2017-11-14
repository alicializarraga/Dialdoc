import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to DialDoc</h1>
        </header>
        <br/>
        <form>
          <div> Username: <input type="text" /> </div>
          <div> Password: <input type="password" /> </div>
        </form>
      </div>
    );
  }
}

export default App;
