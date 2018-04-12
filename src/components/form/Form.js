import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook, updateBook } from '../../actions/books';
import { fetchCategories } from '../../actions/categories';

class Form extends Component {
  state = {
    title: '',
    author: '',
    description: '',
    isbn10: '',
    isbn13: '',
    category: '',
    published: '',
    pageCount: '',
    language: '',
    categorytitle: '',
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
    dispatch(addBook(data));
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories());
  }


  render() {
    const data = { ...this.state };
    const { isAdding, errors, isFetching, categories } = this.props;
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

    return (
      <div>              
        {/* {errors && (
          <ul>{errors.map((error, i) => (
            <li key={i}>
              {error.message}
            </li>
          ))}</ul>
        )} */}
        <form onSubmit={this.handleSubmit}>

          <div>
            <label htmlFor="title">Tittle:</label>
            <input id="title" type="text" name="title" value={data.title} onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="author">Author:</label>
            <input id="author" type="text" name="author" value={data.author} onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <textarea id="description" type="text" name="description" value={data.description} onChange={this.handleInputChange} />
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
            <input id="isbn10" type="text" name="isbn10" value={data.isbn10} onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="isbn13">ISBN13:</label>
            <input id="isbn13" type="text" name="isbn13" value={data.isbn13} onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="pagecount ">Page:</label>
            <input id="pagecount" type="text" name="pageCount" value={data.pagecount} onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="language">Language:</label>
            <input id="language" type="text" name="language" value={data.language} onChange={this.handleInputChange} />
          </div>

          <div>
            <label htmlFor="published">Published:</label>
            <input id="published" type="text" name="published" value={data.published} onChange={this.handleInputChange} />
          </div>

          <button disabled={isAdding}>Skrá</button>
        </form>
      </div>
    )
  
  }
} 


const mapStateToProps = (state) => {
  return {
    isAdding: state.books.isAdding,
    errors: state.books.errors,
    isFetching: state.categories.isFetching,
    categories: state.categories.categories,
    error: state.categories.error,
  }
}

export default connect(mapStateToProps)(Form);
