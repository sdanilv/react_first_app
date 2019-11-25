import React from "react";
import style from "./ProfileInfo.module.css";
import Ava from "../../../common/Ava/Ava";
import Status from "./Status/Status";

const ProfileInfo = props => {
    const {isMe} = props;
    const changePhoto = e => {
        props.changePhoto(e.target.files[0], props.profile.userId)
    };
    return (
        <div className={style.header}>
            {/*<img*/}
            {/*    className={style.headerImg}*/}
            {/*    src='https://www.w3schools.com/howto/img_snow_wide.jpg'*/}
            {/*    alt='content'*/}
            {/*/>*/}
            <div className={style.avaImg}>
                {isMe && <input type="file" className={style.changePhotoButton} onChange={changePhoto}/>}
                <Ava avaImg={props.profile.photos.large}/>
            </div>
            <div className={style.fullName}> {props.profile.fullName}</div>
            <div className={style.aboutMe}>{props.profile.aboutMe}</div>
            <div className={style.status}>
                <Status
                    setMyStatus={props.setMyStatus}
                    myStatus={props.status || "***"}
                    isMe={isMe}
                />
            </div>
            {props.profile.lookingForAJob && (
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
            )}
        </div>
    );
};

export default ProfileInfo;