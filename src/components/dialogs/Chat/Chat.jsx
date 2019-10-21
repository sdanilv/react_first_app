import React from "react";
import style from "./Chat.module.css";

const Chat = props => {
  // debugger;
  return <div className={style.chat}> {props.chat}</div>;
};

export default Chat;
