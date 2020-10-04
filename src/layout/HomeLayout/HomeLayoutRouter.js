import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
const HomeLayoutRouter = ({ component, path }) => {
  const isLoggedIn = useSelector(state => state.auth.login);
  return true ? <Route component={component} path={path} /> : <Redirect to="/" />;
};
HomeLayoutRouter.propTypes = {
  component: propTypes.object.isRequired,
  path: propTypes.string.isRequired,
};

export default HomeLayoutRouter;
