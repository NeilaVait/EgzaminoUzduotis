import React, { Component } from 'react';

class UserItem extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    const { user: u } = this.props;
    return (
      <div className="users-container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{u.username}</h5>
            <p className="card-text">{u.age}</p>
            <p className="card-text">{u.email}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserItem;
