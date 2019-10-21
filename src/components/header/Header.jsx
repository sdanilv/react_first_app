import React from "react";
import style from "./Header.module.css";
import Ava from "../../common/Ava";

const Header = props => {
  // debugger;
  return (
    <div className={style.header}>
      <img
        src='https://s1.logaster.com/static/v3/img/products/logo.png'
        alt='abc'
      />
      <div className={style.topic}>Smile:</div>
      {!props.isSignIn ? (
        <>
          <button> SigIn</button>
          <button>Register</button>
        </>
      ) : (<>
        <div className={style.ava}>
          <Ava avaImg={props.avaImg}/>
        </div>
        <div className={style.login}>{props.login}</div></>
      )}
    </div>
  );
};

export default Header;
