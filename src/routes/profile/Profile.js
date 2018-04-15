import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Profile from '../../components/profile';
import PachUser from '../../components/pachUser';

class Profiles extends Component {

  render() {
    return (
      <div>
        <PachUser />
        <Profile />
      </div>
    );
  }
}

export default Profiles;

