import React from "react";
import style from "./dialogs.module.css";
import Chat from "./Chat/chat";
import Dialog from "./dialog/dialog";

const Dialogs = props => {
  // debugger;
  let submit = () => {
    alert(textarea.current.value);
  };
  let textarea = React.createRef();
  let chatsElements = props.chats.map(c => <Chat chat={c.messages} />);
  let dialogsElements = props.dialogs.map(d => (
    <Dialog name={d.name} lastMessage={d.lastMessage} ava={d.img} />
  ));
  return (
    <div>
      <h1>My dialogs</h1>
      <div className={style.dialogs}>{dialogsElements}</div>
      <h1>My chats</h1>
      <textarea ref={textarea}></textarea>
      <button onClick={submit}>Submit</button>
      <div className={style.dialogs}>{chatsElements}</div>
    </div>
  );
};
export default Dialogs;
