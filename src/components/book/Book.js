import React, { Component } from 'react';
import { connect } from 'react-redux';
import querystring from 'query-string';
import { fetchBooks } from '../../actions/books';
import { NavLink } from 'react-router-dom'

import List from '../list';

class Book extends Component {
  state = {
    search: '',
    isQuery: false,
  }

  componentDidMount() {       
    const { dispatch, search } = this.props;    
    dispatch(fetchBooks(search));    
    if (search.length !== 0) {
      this.setState({ search, isQuery: true })
    }
  }
  
  render() {
    const { isFetching, books } = this.props;
    const page = Math.floor(books.offset / 10) + 1 | 0;
    const { isQuery, search } = this.state;
    let title = 'Bækur';

    if(isQuery) {
      title = `Bókaleit: ${querystring.parse(search).search}`
    }

    if (isFetching) {
      return (
        <p>Sæki gögn..</p>
      );
    }
    
    return (
      
      <div>
        <List 
          title={title}
          data={books.items && (
            books.items.map((i) => (
              <div key={i.id} className="book__item">
                <NavLink
                  to={window.location + '/books/' + i.id}
                  className="navigation__link"
                ><h4>{i.title}</h4></NavLink>
                <p>Eftir {i.author}, gefin út {i.published}</p>
              </div>)))
          }
          page={page}
          />
    </div>
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

export default connect(mapStateToProps)(Book);
