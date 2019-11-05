import React from "react";

import style from "./Dialogs.module.css";
import Chat from "./Chat/Chat";
import Dialog from "./dialog/Dialog";
import TextArea from "./TextArea/TextArea";

const Dialogs = props => {
  let dialogsElements = props.lastMessages.map((d, index) => (
    <Dialog key={index} name={d.name} lastMessage={d.lastMessage} ava={d.img} />
  ));
  let chatsElement = props.chats.map((c, index) => (
    <Chat key={index} chat={c.messages} />
  ));

  const chatSubmit = formData => {
    let id = props.chats.length;
    props.AddMessageToChat(id, formData.message);
    props.destroy("dialogs");
  };

  return (
    <div>
      <h1>My dialogs</h1>
      <div className={style.dialogs}>
        {dialogsElements}
        <TextArea onSubmit={chatSubmit} />
        {props.chats ? chatsElement : null}
      </div>
    </div>
  );
};
export default Dialogs;
