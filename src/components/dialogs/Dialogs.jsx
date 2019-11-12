import React from "react";

import style from "./Dialogs.module.css";
import Chat from "../Chat/Chat";
import Dialog from "./dialog/Dialog";
import TextArea from "./TextArea/TextArea";

const Dialogs = props => {
  let dialogsElements = props.Messages.map((d, index) => (
    <Dialog key={index}
            id = {d.id}
            name={d.name}
            lastMessages={d.messages.slice(-1)[0].message}
            ava={d.img} />
  ));

  return (
    <div>
      <h1>My dialogs</h1>
      <div className={style.dialogs}>
        {dialogsElements}
      </div>
    </div>
  );
};
export default Dialogs;
