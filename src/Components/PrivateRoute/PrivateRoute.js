import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useAuth();
  const isSet = localStorage.getItem("isLoggedIn");
  console.log(user.email);
  console.log(user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isSet ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
