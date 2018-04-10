import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../button';


import './search.css';

export default class Search extends Component {

  // static propTypes = {
  //   onClick: PropTypes.func,
  //   children: PropTypes.node,
  // }

  static defaultProps = {
    className: '',
    onClick: () => {},
  }

  onClick = (e) => {
    console.log('leita');
  }

  render() {
    return (
      <form>
        <input type="text" name="search" />
        <input type="submit" value="Leita" onClick={this.onClick} />
      </form>
    );
  }

}

