import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './list.css';

export default class List extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.element,
    offset: PropTypes.number,
  }

  render() {
    const { title, data } = this.props;
    const { paging } = this.state;
    return(
      <section className="list">
        <h2>{title}</h2>
        {data}
        {paging}
      </section>
    )
  }
}

