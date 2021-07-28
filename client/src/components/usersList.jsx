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
        <ul className="product-list d-flex flex-wrap">
          {this.props.users.length ? (
            <h2>No products or services added yet.</h2>
          ) : (
            <React.Fragment>
              {this.props.products.map((p) => (
                <UserItem />
              ))}
            </React.Fragment>
          )}
        </ul>
      </div>
    );
  }
}

export default UsersList;
