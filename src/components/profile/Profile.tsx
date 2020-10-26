import React, { FC } from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import { ProfileProps } from "src/components/profile/ProfileComponent";

export type ProfileInfoPropsType = Omit<ProfileProps, "status"> & {
  isMe: boolean;
};
const Profile: FC<ProfileInfoPropsType> = (props) => {
  return (
    <div className={style.profile}>
      <ProfileInfo {...props} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
