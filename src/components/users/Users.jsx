import React from "react";
import User from "./user/User";
import style from "./Users.module.css";
import * as axios from "axios";

// let usersMap = [];
// let pagesCount;
class Users extends React.Component {
  // debugger;

  goToPage(user, int) {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=2`)
      .then(result => {
        // debugger;
        user.props.setUsers(result.data.items);
        // pagesCount = Math.ceil(result.data.totalCount / 3);
      });
  }
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users?count=3")
      .then(result => {
        this.props.setUsers(result.data.items);
        // pagesCount = Math.ceil(result.data.totalCount / 3);
        // debugger;
      });
    // .catch(err => {
    //   console.log(err);
    // });
  }

  render() {
    // debugger;
    let users = this.props.users.map(u => (
      <User
        key={u.id}
        avaImg={
          u.photos.small
            ? u.photos.small
            : "https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png"
        }
        subscribed={u.followed}
        name={u.name}
        status={u.status}
        // home={u.home}
        subs={() => this.props.subs(u.id)}
        unsubs={() => this.props.unsubs(u.id)}
      />
    ));

    return (
      <div>
        {/* <div className={style.pagination}> */}
        <button onClick={this.goToPage}>2</button>
        {/* </div> */}
        <div className={style.u}>{users}</div>
      </div>
    );
  }
}
export default Users;
