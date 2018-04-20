import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { fetchBook } from '../../actions/books';
import { browserHistory } from 'react-router'
import Button from '../button';

class Book extends Component {

  state = {
    review: '',
    grade: 0,
    visible: false,
  }

  async componentDidMount() {
    const { dispatch, slug } = this.props;
    dispatch(fetchBook(slug.pathname));
  }

  review(schoolId) {
    return (e) => {
      const visible = this.state.visible === schoolId ? null : schoolId;
      this.setState({ visible });
    }
  }


  render() {
    const { isFetching, books, slug } = this.props;
    const {visible} = this.state;
    if (isFetching) {
      return (
        <p>Sæki gögn..</p>
      );
    }

    const book = books.books;
    const path = slug.pathname + '/edit';
    const newPath = path.replace('//', '/');

    return (
      <div>
        <h2 className="page__title">{book.title}</h2>
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

        <NavLink to={newPath} className="navigation__link"><p>Breyta bók</p>  </NavLink>

        <Button onClick={this.review} className='readbook' children='Lesin Bók' />
        {visible && (
          <div>
            <label htmlFor="review">Um bók:</label>
            <textarea id="review" type="text" name="review" value={this.state.review} onChange={this.handleInputChange} />
            <label htmlFor="grade">Einkunn:</label>
            <select></select>
          </div>

        )}

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
