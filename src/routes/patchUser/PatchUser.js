import React, { Component } from 'react';
import { connect } from 'react-redux';
import PatchUser from '../../components/patchUser';

class PachUsers extends Component {

  render() {
    return (
      <div>
        <PatchUser />
      </div>
    );
  }
}

export default PatchUser;