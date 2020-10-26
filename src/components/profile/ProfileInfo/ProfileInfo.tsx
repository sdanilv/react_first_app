import style from "./ProfileInfo.module.css";
import Ava from "../../../common/Ava/Ava";
import Status from "./Status/Status";
import More from "./More/More";
import React, {FC} from "react";
import {ProfileInfoPropsType} from "src/components/profile/Profile";
import {getProfileStatus} from "redux/profileReducer/profileSelector";
import {useDispatch, useSelector} from "react-redux";
import {changeMyProfileInfo, changePhoto} from "redux/profileReducer/profileReducer";

export type OtherProfileInfoType = {
    contacts:
        {
            [contact: string]: string | null
        }, lookingForAJob: boolean, lookingForAJobDescription: string | null, aboutMe: string | null
}
const ProfileInfo: FC<ProfileInfoPropsType> = ({profile, isMe}) => {
    const {userId, photos, fullName, ...more} = profile;
    const status = useSelector(getProfileStatus);
    const dispatch = useDispatch();

    const changePhotoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files)
            dispatch(changePhoto(e.target.files[0]))
    };
    const saveAllMyProfileInfo = (callback: () => void) => async (moreProfileInfo: OtherProfileInfoType): Promise<void> => {
        const isProfileChange = await dispatch(changeMyProfileInfo({...moreProfileInfo, fullName}));
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