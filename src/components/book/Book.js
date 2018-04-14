import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions/books';
import { NavLink } from 'react-router-dom'

class Book extends Component {
  state = {
    search: '',
    isQuery: false,
  }

  componentDidMount() {
    
  }

  render() {
    const { isFetching } = this.props;

    if (isFetching) {
      return (
        <p>Sæki gögn..</p>
      );
    }

    return (
      <div>
  
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    isFetching: state.books.isFetching,
    books: state.books.books,
    error: state.books.error,
  }
}

export default connect(mapStateToProps)(Book);
