import React, { Component } from 'react';
import UserForm from './createUserForm';

class UserItem extends Component {
  constructor(props) {
    super();
    this.state = {
      editOn: false,
    };
  }

  editUser = (dataForUpd) => {
    if (this.state.editOn) this.props.updateUser(this.props.user._id, dataForUpd);
    this.setState({ editOn: !this.state.editOn });
  };

  render() {
    const { user: u } = this.props;
    return (
      <div className="users-container">
        <div className="card">
          {this.state.editOn ? (
            <UserForm user={u} editUser={this.editUser} />
          ) : (
            <div className="card-body">
              <p className="card-title">
                Vartotojo vardas: <strong>{u.username}</strong>
              </p>
              <p className="card-text">Amžius: {u.age}</p>
              <p className="card-text">El. paštas: {u.email}</p>
              <div className="btn-container">
                <button onClick={this.editUser} className="btn btn-primary">
                  Redaguoti
                </button>
                <button onClick={() => this.props.handleDeleteUser(u._id)} className="btn btn-danger">
                  Pašalinti
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default UserItem;
