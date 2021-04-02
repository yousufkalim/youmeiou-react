import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return sessionStorage.getItem('token') && restricted ? (
          <Redirect to='/discover' />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default PublicRoute;
