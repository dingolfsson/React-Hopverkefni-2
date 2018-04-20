import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePhoto } from '../../actions/auth';
import Button from '../button';

import './Image.css';

class Image extends Component {
  state = {
    file: null,
  }


  handleInputChange = (e) => {
    const { name } = e.target;
    // e.target.files[0]
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
    const { isFetching } = this.props;
    if (isFetching) {
      return (
        <p>Sæki minnisatriði..</p>
      );
    }

    return (
      <section class='imageSection'>
        <h2 class='imageH'>uppfæra mynd</h2>
        <form class='imageform' onSubmit={this.handleSubmit}>
          <div>
            <input type="file" name="file" accept="image/*" onChange={this.handleInputChange}/>
          </div>
           <Button>Skrá</Button>
        </form>    
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.books.isFetching,
    profiles: state.books.books,
    error: state.books.error,
  }
}

export default connect(mapStateToProps)(Image);
