import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {
  static propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    review: PropTypes.string,
    id: PropTypes.number,
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
    const { data, title, rating, review } = this.props;

    return(
      <section className="list">
        <h2>{title}</h2>
        {data}
      </section>
    )
  }
}