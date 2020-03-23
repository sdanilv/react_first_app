import React, {FC} from "react";
import style from "./Message.module.css"
type Props = {userId:number, myId:number, message:number}
const Message:FC<Props> = props => {
    const {userId, myId, message} = props;
    return (
        <div>
        <div className = {userId === myId ? style.myMessage : style.friendMessage}> {message} </div>
    </div>)
};
export default Message;