import React from "react";
import Profile from "./Profile";
import { withRouter, Redirect } from "react-router-dom";
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
import PageLoader from "../../common/PageLoader/PageLoader";

class ProfileComponent extends React.Component {
  updateProfilePage(userId) {
    this.props.getUserStatus(userId);
    this.props.getUserProfile(userId);
  }
  paramsUserId() {
    return this.props.match.params.userId;
  }

  userId = this.paramsUserId() || this.props.myId;
  componentDidMount() {
    this.updateProfilePage(this.userId);
  }

  componentDidUpdate(lastProps) {
    if (this.paramsUserId() !== lastProps.match.params.userId) {
      this.updateProfilePage(this.paramsUserId());
    }
  }

  render() {
    if (!this.userId) return <Redirect to='/users' />;
    if (!this.props.profile) return <PageLoader />;
    return (
      <Profile
        status={this.props.status}
        profile={this.props.profile}
        // myprofile={this.props.myprofile}
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
