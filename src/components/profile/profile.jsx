import React from "react";
import style from "./profile.module.css";
import Myposts from "./MyPosts/myposts";
import Top from "./Top/top";

const Profile = (props) => {

  return (
    
    <div className={style.profile}>
      <Top />
      <Myposts posts = {props.posts} />
    </div>
  );
};
export default Profile;
