import React, {FC} from "react";
import style from "./Message.module.css"
// type Props = {userId:string, myId:string, message:number}
//TODO change any to type
const Message:FC<any> = props => {
    const {userId, myId, message} = props;
    return (
        <div>
        <div className = {userId === myId ? style.myMessage : style.friendMessage}> {message} </div>
    </div>)
};
export default Message;