import React, { Component } from 'react';
import BookForm from '../../components/form';
import Button from '../../components/button';


class Form extends Component {

  handleSubmit = async (e) => {
    e.preventDefault();
    this.props.history.goBack()
    
  }

  render() {
    return (
      <div>
        <BookForm slug={this.props.location} />
        <Button className='back' children='Til Baka' onClick={this.handleSubmit}/>
      </div>
    );
  }
}

export default Form;
