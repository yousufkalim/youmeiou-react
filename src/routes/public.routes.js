import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from "react-redux";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {

  const user = useSelector((state) => state);

  useEffect(() => {

  },[user])
  return (
    <Route
      {...rest}
      render={(props) => {
        return user.user.token && restricted ? (
          <Redirect to='/discover' />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default PublicRoute;
