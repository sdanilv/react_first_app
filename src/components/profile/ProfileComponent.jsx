import React from "react";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getUserProfile,
  setMyStatus,
  getUserStatus
} from "../../redux/profileReducer";
// import { withAuthRedirect } from "../../hoc/AuthRedirect";
// import { withPageLoader } from "../../hoc/PageLoaderRedirect";
import { loading } from "../../redux/commonReducer";
import { compose } from "redux";

class ProfileComponent extends React.Component {
  componentDidMount() {
    // debugger;
    let userId = this.props.match.params.userId || this.props.myId;
    this.props.getUserStatus(userId);
    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <Profile
        status={this.props.status}
        profile={this.props.profile}
        myprofile={this.props.myprofile}
        setMyStatus={this.props.setMyStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.ProfilePage.profile,
  myprofile: state.ProfilePage.myprofile,
  status: state.ProfilePage.status,
  myId: state.Auth.id
});

export default compose(
  connect(
    mapStateToProps,
    { getUserProfile, setMyStatus, getUserStatus, loading }
  ),
  // withPageLoader,
  // withAuthRedirect,
  withRouter
)(ProfileComponent);
