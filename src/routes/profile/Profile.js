import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Profile from '../../components/profile';
import PachUser from '../../components/pachUser';
import Image from '../../components/image';

import './Profile.css';

class Profiles extends Component {

  render() {
    return (
      <div class='profile'>
        <Image />
        <PachUser />
        <Profile />
      </div>
    );
  }
}

export default Profiles;

