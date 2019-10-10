import React from "react";
import style from "./dialogs.module.css";
// import Chat from "./Chat/chat";

import Chat from "./Chat/Chat";
import Dialog from "./dialog/dialog";
import TextArea from "./TextArea/TextArea";

const Dialogs = props => {
  // debugger;
  let dialogsElements = props.dialogs.lastMessages.map(d => (
    <Dialog name={d.name} lastMessage={d.lastMessage} ava={d.img} />
  ));
  let chatsElement = props.dialogs.chats.map(c => <Chat chat={c.messages} />);
  return (
    <div>
      <h1>My dialogs</h1>
      <div className={style.dialogs}>
        {dialogsElements}
        <TextArea dispatch={props.dispatch} textArea={props.dialogs.textArea} />
        {chatsElement}
      </div>
    </div>
  );
};
export default Dialogs;
