import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
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
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton isGoogleSignIn={true} type="button" onClick={() => signInWithGoogle()}>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
