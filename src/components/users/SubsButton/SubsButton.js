import ButtonLoader from "../../../common/ButtonLoader/ButtonLoader";
import  style from "./SubsButton.module.css"
import React from "react";


function SubsButton(props) {
    return <>
        {props.blockedSubButtons.some(u => u === props.userId) ? (
            <ButtonLoader/>
        ) : (
            <div>
                {props.followed ? (
                    <button
                        className={style.button}
                        onClick={() => props.unsubscribe(props.userId)}>
                        Subs
                    </button>
                ) : (
                    <button
                        className={style.button}
                        onClick={() => props.subscribe(props.userId)}>
                        Unsubs
                    </button>
                )}
            </div>
        )}
    </>;
}
export default SubsButton;