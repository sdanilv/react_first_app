import style from "./More.module.css"
import React, {useState} from "react";
import EditableMore from "./EditableMore";
import {changeMyProfileInfo} from "../../../../redux/profileReducer/profileReducer";

const More = ({profile, isMe, saveAllMyProfileInfo}) => {
    const [isMoreVisible, seeMore] = useState(false);
    const [isEditMode, setEditMode] = useState(false);
    const moreClickEvent = () => {
        seeMore(!isMoreVisible);
    };
    const editModeOn = () => {
        setEditMode(true);
    };
    const editModeOff = () => {
        setEditMode(false);
    };
    const saveProfile = (moreProfileInfo) => {
        saveAllMyProfileInfo(moreProfileInfo).then(isProfileChange=>{if(isProfileChange) editModeOff()})

    };

    const contactsKeys = Object.keys(profile.contacts);
    const contacts = contactsKeys.map(key => {
        let link = profile.contacts[key];
        if (link)
            return <div className={style.contact}>{key} : <a href={link}>{link}</a></div>;
        return null
    });

    return (<div className={style.more}>
        <div className={style.moreSpan} onClick={moreClickEvent}><span> More...</span></div>
        {isMoreVisible && (isEditMode ?
            <EditableMore editModeOff={editModeOff} initialValues={profile} onSubmit={saveProfile} profile={profile}/> : (
                <>
                    <div className={style.aboutMe}><b>About Me:</b> {profile.aboutMe}</div>
                    {profile.lookingForAJob && (
                        <div className={style.lookingForAJob}>
                            <img
                                className={style.lookingForAJobImg}
                                src='https://image.flaticon.com/icons/svg/65/65053.svg'
                                alt='findJob'
                            />
                            <div className={style.lookingForAJobDescription}>
                                {profile.lookingForAJobDescription}
                            </div>
                        </div>
                    )}
                    <div>{contacts}</div>

                    {isMe && <div className={style.editButton}>
                        <button onClick={editModeOn}>Edit</button>
                    </div>}
                </>))
        }
    </div>)
};
export default More;