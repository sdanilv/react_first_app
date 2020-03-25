import React, {FC} from "react";
import style from "./Chat.css";
import Message from "./Message/Message";
import TextForm from "common/TextForm/TextForm";
import {ChatProps} from "src/components/Chat/ChatContainer";
import {RouteComponentProps} from "react-router-dom";


const Chat: FC<ChatProps & RouteComponentProps<{ userId: string }>> = (props) => {
    const {myId, Messages, destroy} = props;
    const userId = props.match.params.userId;
    const user = Messages.find(
        m => m.id.toString() === userId);
    const chatSubmit = (formData: { dialogs: string }) => {
        destroy("dialogs");
        if(myId)
        props.AddMessageToChat(userId, formData.dialogs, myId)
    };
    if (user) {
        const dialogWithUser = user.messages.map((mess, index) => <Message {...mess} myId={myId} key={index}/>);
        return <div>
            <div className={style.header}><img src={user.img} alt={"ava"}/>
                <div className={style.name}> {user.name}</div>
            </div>
            <div className={style.chat}>{dialogWithUser}</div>
            <TextForm onSubmit={chatSubmit} form="dialogs"/>
        </div>
    }
    return <></>
};

export default Chat;
