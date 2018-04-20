import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom'
import { fetchProfiles } from '../../actions/profiles';
import { fetchReadProfilesBooks } from '../../actions/profiles';
import { fetchUserBooks } from '../../actions/books';

import List from '../list';

class Review extends Component {
  state = {}

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchRead(user, bookId));
  }

  render() {
    const { isFetching, profiles, isAuthenticated } = this.props;
    const page = (profiles.offset / 10) + 1;

    if (isFetching) {
      return (
        <p>Sæki..</p>
      );
    }

    return (
      <div className="section__review">

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isFetching: state.users.isFetching,
    profiles: state.books.books,
    error: state.books.error,
  }
}

export default connect(mapStateToProps)(Profile);
