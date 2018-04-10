import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../button';


import './search.css';

export default class Search extends Component {

  state = { value: '' }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="search" value={this.state.value} onChange={this.handleChange}/>
        <input type="submit" value="Leita" onClick={this.onClick} />
      </form>
    );
  }

}
