import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
