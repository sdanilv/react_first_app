import React from "react";
import  style from "./Message.module.css"

const Message = props =>{
let {userId, myId, message} = props;
    return <div>

        <div className={userId===myId ? style.myMessage : style.friendMessage}>{message}</div>

    </div>
};
export default Message;