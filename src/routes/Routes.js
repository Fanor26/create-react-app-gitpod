import React, { useContext } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import paginaprincipal from '../components/paginaprincipal';
import AuthApi from '../utils/AuthApi';

function Routes() {
  const authApi = useContext(AuthApi);
  return (
    <Switch>
      <RouteRegisteration
        path="/signin"
        component={SignIn}
        auth={authApi.auth}
      />
      <RouteRegisteration
        path="/signup"
        component={SignUp}
        auth={authApi.auth}
      />
      <RouteProtected
        path="/paginaprincipal"
        component={paginaprincipal}
        auth={authApi.auth}
      />
    </Switch>
  );
}

const RouteRegisteration = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth ? <Component {...props} /> : <Redirect to="/paginaprincipal" />
      }
    />
  );
};

const RouteProtected = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default Routes;
