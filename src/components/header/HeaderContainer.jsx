import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { auth, getMe } from "../../redux/authReduce";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getMe();
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = state => ({
  isSignIn: state.Auth.isSignIn,
  login: state.Auth.login,
  avaImg: state.ProfilePage.myprofile.photos.small
});

export default connect(
  mapStateToProps,
  { auth, getMe }
)(HeaderContainer);
