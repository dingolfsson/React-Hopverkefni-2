import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
    const { isFetching, books } = this.props;

    if (isFetching) {
      return (
        <p>Sæki gögn..</p>
      );
    }

    const book = books.books;

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
        <p>{book.description}</p>
        <p>{book.pagecount} síður</p>
        <p>Gefin út: {book.published}</p>
        <p>Tungumál: {book.language}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    ...state,
  }
}

export default connect(mapStateToProps)(Book);
