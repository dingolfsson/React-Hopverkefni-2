import React, { Component } from 'react';
import { connect } from 'react-redux';
import PachUser from '../../components/pachUser';

class PachUsers extends Component {

  render() {
    return (
      <div>
        <PachUser />
      </div>
    );
  }
}

export default PachUser;