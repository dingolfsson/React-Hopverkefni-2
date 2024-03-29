import React from 'react';
import { Route, Redirect } from 'react-router-dom'

export default ({component: Component, authenticated, ...rest}) => {
  console.info(this.props.location)
  return (
    <Route
      {...rest}
      render={(props) => authenticated
        ? <Component {...props} />
        : <Redirect to={{pathname: '/users', state: {from: props.location}}} />}
    />
  )
}