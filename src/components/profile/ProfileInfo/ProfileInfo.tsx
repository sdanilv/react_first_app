import style from "./ProfileInfo.module.css";
import Ava from "../../../common/Ava/Ava";
import Status from "./Status/Status";
import More from "./More/More";
import React, {FC} from "react";
import {ProfileInfoPropsType} from "src/components/profile/Profile";

export type OtherProfileInfoType = {
    contacts:
        {
            [contact: string]: string| null
        }, lookingForAJob: boolean, lookingForAJobDescription: string| null, aboutMe: string| null
}
const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, isMe, setMyStatus, changeMyProfileInfo, status, changePhoto}) => {
    const {userId, photos, fullName, ...more} = profile;

    const changePhotoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files)
            changePhoto(e.target.files[0])
    };
    const saveAllMyProfileInfo = (callback: () => void) => async (moreProfileInfo: OtherProfileInfoType): Promise<void> => {
        const isProfileChange = await changeMyProfileInfo({...moreProfileInfo, fullName});
        if (!isProfileChange) {
            return;
        }
        callback();
    };

    return (
        <div className={style.header}>
            <div className={style.profileInfo}>
                <div className={style.avaImg}>
                    {isMe && <input type="file"
                                    className={style.changePhotoButton}
                                    onChange={changePhotoHandler}/>}
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
            <More profile={more} saveAllMyProfileInfo={saveAllMyProfileInfo} isMe={isMe}/>
        </div>
    );
};

export default ProfileInfo;