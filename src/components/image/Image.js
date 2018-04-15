import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePhoto } from '../../actions/auth';


class Image extends Component {
  state = {
    file: null,
  }


  handleInputChange = (e) => {
    const { name, value } = e.target;
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
    const { isFetching, profiles } = this.props;
    if (isFetching) {
      return (
        <p>Sæki minnisatriði..</p>
      );
    }

    return (
      <section>
        <h2>uppfæra mynd</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="file" name="file" accept="image/*" onChange={this.handleInputChange}/>
          </div>
           <button>Skrá</button>
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
