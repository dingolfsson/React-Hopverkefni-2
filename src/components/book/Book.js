import React, { Component } from 'react';
import { connect } from 'react-redux';
import querystring from 'query-string';
import { fetchBooks } from '../../actions/books';

import List from '../list';

class Book extends Component {
  state = {
    visible: null,
  }

  onHeaderClick = (bookId) => {
    return (e) => {
      const visible = this.state.visible === bookId ? null : bookId;
      this.setState({ visible });
    }
  }

  componentWillMount() {
    const { dispatch, query } = this.props;
    dispatch(fetchBooks(query));    
  }
 
  render() {
    const { isFetching, books } = this.props;       

    if (isFetching) {
      return (
        <p>Sæki Gögn..</p>
      );
    }
    
    return (
      <div>
        <List 
          title="Bækur" 
          data={books.items && (
            books.items.map((i) => (
              <div key={i.id} className="book__item">
                <h4>{i.title}</h4>
                <p>Eftir {i.author}, gefin út {i.published}</p>
              </div>)))
          }
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
