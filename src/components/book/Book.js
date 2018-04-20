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

  review() {
    return (e) => {
      const visible = !visible;
      this.setState({ visible: visible });
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name) {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { dispatch } = this.props;
    const data = { ...this.state };
    
    // dispatch(addReview(data));
    
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

        {!visible && (
          <Button onClick={this.review()} className='readbook' children='Lesin Bók' />
        )}

        {visible && (
          <div>
            <label htmlFor="review">Um bók:</label>
            <textarea id="review" type="text" name="review" value={this.state.review} onChange={this.handleInputChange} />
            <label htmlFor="grade">Einkunn:</label>
            <select onChange={this.handleInputChange} name='grade'>
              <option key='1' value='1'>1</option>
              <option key='2' value='2'>2</option>
              <option key='3' value='3'>3</option>
              <option key='4' value='4'>4</option>
              <option key='5' value='5'>5</option>
            </select>
            <Button className='vista' children='Vista' />
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
