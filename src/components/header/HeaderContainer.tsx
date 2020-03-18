import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { auth, getMe, logout } from "redux/authReduce/authReduce";
import {getMySmallAvatar} from "redux/profileReducer/profileSelector"
import {getMyId, getMyLogin, getIsSignIn} from "redux/authReduce/authSelector";
import {GlobalState} from "src/redux/storeRedux";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state: GlobalState) => ({
  isSignIn: getIsSignIn(state),
  login: getMyLogin(state),
  avaImg: getMySmallAvatar(state),
  myId: getMyId(state)
});

export default connect(
  mapStateToProps,
  { auth, getMe, logout }
)(HeaderContainer);
