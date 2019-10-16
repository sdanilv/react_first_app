/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import style from "./Top.module.css";

const Top = props => {
  debugger;
  return (
    <div className={style.header}>
      <img
        className={style.headerImg}
        src='https://www.w3schools.com/howto/img_snow_wide.jpg'
        alt='content'
      />
      <div className={style.avaImg}>
        {" "}
        <img className={style.avaImg} src={props.profile.photos.small} />
      </div>

      <span className={style.description}>
        {props.profile.fullName}
        {props.profile.aboutMe}
      </span>
    </div>
  );
};

export default Top;

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
