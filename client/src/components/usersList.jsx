import React, { Component } from 'react';
import UserItem from './userItem';

class UsersList extends Component {
  render() {
    return (
      <div className="list-container">
        <h4 className="list-title">Esami vartotojai</h4>
        <ul className="user-list">
          {!this.props.users.length ? (
            <h5>Nėra pridėtų vartotojų.</h5>
          ) : (
            <React.Fragment>
              {this.props.users.map((u) => (
                <UserItem
                  updateUser={this.props.updateUser}
                  handleDeleteUser={this.props.handleDeleteUser}
                  key={u._id}
                  user={u}
                />
              ))}
            </React.Fragment>
          )}
        </ul>
      </div>
    );
  }
}

export default UsersList;
