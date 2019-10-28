import React from "react";
import style from "./User.module.css";
import { NavLink } from "react-router-dom";

import ButtonLoader from "../../../common/ButtonLoader/ButtonLoader";
import Ava from "../../../common/Ava/Ava";
const User = props => {
  return (
    // key={u.userId}
    <div className={style.user}>
      <div>
        <NavLink to={`profile/${props.userId}`}>
          <div className={style.avaImg}>
            <Ava avaImg={props.avaImg} />
          </div>
        </NavLink>
      </div>
      {props.blockedSubButtons.some(u => u === props.userId) ? (
        <ButtonLoader />
      ) : (
        <div>
          {props.subscribed ? (
            <button
              className={style.subs}
              onClick={() => props.unsubs(props.userId)}>
              Subs
            </button>
          ) : (
            <button
              className={style.unsubs}
              onClick={() => props.subs(props.userId)}>
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
