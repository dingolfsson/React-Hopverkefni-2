import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BookRoute from '../../components/book'

class Book extends Component {


  render() {
    const query = this.props.location.search || '';

    /* todo birta mismunandi upplýsingar ef innskráður notandi eða ekki */

    return (
      <BookRoute query={query}/>
    );
  }
}

/* todo setja upp tengingu við redux til að vita stöðu notanda */
export default Book;
