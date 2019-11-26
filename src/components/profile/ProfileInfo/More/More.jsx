import style from "./More.module.css"
import React, {useState} from "react";

const More = props => {
    const [isMoreVisible, seeMore] = useState(true);
    const moreClickEvent = () => {
        seeMore(!isMoreVisible);
    };

    return (<div className={style.more}>
        <span onClick={moreClickEvent}> More...</span>
        {isMoreVisible &&
        <>
            <div className={style.aboutMe}>{props.profile.aboutMe}</div>
            props.profile.lookingForAJob && (<>
            <img
                className={style.lookingForAJobImg}
                src='https://image.flaticon.com/icons/svg/65/65053.svg'
                alt='findJob'
            />
            <div className={style.lookingForAJobDescription}>
                {props.profile.lookingForAJobDescription}
            </div>
        </>
            )
        </>}
    </div>)
};
export default More;