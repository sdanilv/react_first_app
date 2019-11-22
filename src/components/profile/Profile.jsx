import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";

const Profile = props => {
    return (
        <div className={style.profile}>
            <div className={style.ProfileInfo}>
                <ProfileInfo
                    profile={props.profile}
                    setMyStatus={props.setMyStatus}
                    status={props.status}
                    changePhoto={props.changePhoto}
                    isMe={props.isMe}
                /></div>
            <div className="MyPostsContainer"><MyPostsContainer/></div>

        </div>
    );
};
export default Profile;
