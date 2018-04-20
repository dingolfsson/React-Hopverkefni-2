import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

import Book from '../book';
import Button from '../button'
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
        <form className="search-form" action={url} method='GET'>
          <input className="search-field" type="text" name="search" placeholder="Bókaleit" value={this.state.value} onChange={this.handleChange}/>
          <Button type="submit">Leita</Button>
        </form>
      </div>
    );
  }

}

