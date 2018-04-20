import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/auth';
import Button from '../button';
import { Redirect } from 'react-router';

import './PatchUser.css';


class PatchUser extends Component {
  state = {
    name: null,
    password: null,
    verify: null,
  }


  handleInputChange = (e) => {
    const { name, value } = e.target;
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
    const { isFetching, profiles, errors, isAuthenticated } = this.props;
    const { password, verify} = this.state;

    if (!isAuthenticated) {
      return <Redirect to='/' />;
    }

    if (isFetching) {
      return (
        <p>Sæki minnisatriði..</p>
      );
    }

    return (
      <section className='section__patch'>
        {errors && (
          <ul>{errors.errors.map((error, i) => (
            <li key={i}>
              {error.message}
            </li>
          ))}</ul>
        )}

        {password === verify ? <p></p> : <p>passwords much match</p>}

        <form onSubmit={this.handleSubmit}>
          <div className="patchdiv">
            <label htmlFor="name">Nafn:</label>
            <input type="text" name="name" onChange={this.handleInputChange}/>
            </div>
          <Button>Uppfæra nafn</Button>
        </form>
        <form onSubmit={this.handleSubmit}>
            <div className="patchdiv">
            <label htmlFor="name">Lykilorð:</label>
            <input type="password" name="password" onChange={this.handleInputChange}/>
            </div>
            <div className="patchdiv">
            <label htmlFor="name">Lykilorð, aftur:</label>
            <input type="password" name="verify" onChange={this.handleInputChange}/>
            </div>
           <Button disabled={password === verify}>Uppfæra lykilorð</Button>
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

export default connect(mapStateToProps)(PatchUser);
