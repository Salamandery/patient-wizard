import React from 'react';
import {
  Route as ReactDomRoute,
  RouteProps as ReactDomRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

interface RouteProps extends ReactDomRouteProps {
  isPrivate: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <ReactDomRoute
      {...rest}
    >
      {
        isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
            }}
          />
        )
      }
    </ReactDomRoute>
  );
};

export default Route;
