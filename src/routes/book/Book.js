import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Books from '../../components/book';

class Book extends Component {

  render() {    
    const query = this.props.location.search || '';  
    console.log(query) 
  
    return (
      <Books search={query}/>
    );
  }
}

export default Book;
