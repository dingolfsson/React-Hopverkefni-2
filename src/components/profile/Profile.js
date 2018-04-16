import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { fetchProfiles } from '../../actions/profiles';
import { fetchReadProfilesBooks, deleteReadBook } from '../../actions/profiles';
import { fetchUserBooks } from '../../actions/books';

import List from './List';
import Button from '../button';

class Profile extends Component {
  state = {}

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProfiles());
    dispatch(fetchUserBooks());
  }


  handleSubmit = async (e) => {
    e.preventDefault();
    const id = e.target.name;
    const { dispatch } = this.props;
    dispatch(deleteReadBook(id));
  }


  render() {
    const { isFetching, profiles } = this.props;
    console.log('isFetching')
    if (isFetching) {
      return (
        <p>Sæki þínar upplýsingar..</p>
      );
    }

    return (
      <div>
        <List 
          title="Lesnar bækur" 
          data={profiles.items && (
            profiles.items.map((i) => (
              <div key={i.title} className="bookRead__item">
                <form onSubmit={this.handleSubmit} name={i.id}>
                  <NavLink
                    to={'/books/' + i.book_id}
                    className="navigation__link"
                  ><h4>{i.title}</h4></NavLink>
                  <p>Einkunn: {i.rating}</p>
                  <Button >Eyda </Button>
                </form>
              </div>)))
            }
            />
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.info(state);
  return {
    isFetching: state.profiles.isFetching,
    profiles: state.books.books,
    error: state.profiles.error,
  }
}

export default connect(mapStateToProps)(Profile);
