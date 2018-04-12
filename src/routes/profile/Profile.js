import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {

  render() {
    return (
      <div>
        <h1>Upplýsingar</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    message: state.auth.message,
    name: state.auth.user ? state.auth.user.name : '',
  }
}

export default connect(mapStateToProps)(Profile);