import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';
import { fetchBook } from '../../actions/books';

class UserID extends Component {

  async componentDidMount() {
    const { dispatch, slug } = this.props;
    console.info(slug)
    dispatch(fetchBook(slug.pathname));
  }

  render() {
    const { isFetching, books, slug } = this.props;
    console.info('USERID COMP');
    if (isFetching) {
      return (
        <p>Sæki gögn..</p>
      );
    }

    const book = books.books;
    const path = slug.pathname + '/read';
    const newPath = path.replace('//', '/');

    return (
      <div>
        <h3>{book.title}</h3>
        <p>Eftir {book.author}</p>
        
        {book.isbn10 && (
          <p>ISBN10: {book.isbn10}</p>
        )}

        {book.isbn13 && (
          <p>ISBN13: {book.isbn13}</p>
        )}

        <p>{book.categorytitle}</p>
        <p>{book.description}</p>

        {book.pagecount && (
          <p>{book.pagecount} síður</p>
        )}

        {book.published && (
          <p>Gefin út: {book.published}</p>
        )}

        {book.language && (
          <p>Tungumál: {book.language}</p>
        )}

        <NavLink to='/users' className="navigation__link"
        ><p>Til baka</p>  </NavLink>

        {/* button here ... */}
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.info(state);
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(UserID);
