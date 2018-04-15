import React, { Component } from 'react';
import BookComponent from '../../components/book';

class Book extends Component {

  render() {
    return (
      <BookComponent slug={this.props.location} />
    );
  }
}

export default Book;
