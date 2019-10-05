import React from "react";
import style from "./profile.module.css";
import Myposts from "./MyPosts/myposts";
import Top from "./Top/top";

const Profile = () => {
  return (
    <div className={style.profile}>
      <Top />
      <Myposts />
    </div>
  );
};
export default Profile;
