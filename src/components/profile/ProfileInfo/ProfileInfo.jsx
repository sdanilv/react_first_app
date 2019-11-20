/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import style from "./ProfileInfo.module.css";
import Ava from "../../../common/Ava/Ava";
import Status from "./Status/Status";

const ProfileInfo = props => {
    const changePhoto = e => {
        props.changePhoto(e.target.files[0], props.profile.userId)
    };
  return (
    <div className={style.header}>
      <img
        className={style.headerImg}
        src='https://www.w3schools.com/howto/img_snow_wide.jpg'
        alt='content'
      />
        {props.isMe && <input type="file" onChange={changePhoto}/>}
      <div className={style.avaImg}>
        <Ava avaImg={props.profile.photos.large} />
      </div>
      <div className={style.fullName}> {props.profile.fullName}</div>

      <div className={style.aboutMe}>{props.profile.aboutMe}</div>
      <div className={style.status}>
        <Status
          setMyStatus={props.setMyStatus}
          status={props.status || "***"}
          isMe = {props.isMe}
        />

        {/* <Status status={props.status} /> */}
      </div>
      {props.profile.lookingForAJob ? (
        <>
          <img
            className={style.lookingForAJobImg}
            src='https://image.flaticon.com/icons/svg/65/65053.svg'
            alt='findJob'
          />
          <div className={style.lookingForAJobDescription}>
            {props.profile.lookingForAJobDescription}
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ProfileInfo;

// {
//   "aboutMe": "я круто чувак 1001%",
//   "contacts": {
//     "facebook": "facebook.com",
//     "website": null,
//     "vk": "vk.com/dimych",
//     "twitter": "https://twitter.com/@sdf",
//     "instagram": "instagra.com/sds",
//     "youtube": null,
//     "github": "github.com",
//     "mainLink": null
//   },
//   "lookingForAJob": true,
//   "lookingForAJobDescription": "не ищу, а дурачусь",
//   "fullName": "samurai d new name",
//   "userId": 2,
//   "photos": {
//     "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
//     "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
//   }
// }
