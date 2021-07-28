import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props) {
    super();
    this.state = {
      formData: {
        username: '',
        age: '',
        email: '',
        password: '',
      },
    };
  }

  componentDidMount() {
    this.props.user && this.propsToState();
  }

  propsToState = () => {
    const formData = this.props.user;
    this.setState({ formData });
  };

  clearInputs = () => {
    const clearedFormData = {
      username: '',
      age: '',
      email: '',
      password: '',
    };

    this.setState({ formData: clearedFormData });
  };

  handleLocalSubmit = (e) => {
    e.preventDefault();
    console.log('click');
    const { username, age, email, password } = this.state.formData;
    const dataToSend = {
      username,
      age,
      email,
      password,
    };

    if (this.props.user) {
      console.log('cia editas');
      this.props.editUser(dataToSend);
      return;
    }

    // console.log('datatosend', dataToSend);
    const result = this.props.handleCreateNewUser(dataToSend);
    result && this.clearInputs();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ formData: { ...this.state.formData, [name]: value } });
  };

  render() {
    const { formData: f } = this.state;

    return (
      <div className="user-form-container w-50">
        {this.props.user ? '' : <h4>Sukurti naują vartotoją</h4>}

        <form autoComplete="off" onSubmit={this.handleLocalSubmit}>
          <div className="form-group">
            <input
              value={f.username}
              onChange={this.handleChange}
              name="username"
              type="text"
              className="form-control"
              placeholder="Vartotojo vardas"
            />
          </div>
          <div className="form-group">
            <input
              value={f.age}
              onChange={this.handleChange}
              name="age"
              type="number"
              className="form-control"
              placeholder="Amžius"
            />
          </div>
          <div className="form-group">
            <input
              value={f.email}
              onChange={this.handleChange}
              name="email"
              type="email"
              className="form-control"
              placeholder="El. pašto adresas"
            />
          </div>
          {this.props.user ? (
            ''
          ) : (
            <div className="form-group">
              <input
                value={f.password}
                onChange={this.handleChange}
                name="password"
                type="password"
                className="form-control"
                placeholder="Slaptažodis"
              />
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            {this.props.user ? 'Išsaugoti' : 'Sukurti'}
          </button>
        </form>
      </div>
    );
  }
}

export default UserForm;
