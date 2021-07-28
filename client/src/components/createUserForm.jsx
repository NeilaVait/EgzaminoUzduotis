import React, { Component } from 'react';

class UserForm extends Component {
  state = {};
  render() {
    return (
      <div className="user-form-container w-50">
        <form>
          <div className="form-group">
            <input name="username" type="text" className="form-control" placeholder="Vartotojo vardas" />
          </div>
          <div className="form-group">
            <input name="age" type="number" className="form-control" placeholder="Amžius" />
          </div>
          <div className="form-group">
            <input name="email" type="email" className="form-control" placeholder="El. pašto adresas" />
          </div>
          <div className="form-group">
            <input name="password" type="password" className="form-control" placeholder="Slaptažodis" />
          </div>

          <button type="submit" className="btn btn-primary">
            Sukurti vartotoją
          </button>
        </form>
      </div>
    );
  }
}

export default UserForm;
