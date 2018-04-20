import React, { Component } from 'react';
import BookForm from '../../components/form';

class Form extends Component {

  render() {
    return (
      <div>
        <BookForm slug={this.props.location} />
      </div>
    );
  }
}

export default Form;
