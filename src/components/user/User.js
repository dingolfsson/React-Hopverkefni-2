import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/users';
import { NavLink } from 'react-router-dom'

import List from '../list';


class User extends Component {
  state = {}

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers());
  }

  render() {
    const { isFetching, users, isAuthenticated } = this.props;

    if (!isAuthenticated) {
      return <Redirect to='/' />;
    }

    if (isFetching) {
      return (
        <p>Sæki notendur..</p>
      );
    }

    return (
      <div>
        <List 
          title="Notendur" 
          data={users.items && (
            users.items.map((i) => (
              <div key={i.id} className="user__item">
                <NavLink
                  to={'/users/' + i.id + "/read/"}
                  className="navigation__link"
                ><h4>{i.name}</h4></NavLink>
              </div>)))
          }
          />
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isFetching: state.users.isFetching,
    users: state.users.users,
    error: state.users.error,
  }
}

export default connect(mapStateToProps)(User);
