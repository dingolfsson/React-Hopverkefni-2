
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import User from '../../components/user';

class Users extends Component {

  render() {
    return (
      <div>
        <User />
      </div>
    );
  }
}

export default Users;
