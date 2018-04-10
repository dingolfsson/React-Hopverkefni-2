import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/auth';

class Register extends Component {
  state = {
    username: '',
    password: '',
    fname: '',
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
    const { username, fname, password } = this.state;
    dispatch(registerUser(username, fname, password));
  }

  render() {
    const { username, fname, password } = this.state;
    const { isFetching, isAuthenticated, message } = this.props;
    if (isFetching) {
      return (
        <p>Búa til notenda <em>{username}</em>...</p>
      );
    }

    return (
      <div>
        {message && (
          <p>{message}</p>
        )}

        <form onSubmit={this.handleSubmit}>

          <div>
            <label htmlFor="username">Notendanafn:</label>
            <input id="username" type="text" name="username" value={username} onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="username">nafn:</label>
            <input id="fname" type="text" name="fname" value={fname} onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="password">Lykilorð:</label>
            <input id="password" type="password" name="password" value={password} onChange={this.handleInputChange} />
          </div>

          <button disabled={isFetching}>Innskrá</button>
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

export default connect(mapStateToProps)(Register);
