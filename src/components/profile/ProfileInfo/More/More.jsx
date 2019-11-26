import style from "./More.module.css"
import React, {useState} from "react";

const More = ({profile}) => {
    const [isMoreVisible, seeMore] = useState(false);
    const moreClickEvent = () => {
        seeMore(!isMoreVisible);
    };
    const contactsKeys = Object.keys(profile.contacts);
    const contacts = contactsKeys.map(key => {
        let link = profile.contacts[key];
        if (link)
            return <div className={style.contact}>{key} : <a href={link}>{link}</a></div>;
        return null
    });

    return (<div className={style.more}>
        <div className={style.moreSpan} onClick={moreClickEvent}> <span  > More...</span></div>
        {isMoreVisible &&
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
        </>}
    </div>)
};
export default More;