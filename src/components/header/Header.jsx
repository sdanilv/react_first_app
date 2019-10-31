import React from "react";
import style from "./Header.module.css";
import Ava from "../../common/Ava/Ava";
import { NavLink } from "react-router-dom";

const Header = props => {
  let onLogout = () => {
    props.logout();
  };

  return (
    <div className={style.header}>
      <img
        src='https://s1.logaster.com/static/v3/img/products/logo.png'
        alt='abc'
      />
      <div className={style.topic}>Smile:</div>
      {!props.isSignIn ? (
        <>
          <NavLink to='/login'>
            <button> SigIn</button>
          </NavLink>
          {/* <button>Register</button> */}
        </>
      ) : (
        <>
          <div className={style.ava}>
            <Ava avaImg={props.avaImg} />
          </div>
          <div className={style.login}>{props.login}</div>

          <NavLink to='/login'>
            <button onClick={onLogout}>Logout</button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Header;
