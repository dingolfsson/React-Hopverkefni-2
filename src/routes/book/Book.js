import React, { Component } from 'react';
import BookComponent from '../../components/book';
import Button from '../../components/button';

class Book extends Component {

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.history.goBack()
    
  }

  render() {
    return (
      <content>
      <BookComponent slug={this.props.location} />
      <Button className='back' children='Til Baka' onClick={this.handleSubmit}/>
      </content>
    );
  }
}

export default Book;
