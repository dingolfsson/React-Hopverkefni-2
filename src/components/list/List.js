import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './list.css';

export default class List extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array,
    page: PropTypes.number,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.value !== prevState.value) {
        return {
            previousChildren: nextProps.children,
            pointerEvents: false,
            value: nextProps,
        };
    }

    return null;
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

