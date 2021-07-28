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
            <p className="card-title">
              Vartotojo vardas <strong>{u.username}</strong>
            </p>
            <p className="card-text">{u.age}</p>
            <p className="card-text">{u.email}</p>
            <div className="btn-container">
              <button className="btn btn-primary">Edit</button>
              <button onClick={() => this.props.handleDeleteUser(u._id)} className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserItem;
