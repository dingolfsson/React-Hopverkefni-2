import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/auth';


class PachUser extends Component {
  state = {
    name: null,
    password: null,
  }


  handleInputChange = (e) => {
    const { name, value } = e.target;
    // e.target.files[0]
    if (name) {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { dispatch } = this.props;
    const data = { ...this.state };
    dispatch(updateUser(data));
  }

  render() {
    const { isFetching, profiles, errors } = this.props;
    if (isFetching) {
      return (
        <p>Sæki minnisatriði..</p>
      );
    }
    console.info('===', errors)
    return (
      <section>
        {errors && (
          <ul>{errors.errors.map((error, i) => (
            <li key={i}>
              {error.message}
            </li>
          ))}</ul>
        )}
        <h2>uppfæra nafn og lykilorð</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="name" onChange={this.handleInputChange}/>
          </div>
          <div>
            <input type="text" name="password" onChange={this.handleInputChange}/>
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

export default connect(mapStateToProps)(PachUser);
