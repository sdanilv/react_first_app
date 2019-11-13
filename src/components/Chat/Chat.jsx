import React from "react";
import style from "./Chat.module.css";
import TextArea from "../dialogs/TextArea/TextArea";
import Message from "./Message/Message";


const Chat = (props) => {
let {myId, Messages, destroy} = props;
    let userId = props.match.params.userId;
    const user = Messages.find(
        m => m.id.toString() === userId);
    const dialogWithUser = user.messages.map(mess=> <Message {...mess} myId={myId} />);
    const chatSubmit = formData => {
        destroy("dialogs");
        props.AddMessageToChat(userId, formData.message, myId )
    };

    return <div >
      <div className={style.header}><img src={user.img} alt={"ava"}/>
      <div className={style.name}> {user.name}</div></div>
        <div className={style.chat}>{dialogWithUser}</div>
        <TextArea onSubmit={chatSubmit}/></div>
};

export default Chat;
