import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

import Book from '../book';

import './search.css';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }
  }

  handleChange = (e) => {    
    this.setState({ value: e.target.value });
  }

  render() {       
    const url = `/books?search=${this.state.value}`
    return (
      <div>
        <form action={url} method='GET'>
          <input type="text" name="search" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="Leita"/>
        </form>
      </div>
    );
  }

}

