import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { auth, getMe, logout } from "../../redux/authReduce/authReduce";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = state => ({
  isSignIn: state.Auth.isSignIn,
  login: state.Auth.login,
  avaImg: state.ProfilePage.myProfile.photos.small
});

export default connect(
  mapStateToProps,
  { auth, getMe, logout }
)(HeaderContainer);
