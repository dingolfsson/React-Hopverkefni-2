import React, { Component } from 'react';
import BooksComponent from '../../components/books';

class Books extends Component {

  render() {    
    const query = this.props.location.search || '';
  
    return (
      <BooksComponent search={query} />
    );
  }
}

export default Books;
