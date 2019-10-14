import React from "react";
import style from "./profile.module.css";
import MypostsContainer from "./MyPosts/MyPostsContainer";
import Top from "./Top/Top.jsx";

const Profile = props => {
  return (
    <div className={style.profile}>
      <Top />
      <MypostsContainer />
    </div>
  );
};
export default Profile;
