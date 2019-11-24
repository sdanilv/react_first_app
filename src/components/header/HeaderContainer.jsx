import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { auth, getMe, logout } from "../../redux/authReduce/authReduce";
import {getMyAvatar} from "../../redux/profileReducer/profileSelector"

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = state => ({
  isSignIn: state.Auth.isSignIn,
  login: state.Auth.login,
  avaImg: getMyAvatar(state, "small")
});

export default connect(
  mapStateToProps,
  { auth, getMe, logout }
)(HeaderContainer);
