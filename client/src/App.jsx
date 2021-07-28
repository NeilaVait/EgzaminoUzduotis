import './App.css';
import React, { Component } from 'react';
import { addNewUser, getAllUsers, deleteUser } from './utils/requests';
import UserForm from './components/createUserForm';
import UsersList from './components/usersList';

class App extends Component {
  state = {
    users: [],
  };

  updateUser = async (dataForUpd) => {
    console.log(dataForUpd);
  };

  handleDeleteUser = async (userId) => {
    const result = await deleteUser(userId);
    result && this.getUsersAndSetState();
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
    result && this.getUsersAndSetState();
  };

  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <UserForm handleCreateNewUser={this.handleCreateNewUser} />
          <UsersList updateUser={this.updateUser} handleDeleteUser={this.handleDeleteUser} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
