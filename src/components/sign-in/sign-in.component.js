import React, { Component } from 'react';

export class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            required
            onChange={event => this.handleChange(event)}
          />
          <label>Email</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            required
            onChange={event => this.handleChange(event)}
          />
          <label>Password</label>
          <input type="submit" value="Submit form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
