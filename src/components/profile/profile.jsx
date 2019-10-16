import React from "react";
import style from "./profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Top from "./Top/Top.jsx";

const Profile = props => {
  return (
    <div className={style.profile}>
      <Top />
      <MyPostsContainer />
    </div>
  );
};
export default Profile;
