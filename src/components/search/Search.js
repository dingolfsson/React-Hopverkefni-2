import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

import Button from '../button';

import './search.css';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      fireRedirect: false,
      value: '',
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }
  handleSubmit = (e) => {    
    e.preventDefault();
    this.setState({ fireRedirect: true })
  }

  render() {
    const from = '/books'
    const { fireRedirect } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="search" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="Leita" onClick={this.onClick} />
        </form>
        {fireRedirect && (
          <Redirect to={from + '?search=' + this.state.value} />
        )}
      </div>
    );
  }

}

