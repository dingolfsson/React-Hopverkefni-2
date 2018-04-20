import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import UserComponent from '../../components/userID';

class UserID extends Component {
  render() {
    return (
      <UserComponent slug={this.props.location} />
    );
  }
}

export default UserID;