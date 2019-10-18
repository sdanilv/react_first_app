import React from "react";
import style from "./User.module.css";
import { NavLink } from "react-router-dom";

import ButtonLoader from "../../../common/ButtonLoader";
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
        <NavLink to={`profile/${props.userId}`}>
          <img className={style.avaImg} src={props.avaImg} alt='userAva' />
        </NavLink>
      </div>
      {props.blockedSubButtons.some(u => u === props.userId) ? (
        <ButtonLoader />
      ) : (
        <div>
          {props.subscribed ? (
            <button className={style.subs} onClick={unsubscribe}>
              Subs
            </button>
          ) : (
            <button className={style.unsubs} onClick={subscribe}>
              Unsubs
            </button>
          )}
        </div>
      )}
      <div>{props.home}</div>
      <div>{props.name}</div>
      <div>{props.description}</div>
    </div>
  );
};

export default User;
