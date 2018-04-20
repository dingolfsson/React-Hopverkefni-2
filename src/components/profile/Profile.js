import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom'
import { fetchProfiles } from '../../actions/profiles';
import { fetchReadProfilesBooks } from '../../actions/profiles';
import { fetchUserBooks } from '../../actions/books';

import List from '../list';

class Profile extends Component {
  state = {}

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProfiles());
    dispatch(fetchUserBooks());
  }

  render() {
    const { isFetching, profiles, isAuthenticated } = this.props;

    if (!isAuthenticated) {
      return <Redirect to='/' />;
    }

    if (isFetching) {
      return (
        <p>Sæki þínar upplýsingar..</p>
      );
    }

    return (
      <div>
        <List 
          title="Lesnar bækur" 
          data={profiles.items && (
            profiles.items.map((i) => (
              <div key={i.title} className="bookRead__item">
                <NavLink
                  to={'/books/' + i.book_id}
                  className="navigation__link"
                ><h4>{i.title}</h4></NavLink>
                <p>Einkunn: {i.rating}</p>
              </div>)))
          }
          />
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
