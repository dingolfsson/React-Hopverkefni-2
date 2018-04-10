import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBooks } from '../../actions/books';

class BookForm extends Component {
  render() {
    const { title, author, description, isbn10, isbn13, category, published, pagecount, language, categorytitle } = this.state;
    const { isAdding, errors } = this.props;

    if(isAdding) {
      return (
        <p>Skrái atriði...</p>
      );
    }
    
    return (
      
    )

  }
}


const mapStateToProps = (state) => {
  return {
    isAdding: state.notes.isAdding,
    errors: state.notes.errors,
  }
}

export default connect(mapStateToProps)(BookForm);
