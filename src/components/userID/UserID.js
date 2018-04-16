import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';
import { fetchUserIDBooks } from '../../actions/books';
import { fetchUserName } from '../../actions/users';

import List from './List';
class UserID extends Component {

  async componentDidMount() {
    const { dispatch, slug } = this.props;
    dispatch(fetchUserIDBooks(slug.pathname + '/read'));
    dispatch(fetchUserName(slug.pathname))
  }

  render() {
    const { isFetching, books, slug, name } = this.props;

    if (isFetching) {
      return (
        <p>Sæki gögn..</p>
      );
    }
    
    return (
      <div>
        <List 
          title={ name } 
          data={books.items && (
            books.items.map((i) => (
              <div key={i.id} className="bookRead__item">
                <NavLink
                  to={'/books/' + i.book_id}
                  className="navigation__link"
                ><h4>{i.title}</h4></NavLink>
                <p>Einkunn: {i.rating}</p>
              </div>)))
          }
          />
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.users.isFetching,
    books: state.books.books,
    error: state.books.error,
    name: state.users.users
  }
}

export default connect(mapStateToProps)(UserID);
