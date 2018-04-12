import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfiles } from '../../actions/profiles';


class Image extends Component {
  state = {}

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProfiles());
  }

  render() {
    const { isFetching, profiles } = this.props;
    if (isFetching) {
      return (
        <p>Sæki minnisatriði..</p>
      );
    }

    return (
      <section>
        <h2>uppfæra mynd</h2>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.books.isFetching,
    profiles: state.books.books,
    error: state.books.error,
  }
}

export default connect(mapStateToProps)(Image);
