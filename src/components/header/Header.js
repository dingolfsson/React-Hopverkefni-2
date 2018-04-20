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
      return (
        <header className="header">
          <div>
            <Link to="/" className="header__heading"><h1>Bókasafnið</h1></Link>
          </div>
          <div>
            <Search />
          </div>
          {this.props.auth.isAuthenticated ? (
            <div className="user-wrapper">   
              <img src={image} alt="user pic" />           
              <div className="right-wrapper">
                <Link to="/profile">{name}</Link>
                <Button onClick={this.handleLogout}>Logout</Button>
              </div>     
             </div>
          ) : (
              <Link to="/login">Innskráning</Link>
          )
        
        }
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