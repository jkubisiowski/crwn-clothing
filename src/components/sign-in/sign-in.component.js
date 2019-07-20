import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

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
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            required
            label="email"
            handleChange={event => this.handleChange(event)}
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            label="password"
            handleChange={event => this.handleChange(event)}
          />
          <input type="submit" value="Submit form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
