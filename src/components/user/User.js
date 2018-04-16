import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/users';
import { NavLink } from 'react-router-dom'

import List from './List';


class User extends Component {
  state = {}

  componentDidMount() {
    const { dispatch } = this.props;
    console.info(this.props);
    dispatch(fetchUsers());
  }

  render() {
    const { isFetching, users } = this.props;
    
    if (isFetching) {
      return (
        <p>Sæki notendur..</p>
      );
    }
    console.info(users);
    return (
      <div>
        <List 
          title="Notendur" 
          data={users.items && (
            users.items.map((i) => (
              <div key={i.id} className="user__item">
                <NavLink
                  to={'/users/' + i.id}
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
  console.info(state)
  return {
    isFetching: state.users.isFetching,
    users: state.users.users,
    error: state.users.error,
  }
}

export default connect(mapStateToProps)(User);
