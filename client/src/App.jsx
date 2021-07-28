import './App.css';
import React, { Component } from 'react';
import { addNewUser, getAllUsers } from './utils/requests';
import UserForm from './components/createUserForm';
import UsersList from './components/usersList';

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getUsersAndSetState();
  }

  getUsersAndSetState = async () => {
    const result = await getAllUsers();
    this.setState({ users: result });
  };

  handleCreateNewUser = async (formData) => {
    const result = await addNewUser(formData);
    console.log('result', result);
  };

  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <UserForm handleCreateNewUser={this.handleCreateNewUser} />
          <UsersList users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
