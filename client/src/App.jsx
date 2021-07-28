import './App.css';
import React, { Component } from 'react';
import UserForm from './components/createUserForm';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <UserForm />
        </div>
      </div>
    );
  }
}

export default App;
