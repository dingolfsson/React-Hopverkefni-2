import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './list.css';

export default class List extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array,
    page: PropTypes.number,
  }

  render() {
    const { title, data, page } = this.props;

    return(
      <section className="list">
        <h2>{title}</h2>
        {data}
      </section>
    )
  }
}

