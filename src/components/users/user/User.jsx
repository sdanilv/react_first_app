import React from "react";
import style from "./User.module.css"
const User = props => {
  // debugger;
  let unsubscribe = () => {
    // debugger;
    props.unsubs();
  };
  let subscribe = () => {
    props.subs();
  };

  return (
    // key={u.userId}
    <div className={style.user}>
      <div>
      <img src={props.avaImg} alt="userAva"/></div>
      <div>{props.subscribe ? (
        <button onClick={unsubscribe}>Subscribed</button>
      ) : (
        <button onClick={subscribe}>Unsubscribed</button>
      )}</div>
      <div>{props.home}</div>
      <div>{props.name}</div>
      <div>{props.description}</div>
    </div>
  );
};

export default User;
