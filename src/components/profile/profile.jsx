import React from "react";
import style from "./profile.module.css";
import Myposts from "./MyPosts/myposts";
import Top from "./Top/Top.jsx";

const Profile = (props) => {
 
  return (
    <div className={style.profile}>
      <Top />
      <Myposts  dispatch={props.dispatch}  posts= {props.profile.posts} textArea={props.profile.textArea}/>
    </div>
  );
};
export default Profile;
