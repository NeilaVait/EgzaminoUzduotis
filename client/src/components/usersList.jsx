import React, { Component } from 'react';
import UserItem from './userItem';

class UsersList extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="list-container">
        <h4 className="list-title">Esami vartotojai</h4>
        <ul className="product-list d-flex flex-wrap">
          {!this.props.users.length ? (
            <h2>No users added yet.</h2>
          ) : (
            <React.Fragment>
              {this.props.users.map((u) => (
                <UserItem handleDeleteUser={this.props.handleDeleteUser} key={u._id} user={u} />
              ))}
            </React.Fragment>
          )}
        </ul>
      </div>
    );
  }
}

export default UsersList;
