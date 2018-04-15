import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';
import { fetchBook } from '../../actions/books';

class Book extends Component {

  //Not using this atm, but does any1 know how?
  static propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    isbn10: PropTypes.string,
    isbn13: PropTypes.string,
    category: PropTypes.number,
    published: PropTypes.string,
    pagecount: PropTypes.string,
    language: PropTypes.string,
    categorytitle: PropTypes.string,
  }

  async componentDidMount() {
    const { dispatch, slug } = this.props;
    dispatch(fetchBook(slug.pathname));
  }

  render() {
    const { isFetching, books, slug } = this.props;

    if (isFetching) {
      return (
        <p>Sæki gögn..</p>
      );
    }

    const book = books.books;
    console.log("slug ", slug.pathname )
    const path = slug.pathname + '/edit';
    const newPath = path.replace('//', '/');
    console.log(newPath)

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

        <NavLink to={newPath} className="navigation__link"
        ><p>Breyta bók</p>  </NavLink>

        {/* button here ... */}
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(Book);
