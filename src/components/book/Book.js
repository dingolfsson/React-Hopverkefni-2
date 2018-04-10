import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../../actions/books';


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

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchBooks());
  }

  render() {
    const { isFetching, books } = this.props;
    
    if (isFetching) {
      return (
        <p>Sæki minnisatriði..</p>
      );
    }

    return (
      <section>
        <h2>Bækur</h2>
        <ul>
          <p>Im here</p>
        </ul>
      </section>
    );
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
