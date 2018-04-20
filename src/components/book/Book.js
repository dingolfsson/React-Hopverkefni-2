import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { fetchBook } from '../../actions/books';
import Button from '../button';

class Book extends Component {


  async componentDidMount() {
    const { dispatch, slug } = this.props;
    dispatch(fetchBook(slug.pathname));
  }

  review() {
    
  }

  goBack() {
    
  }

  render() {
    const { isFetching, books, slug } = this.props;

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

        <NavLink to={newPath} className="navigation__link"
        ><p>Breyta bók</p>  </NavLink>

        <div>
          <Button onClick={this.review} className='readbook' children='Lesin Bók' />
        </div>

        <div>
          <Button onClick={this.goBack} className='back' children='Til Baka' /> 
        </div>
        
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
