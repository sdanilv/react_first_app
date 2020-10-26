import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getIsSignIn } from "redux/authReduce/authSelector";

export const withAuthRedirect = (Component: FC) => {
  const AuthRedirect: React.FC = (props) => {
    const isSignIn = useSelector(getIsSignIn);
    if (!isSignIn) {
      return <Redirect to="/login" />;
    }
    return <Component {...props} />;
  };

  return AuthRedirect;
};
