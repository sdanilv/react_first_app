import React from "react";
import style from "./Profile.module.css";
// import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Top from "./Top/Top.jsx";

const Profile = props => {
  debugger;
  return (
    <div className={style.profile}>
      <Top profile={props.profile ? props.profile : props.myprofile} />
      {/* <MyPostsContainer /> */}
    </div>
  );
};
export default Profile;
