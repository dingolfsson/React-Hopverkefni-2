import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../button';
import { fetchBooks } from '../../actions/books';
import { connect } from 'react-redux';



import './list.css';

class List extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array,
    page: PropTypes.number,
    history: PropTypes.object,
    search: PropTypes.string
  }

  handleNext = () => {    
    const { dispatch, search, page } = this.props;    
    const offset = (page * 10)  
    this.props.history.replace(`?search=${search}&page=${page + 1}`);
    dispatch(fetchBooks(`?search=${search}&offset=${offset}`));
  }

  handlePrevious = () => {
    const { dispatch, search, page } = this.props;
    const offset = ((page - 2) * 10)
    this.props.history.replace(`?search=${search}&page=${page - 1}`);
    dispatch(fetchBooks(`?search=${search}&offset=${offset}`));
  }

  render() {
    const { title, data, page } = this.props;
    
    return(
      <section className="list">
        <h2 className="page__title">{title}</h2>
        {data}
        <div className="paging">
          {page > 1 && (
            <Button onClick={this.handlePrevious}> &lt; Fyrri síða </Button>
          )}
          <p>Síða {page}</p>
          {(data && data.length === 10 ) && (
            <Button onClick={this.handleNext}> Næsta síða > </Button>
          )}
        </div>
      </section>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isFetching: state.books.isFetching,
    books: state.books.books,
    error: state.books.error,
  }
}

export default connect(mapStateToProps)(List);
