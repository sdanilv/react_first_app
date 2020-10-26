import React, { useEffect } from "react";
import Profile from "./Profile";
import { Redirect, useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import {
  changeMyProfileInfo,
  changePhoto,
  getUserProfile,
  getUserStatus,
  ProfileType,
  setMyStatus,
} from "src/redux/profileReducer/profileReducer";
import { loading } from "src/redux/commonReducer/commonReducer";
import { compose } from "redux";
import PageLoader from "src/common/PageLoader/PageLoader";

import { getProfile } from "redux/profileReducer/profileSelector.ts";
import { getMyId } from "redux/authReduce/authSelector";

type Props = {
  getUserStatus: typeof getUserStatus;
  getUserProfile: typeof getUserProfile;
  myId: string;
};
export type ProfileProps = {
  changePhoto: typeof changePhoto;
  status: string | null;
  profile: ProfileType;
  setMyStatus: typeof setMyStatus;
  changeMyProfileInfo: typeof changeMyProfileInfo;
};

const ProfileComponent = (props: Props & ProfileProps) => {
  const { getUserStatus, getUserProfile, changePhoto } = props;
  const profile = useSelector(getProfile);
  const myId = useSelector(getMyId);
  const paramsUserId = useParams<{ userId: string | undefined }>().userId;
  const userId = paramsUserId || myId;

  useEffect(() => {
    if (userId) {
      getUserStatus(userId);
      getUserProfile(userId);
    }
  }, [userId, getUserProfile, getUserStatus]);

  if (!userId) return <Redirect to="/users" />;
  if (!profile) return <PageLoader />;
  return (
    <Profile
      changePhoto={changePhoto}
      profile={profile}
      setMyStatus={props.setMyStatus}
      changeMyProfileInfo={props.changeMyProfileInfo}
      isMe={myId ? paramsUserId === myId.toString() : false}
    />
  );
};

export default compose<Props>(
  connect(null, {
    getUserProfile,
    setMyStatus,
    getUserStatus,
    loading,
    changePhoto,
    changeMyProfileInfo,
  })
)(ProfileComponent);
