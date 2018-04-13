import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Books from '../../components/book';

class Book extends Component {

  render() {    
    const query = this.props.location.search || '';   
  
    return (
      <Books search={query}/>
    );
  }
}

export default Book;
