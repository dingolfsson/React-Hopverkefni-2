import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

import Button from '../button';

import './search.css';
import Book from '../book';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      fireRedirect: false,
      value: '',
    }
  }

  componentWillReceiveProps(nextProps) {   
    console.log("will receive props");
    
    console.log(nextProps);
       
    this.setState({ fireRedirect: false })
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
    console.log("fireRedirect", fireRedirect);
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="search" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="Leita" onClick={this.onClick} />
        </form>
        
        {fireRedirect && (
          <Book query={[this.state.value]} />
        )
        } 
      </div>
    );
  }

}

