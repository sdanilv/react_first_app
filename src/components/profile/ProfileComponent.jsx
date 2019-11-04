import React, { useEffect } from "react";
import Profile from "./Profile";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  getUserProfile,
  setMyStatus,
  getUserStatus
} from "../../redux/profileReducer/profileReducer";
// import { withAuthRedirect } from "../../hoc/AuthRedirect";
// import { withPageLoader } from "../../hoc/PageLoaderRedirect";
import { loading } from "../../redux/commonReducer/commonReducer";
import { compose } from "redux";
import PageLoader from "../../common/PageLoader/PageLoader";

const updateProfilePage = (userId, props) => {
  props.getUserStatus(userId);
  props.getUserProfile(userId);
};

const ProfileComponent = props => {
  const paramsUserId = props.match.params.userId;

  const userId = paramsUserId || props.myId;
  useEffect(() => updateProfilePage(userId, props), []);

  useEffect(() => updateProfilePage(paramsUserId, props), [paramsUserId]);

  if (!userId) return <Redirect to='/users' />;
  if (!props.profile) return <PageLoader />;
  return (
    <Profile
      status={props.status}
      profile={props.profile}
      // myprofile={props.myprofile}
      setMyStatus={props.setMyStatus}
    />
  );
};
let mapStateToProps = state => ({
  profile: state.ProfilePage.profile,
  // myprofile: state.ProfilePage.myprofile,
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
