import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook, updateBook, resetBook } from '../../actions/books';
import { fetchCategories } from '../../actions/categories';
import { Redirect } from 'react-router';
import './Form.css';
import Button from '../button';

class Form extends Component {
  state = {
    title: ' ',
    author: ' ',
    description: ' ',
    isbn10: ' ',
    isbn13: ' ',
    category: 1,
    published: ' ',
    pageCount: ' ',
    language: ' ',
    categorytitle: ' ',
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name) {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { dispatch, slug } = this.props;
    const data = { ...this.state };
    const path = slug.pathname;
    const newPath = path.replace('edit', '');

    if (path === '/books/new') {
      dispatch(addBook(data));
    }else {
      dispatch(updateBook(newPath, data))
    }
  }

  async componentDidMount() {
    const { dispatch, books, slug } = this.props;
    dispatch(fetchCategories());
    const path = slug.pathname;
    if (path !== '/books/new') {
      this.setState({ ...books });
    }
  }

  async componentWillUnmount(){
    const { dispatch } = this.props;
    dispatch(resetBook());
  }


  render() {
    const { isAdding, errors, isFetching, categories, success, slug, books } = this.props;

    if(isAdding) {
      return (
        <p>Skrái atriði...</p>
      );
    }

    if(isFetching) {
      return (
        <p>Sæki gögn..</p>
      )
    }

    const path = slug.pathname;
    let newPath, title;
    if (path === '/books/new' && success) {
      newPath = '/books/' + books[0].id; 
      return <Redirect to={newPath} />;
    }

    newPath = path.replace('edit', '');
    if(success) {
      return <Redirect to={newPath} />;
    }

    if (path === '/books/new') {
      title = 'Skrá bók';

    }else {
      title = 'Breyta bók';
    }

    return (
      <div className='form-container'>              
        <h2 className="page__title">{title}</h2>
        {errors.errors && (
          <ul>{errors.errors.map((error, i) => (
            <li key={i}>
              {error.message}
            </li>
          ))}</ul>
        )}

        <form onSubmit={this.handleSubmit}>

          <div>
            <label htmlFor="title">Title:</label>
            <input id="title" type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="author">Author:</label>
            <input id="author" type="text" name="author" value={this.state.author} onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="category">Category:</label>
            <select onChange={this.handleInputChange} name='category'>
              {
                categories.map((i) => (
                  <option id={i.id} key={i.id} value={i.id}>{i.title}</option>
                ))
              }
            </select>
          </div>

          <div>
            <label htmlFor="isbn10">ISBN10:</label>
            <input id="isbn10" type="text" name="isbn10" value={this.state.isbn10} onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="isbn13">ISBN13:</label>
            <input id="isbn13" type="text" name="isbn13" value={this.state.isbn13} onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="pagecount ">Page:</label>
            <input id="pagecount" type="text" name="pageCount" value={this.state.pagecount} onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="language">Language:</label>
            <input id="language" type="text" name="language" value={this.state.language} onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="published">Published:</label>
            <input id="published" type="text" name="published" value={this.state.published} onChange={this.handleInputChange} />
          </div>
          <Button disabled={isAdding} className='vista' children='Vista'/>
        </form>
      </div>
    )
  
  }
} 


const mapStateToProps = (state) => {
  return {
    isAdding: state.books.isAdding,
    isUpdating: state.books.isUpdating,
    errors: state.books.errors,
    success: state.books.success,
    books: state.books.books,
    isFetching: state.categories.isFetching,
    categories: state.categories.categories,
    error: state.categories.error,
  }
}

export default connect(mapStateToProps)(Form);
