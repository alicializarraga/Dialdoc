import React, { Component } from 'react';
import './App.css';
import Menu from './components/user_menu';

class App extends Component {
  state = {
    username: "",
    password: ""
  }

  handleUsername = (event) => {
    this.setState({username: event.target.value})
  }

  handlePassword = (event) => {
    this.setState({password: event.target.value})
  }

  handleSubmit = (event) => {
  event.preventDefault();
  if (this.state.username === "alicia" && this.state.password === "alicia"){
    this.setState({isLoggedIn: true})
  }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to DialDoc</h1>
        </header>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <div> Username: <input onChange={this.handleUsername}  type="text" value={this.state.username} /> </div>
          <div> Password: <input onChange={this.handlePassword} type="password" value={this.state.password} /> </div>
          <div> <button type="submit"> Login </button> </div>
        </form>        
        <span>{this.state.isLoggedIn ? "You are logged in" : "You are NOT logged in"}</span>
      </div>
    );
  }
}

export default App;
