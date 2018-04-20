import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePhoto } from '../../actions/auth';
import Button from '../button';
import { Redirect } from 'react-router';

import './Image.css';

class Image extends Component {
  state = {
    file: null,
  }


  handleInputChange = (e) => {
    const { name } = e.target;
    if (name) {
      this.setState({ [name]: e.target.files[0] });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { dispatch } = this.props;
    const data = { ...this.state };
    dispatch(updatePhoto(data));
  }

  render() {
    const { isFetching, isAuthenticated } = this.props;

    if (!isAuthenticated) {
      return <Redirect to='/' />;
    }

    if (isFetching) {
      return (
        <p>Sæki minnisatriði..</p>
      );
    }

    return (
      <section className='image-section'>
        <form className='image-form' onSubmit={this.handleSubmit}>
          <div>
            <input type="file" name="file" accept="image/*" onChange={this.handleInputChange}/>
          </div>
           <Button>Uppfæra Mynd</Button>
        </form>    
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isFetching: state.books.isFetching,
    profiles: state.books.books,
    error: state.books.error,
  }
}

export default connect(mapStateToProps)(Image);
