import React from "react";
import avaIcon from "../../img/avatar.ico";
import style from "./Ava.module.css";

const Ava = props => {
  return (
    <img
      className={style.ava}
      src={props.avaImg ? props.avaImg : avaIcon}
      alt='userAva'
    />
  );
};

export default Ava;
