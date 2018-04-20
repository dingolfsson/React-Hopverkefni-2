import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/users';
import { NavLink, Redirect } from 'react-router-dom'

import List from '../list';


class User extends Component {
  state = {}

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers());
  }


  componentDidUpdate(nextProps) {
    this.props = nextProps;
  }

  render() {
    const { isFetching, users, isAuthenticated } = this.props;
    const page = (users.offset / 10) + 1;    

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
                  to={'/users/' + i.id}
                  className="navigation__link"
                ><h4>{i.name}</h4></NavLink>
              </div>)))
          }
          history={this.props.history}
          page={page}
          fetch={fetchUsers}
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
