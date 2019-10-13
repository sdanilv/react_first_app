import React from "react";
import User from "./user/User";
import style from "./Users.module.css"

const Users = props => {
  // debugger;
  console.log(style.u);
  let usersMap = props.users.map(u => (
    <User
      key={u.id}
      avaImg={u.avaImg}
      subscribe={u.subscribe}
      name={u.name}
      description={u.description}
      home={u.home}
      subs={()=>props.subs(u.id)}
      unsubs={()=>props.unsubs(u.id)}
    />
  ));

  return (<div className={style.u} >{ usersMap }</div>);
};

export default Users;
