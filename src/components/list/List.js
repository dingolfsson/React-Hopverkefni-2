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
    let { dispatch, search, page } = this.props;    
    this.props.history.replace(`?search=${search}&page=${page+1}`);
     
    dispatch(fetchBooks(this.props.history.location.search));
  }

  handlePrevious = () => {
    const { search, page } = this.props;
    this.props.history.replace(`/books?search=${search}&page=${page+1}`);
  }

  render() {
    const { title, data, page } = this.props;
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
    page: state.books.page,
  }
}

export default connect(mapStateToProps)(List);
