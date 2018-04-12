import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Profile from '../../components/profile';

class Profiles extends Component {

  render() {
    return (
      <div>
        <Profile />
      </div>
    );
  }
}

export default Profiles;

