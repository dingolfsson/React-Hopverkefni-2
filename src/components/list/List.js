import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

import './list.css';

export default class List extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array,
    page: PropTypes.number,
  }

  componentWillMount() {
    const { page } = this.props;
    console.log(page);
    
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps');
  //   if (nextProps.value !== prevState.value) {
  //       return {
  //           previousChildren: nextProps.children,
  //           pointerEvents: false,
  //           value: nextProps,
  //       };
  //   }

//     return null;
// }

  render() {
    const { title, data, page } = this.props;
    console.log(data);
    
    return(
      <section className="list">
        <h2>{title}</h2>
        {data}
        <div className="paging">
          <p>Síða {page}</p>
            {page > 1 && (
            <Button> &lt; Fyrri síða </Button>
          )}
          {(data && data.length === 10 ) && (
            <Button> Næsta síða > </Button>
          )}
        </div>
      </section>
    )
  }
}

