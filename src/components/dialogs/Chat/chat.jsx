import React from "react"
import style from "./chat.module.css"



const chat = (props) => {
    return (
        <div className={style.chat}> {props.chat}</div>
    );
}

export default chat;
