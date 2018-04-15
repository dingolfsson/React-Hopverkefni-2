import React, { Component } from 'react';
import UserComponent from '../../components/userID';

class Book extends Component {

  render() {
    return (
      <BookComponent slug={this.props.location} />
    );
  }
}

export default Book;
