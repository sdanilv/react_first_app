import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import Auth from "../components/auth/Auth";

const mapStateToProps = (state) => ({
  isSignIn: state.Auth.isSignIn
});

export const withAuthRedirect = (Component) => {
  class AuthRedirect extends React.Component {
    render() {
      if (!this.props.isSignIn) {
        //
        console.log(!this.props.isSignIn);
        return <Redirect to='/login' />;
      }
      return <Component {...this.props} />;
    }
  }
  return connect(mapStateToProps)(AuthRedirect);
};
