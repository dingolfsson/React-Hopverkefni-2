import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Route, NavLink, Link, Switch, withRouter } from 'react-router-dom'

import UserRoute from './components/user-route';
import Header from './components/header';

import Home from './routes/home';
import Login from './routes/login';
import Register from './routes/register'
import User from './routes/user'
import UserID from './routes/userID'
import Profile from './routes/profile';
import NotFound from './routes/not-found';
import Books from './routes/books';
import Book from './routes/book';
import Form from './routes/form';
import Image from './routes/image';
import PachUser from './routes/patchUser';

import './App.css';

class App extends Component {

  render() {
    const authenticated = this.props.auth.isAuthenticated; /* vita hvort notandi sé innskráður */

    return (
      <main className="main">
        <Helmet defaultTitle="Bókasafnið" titleTemplate="%s – Bókasafnið" />

        <Header />

        <div className="main__content">
          <Switch location={this.props.location}>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/profile" authenticated={authenticated} exact component={Profile} />
            <Route path="/profile/image" authenticated={authenticated} exact component={Image} />
            <Route path="/profile/update" authenticated={authenticated} exact component={PachUser} />
            <Route path="/users" authenticated={authenticated} component={User} />
            <Route path="/users/:id" authenticated={authenticated} component={UserID} />
            <Route path="/books" exact component={Books} />
            <Route path="/books/new" authenticated={authenticated} exact component={Form} />
            <Route path="/books/:id" exact component={Book} />
            <Route path="/books/:id/edit" authenticated={authenticated} exact component={Form} />
            <Route component={NotFound} />
          </Switch>
        </div>

      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state};  
}

export default withRouter(connect(mapStateToProps)(App));
