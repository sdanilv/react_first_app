import React /* {, useEffect }*/ from "react";

import style from "./Dialogs.module.css";
import Chat from "./Chat/Chat";
import Dialog from "./dialog/Dialog";
import TextArea from "./TextArea/TextArea";

// const LOCAL_STORAGE_KEY = "app.storage";

const Dialogs = props => {
  // debugger;
  // useEffect(() => {
  //   const chats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   props.loadChat(chats);
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(props.chats));
  // }, [props.chats]);

  let dialogsElements = props.lastMessages.map((d, index) => (
    <Dialog key={index} name={d.name} lastMessage={d.lastMessage} ava={d.img} />
  ));
  let chatsElement = props.chats.map((c, index) => (
    <Chat key={index} chat={c.messages} />
  ));

  const chatSubmit = formData => {
    let id = props.chats.length;
    props.AddMessageToChat(id, formData.message);
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
