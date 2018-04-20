import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Profile from '../../components/profile';
import PatchUser from '../../components/patchUser';
import Image from '../../components/image';

class Profiles extends Component {

  render() {
    return (
      <div class='profile'>
        <h2 className="page__title">Upplýsingar</h2>
        <Image />
        <PatchUser />
        <Profile />
      </div>
    );
  }
}

export default Profiles;

