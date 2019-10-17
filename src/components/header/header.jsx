import React from "react";
import style from "./Header.module.css";

const Header = props => {
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
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
