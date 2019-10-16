import React from "react";
import User from "./user/User";
import style from "./Users.module.css";

import avaIcon from "../../img/avatar.ico";

const Users = props => {
  // debugger;
  let currentPage = props.currentPage;
  let numbersPage = Math.ceil(props.allUsersCount / props.countUsersInPage);
  let arrayOfPages = [];

  for (let i = 1; i < numbersPage; i++) {
    arrayOfPages.push(i);
  }
  let button = p => {
    return (
      <button
        className={currentPage === p ? style.selectedPage : null}
        key={p}
        onClick={e => props.onPageClick(p)}>
        {p}
      </button>
    );
  };
  let pages = arrayOfPages.map(p => {
    if ((p >= 1 && p <= 5) || p === arrayOfPages.length) {
      return button(p);
    }
    if (p === arrayOfPages.length - 1) return <button>...</button>;
    return "";
  });
  // debugger;
  let users = props.users.map(u => (
    <User
      key={u.id}
      avaImg={u.photos.small ? u.photos.small : avaIcon}
      subscribed={u.followed}
      name={u.name}
      status={u.status}
      subs={() => props.subs(u.id)}
      unsubs={() => props.unsubs(u.id)}
    />
  ));

  return (
    <div>
      <div className={style.pagination}>{pages}</div>
      <div className={style.u}>{users}</div>
    </div>
  );
};
export default Users;
