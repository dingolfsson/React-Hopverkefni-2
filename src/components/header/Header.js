import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import Search from '../search';
import Button from '../button';
import { loginUser, logoutUser } from '../../actions/auth';

import './Header.css';

class Header extends Component {

  handleLogout = (e) => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  }

  render() {
    const { name, image } = this.props;
    if (this.props.auth.isAuthenticated) {
      return (
        <header className="header">
          <Link to="/" className="header__heading"><h1>Bókasafnið</h1></Link>
          <Search />
          <Link to="/profile">{ name }</Link>
          <Button onClick={this.handleLogout}>Logout</Button>
          <img src={image} alt="user pic"/>
        </header>
      );
    }
    return (
      <header className="header">
        <Link to="/" className="header__heading"><h1>Bókasafnið</h1></Link>

        <Search />
        
        <Link to="/login">Innskráning</Link>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    name: state.auth.user ? state.auth.user.name : '',
    image: state.auth.user ? state.auth.user.image ? state.auth.user.image : './profile.jpg' : './profile.jpg' ,
  }
}

export default connect(mapStateToProps)(Header);