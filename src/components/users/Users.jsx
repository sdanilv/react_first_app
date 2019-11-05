import React from "react";
import User from "./user/User";
import style from "./Users.module.css";
import Pagination from "../../common/Pagination/Pagination";

const Users = props => {
  let users = props.users.map(u => (
    <User
      key={u.id}
      userId={u.id}
      avaImg={u.photos.small}
      subscribed={u.followed}
      name={u.name}
      status={u.status}
      subs={props.subs}
      unsubs={props.unsubs}
      blockedSubButtons={props.blockedSubButtons}
    />
  ));

  return (
    <div>
      <Pagination
        currentPage={props.currentPage}
        numbersPage={Math.ceil(props.allUsersCount / props.countUsersInPage)}
        onPageClick={props.onPageClick}
      />
      <div className={style.u}>{users}</div>
    </div>
  );
};
export default Users;
