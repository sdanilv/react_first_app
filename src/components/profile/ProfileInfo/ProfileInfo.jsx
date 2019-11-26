import style from "./ProfileInfo.module.css";
import Ava from "../../../common/Ava/Ava";
import Status from "./Status/Status";
import More from "./More/More";
import React from "react";

const ProfileInfo = ({isMe, profile, setMyStatus, status}) => {
    const {userId, photos, fullName, ...more} = profile;

    const changePhoto = e => {
        changePhoto(e.target.files[0], userId)
    };


    return (
        <div className={style.header}>
            <div className={style.profileInfo}>
                <div className={style.avaImg}>
                    {isMe && <input type="file" className={style.changePhotoButton} onChange={changePhoto}/>}
                    <Ava avaImg={photos.large}/>
                </div>
                <div className={style.nameAndStatus}>
                    <div className={style.fullName}> {fullName}</div>
                    <Status
                        setMyStatus={setMyStatus}
                        myStatus={status || "***"}
                        isMe={isMe}
                    />
                </div>
            </div>
            <More profile={more}/>
        </div>
    );
};

export default ProfileInfo;