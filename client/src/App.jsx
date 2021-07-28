import './App.css';
import React, { Component } from 'react';
import { addNewUser, getAllUsers, deleteUser, updateCurrUser } from './utils/requests';
import UserForm from './components/createUserForm';
import UsersList from './components/usersList';

class App extends Component {
  state = {
    users: [],
  };

  updateUser = async (userId, dataForUpd) => {
    console.log(userId);
    const result = await updateCurrUser(userId, dataForUpd);
    console.log('upd result', result);
    result && this.getUsersAndSetState();
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
    const success = await addNewUser(formData);
    if (success === true) {
      this.getUsersAndSetState();
      return true;
    }
    return success;
  };

  render() {
    return (
      <div className="App">
        <div className="flex-container">
          <UserForm handleCreateNewUser={this.handleCreateNewUser} />
          <UsersList
            updateUser={this.updateUser}
            handleDeleteUser={this.handleDeleteUser}
            users={this.state.users || []}
          />
        </div>
      </div>
    );
  }
}

export default App;
