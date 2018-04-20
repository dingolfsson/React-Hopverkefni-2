import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../../actions/auth';
import { Link } from 'react-router-dom';
import Button from '../../components/button';

import './Login.css';

class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name) {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { dispatch } = this.props;
    const { username, password } = this.state;

    dispatch(loginUser(username, password));
  }

  handleLogout = (e) => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  }

  render() {
    const { username, password } = this.state;
    const { isFetching, isAuthenticated, message } = this.props;

    if (isAuthenticated) {
      return (
        <Redirect push to="/"/>
      );
    }

    if (isFetching) {
      return (
        <p>Skrái inn <em>{username}</em>...</p>
      );
    }

    return (
      <div className="login-section">
        <h2 className="page__title">Innskráning</h2>
        {message && (
          <p>{message}</p>
        )}

        <form className="login-form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Notendanafn:</label>
            <input className="form-input" id="username" type="text" name="username" value={username} onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="password">Lykilorð:</label>
            <input className="form-input" id="password" type="password" name="password" value={password} onChange={this.handleInputChange} />
          </div>

          <Button disabled={isFetching}>Innskrá</Button>
          <p><Link to="/register">Nýskráning</Link></p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    message: state.auth.message,
  }
}

export default connect(mapStateToProps)(Login);
