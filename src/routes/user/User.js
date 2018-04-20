
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import User from '../../components/user';

class Users extends Component {

  render() {
    console.info('testssssss');
    return (
      <div>
        <User history={this.props.history} />
      </div>
    );
  }
}

export default Users;
