import React from "react";
import { connect } from "react-redux";

import PageLoader from "../common/PageLoader/PageLoader";

const mapStateToProps = state => ({
  loaded: false
});

export const withPageLoader = Component => {
  const AuthRedirect = props => {
    if (props.loaded) return <PageLoader />;
    return <Component {...props} />;
  };

  return connect(mapStateToProps)(AuthRedirect);
};
