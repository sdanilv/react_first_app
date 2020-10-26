import React, { FC } from "react";
import style from "./Header.module.css";
import Ava from "../../common/Ava/Ava";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  getIsSignIn,
  getMyId,
  getMyLogin,
} from "redux/authReduce/authSelector";
import { getMySmallAvatar } from "redux/profileReducer/profileSelector";
import { logout } from "redux/authReduce/authReduce";

const Header: FC = () => {
  const dispatch = useDispatch();
  let onLogout = () => {
    dispatch(logout());
  };
  const isSignIn = useSelector(getIsSignIn);
  const myId = useSelector(getMyId);
  const login = useSelector(getMyLogin);
  const avaImg = useSelector(getMySmallAvatar);

  return (
    <div className={style.header}>
      <img
        src="https://s1.logaster.com/static/v3/img/products/logo.png"
        alt="abc"
      />
      <div className={style.topic}>Smile:</div>
      {!isSignIn ? (
        <>
          <NavLink to="/login">
            <button> SigIn</button>
          </NavLink>
          {/* <button>Register</button> */}
        </>
      ) : (
        <>
          <NavLink to={`/profile/${myId}`}>
            <div className={style.ava}>
              <Ava avaImg={avaImg} />
            </div>
          </NavLink>
          <div className={style.login}>{login}</div>
          <NavLink to="/login">
            <button onClick={onLogout}>Logout</button>
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Header;
