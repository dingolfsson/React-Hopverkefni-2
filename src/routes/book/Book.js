import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BookRoute from '../../components/book'

class Book extends Component {


  render() {    
    const query = this.props.location.search || '';       
  
    return (
      <BookRoute search={query}/>
    );
  }
}

/* todo setja upp tengingu við redux til að vita stöðu notanda */
export default Book;
