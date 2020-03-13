import React from "react";
import style from "./Chat.css";
import Message from "./Message/Message";
import TextForm from "../../common/TextForm/TextForm";


const Chat = (props) => {
    let {myId, Messages, destroy} = props;
    let userId = props.match.params.userId;
    const user = Messages.find(
        m => m.id.toString() === userId);
    const dialogWithUser = user.messages.map((mess, index) => <Message {...mess} myId={myId} key={index}/>);
    const chatSubmit = formData => {
        destroy("dialogs");
        props.AddMessageToChat(userId, formData.dialogs, myId)
    };

    return <div>
        <div className={style.header}><img src={user.img} alt={"ava"}/>
            <div className={style.name}> {user.name}</div>
        </div>
        <div className={style.chat}>{dialogWithUser}</div>
        <TextForm onSubmit={chatSubmit} form="dialogs"/></div>
};

export default Chat;
