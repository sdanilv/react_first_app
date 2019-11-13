import React from "react";
import style from "./Dialogs.module.css";
import Dialog from "./dialog/Dialog";

const Dialogs = props => {
  let dialogsElements = props.Messages.map((d, index) => (
      d &&
    <Dialog key={index}
            id = {d.id}
            name={d.name}
            lastMessages={d.lastMessages}
            ava={d.ava} />
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
