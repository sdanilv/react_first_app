import React from "react";
import style from "./Dialogs.module.css";
import Chat from "./Chat/Chat";
import Dialog from "./dialog/dialog";
import TextArea from "./TextArea/TextArea";

const Dialogs = props => {
  // debugger;
  let dialogsElements = props.lastMessages.map((d, index) => (
    <Dialog  key={index}  name={d.name} lastMessage={d.lastMessage} ava={d.img} />
  ));
  let chatsElement = props.chats.map((c, index) => <Chat key={index} chat={c.messages} />);
  return (
    <div>
      <h1>My dialogs</h1>
      <div className={style.dialogs}>
        {dialogsElements}
        <TextArea
          clickEvent={props.clickEvent}
          areaKeyEvent={props.areaKeyEvent}
          textArea={props.textArea}
        />
        {chatsElement}
      </div>
    </div>
  );
};
export default Dialogs;
