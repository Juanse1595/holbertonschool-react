import { css, StyleSheet } from 'aphrodite';
import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false
    }
  }
  handleLoginSubmit = () => {
    this.props.logIn(this.state.email, this.state.password);
  }
  handleChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }
  handleChangePassword = (event) => {
    this.setState({password: event.target.value})
  }
  render() {
    return (
        <>
          <div className={css(stylesLogin.appBody)}>
            <p>Login to access the full dashboard</p>
            <form>
              <label htmlFor='emailInput'>Email: </label>
              <input
              id='emailInput'
              type='text'
              className={css(stylesLogin.inputs)}
              value={this.state.email}
              onChange={(event) => {
                if (event.target.value.length > 0 && this.state.password.length > 0) {
                  this.setState({enableSubmit: true});
                } else {
                  this.setState({enableSubmit: false});
                }
                this.handleChangeEmail(event)
                }} />
              <label htmlFor='passwordInput'> Password: </label>
              <input
              id='passwordInput'
              type='password'
              className={css(stylesLogin.inputs)}
              value={this.state.password}
              onChange={(event) => {
                if (event.target.value.length > 0 && this.state.email.length > 0) {
                  this.setState({enableSubmit: true});
                } else {
                  this.setState({enableSubmit: false});
                }
                this.handleChangePassword(event)
                }} />
              {this.state.enableSubmit && <input type='submit' onSubmit={this.handleLoginSubmit()}></input>}
            </form>
          </div>
        </>
      );
  }
}

const stylesLogin = StyleSheet.create({
  appBody: {
    height: '100%',
    padding: 20,
    fontSize: '1.5rem'
  },
  inputs: {
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    }
  }
})

export { Login }