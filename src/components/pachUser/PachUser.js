import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/auth';
import Button from '../button';

import './PachUser.css';


class PachUser extends Component {
  state = {
    name: null,
    password: null,
    verify: null,
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
    const { password, verify} = this.state;
    if(password === verify){
      dispatch(updateUser(data));
    }
  }

  render() {
    const { isFetching, profiles, errors } = this.props;
    const { password, verify} = this.state;
    if (isFetching) {
      return (
        <p>Sæki minnisatriði..</p>
      );
    }
    return (
      <section class='pachSection'>
        {errors && (
          <ul>{errors.errors.map((error, i) => (
            <li key={i}>
              {error.message}
            </li>
          ))}</ul>
        )}
        <h2 class='pachH' >uppfæra nafn og lykilorð</h2>
        {password === verify ? <p></p> : <p>passwords much mach</p>}

        <form onSubmit={this.handleSubmit} class="pachForm">
          <div class="pachdiv">
            <input type="text" name="name" onChange={this.handleInputChange}/>
            </div>
            <div class="pachdiv">
            <input type="password" name="password" onChange={this.handleInputChange}/>
            </div>
            <div class="pachdiv">
            <input type="password" name="verify" onChange={this.handleInputChange}/>
            </div>

           <Button disabled={password === verify}>Skrá</Button>
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
