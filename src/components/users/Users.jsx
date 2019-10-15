import React from "react";
import User from "./user/User";
import style from "./Users.module.css";
import * as axios from "axios";
import avaIcon from "../../img/avatar.ico";

class Users extends React.Component {
  // goToPage(user, int) {
  //   axios
  //     .get(`https://social-network.samuraijs.com/api/1.0/users?page=2`)
  //     .then(result => {
  //       user.props.setUsers(result.data.items);
  //     });
  // }
  componentDidMount() {
    // debugger;

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?
        count=${this.props.countUsersInPage}
        &page=${this.props.currentPage}`
      )
      .then(result => {
        this.props.setUsers(result.data.items);
        this.props.setAllUsersCount(result.data.totalCount);
      })
      .catch(err => {
        // debugger;

        console.log(err);
      });
  }

  onPageClick = page => {
    debugger;
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.countUsersInPage}`
      )
      .then(result => {
        this.props.setUsers(result.data.items);
      });
  };
  render() {
    let currentPage = this.props.currentPage;
    let numbersPage = Math.ceil(
      this.props.allUsersCount / this.props.countUsersInPage
    );
    let arrayOfPages = [];

    for (let i = 1; i < numbersPage; i++) {
      arrayOfPages.push(i);
    }

    let pages = arrayOfPages.map((p, index) => {
      // debugger;
      if (p < 6)
        return (
          <button
            className={currentPage === p ? style.selectedPage : null}
            key={index}
            onClick={e => this.onPageClick(p)}>
            {p}
          </button>
        );
      if (p === arrayOfPages.length - 1)
        return (
          <span key={index}>
            <button>...</button>
            <button onClick={e => this.onPageClick(p)}>{p}</button>
          </span>
        );
      return "";
    });
    // debugger;
    let users = this.props.users.map(u => (
      <User
        key={u.id}
        avaImg={u.photos.small ? u.photos.small : avaIcon} // : "https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png"
        subscribed={u.followed}
        name={u.name}
        status={u.status}
        subs={() => this.props.subs(u.id)}
        unsubs={() => this.props.unsubs(u.id)}
      />
    ));

    return (
      <div>
        <div className={style.pagination}>{pages}</div>
        <div className={style.u}>{users}</div>
      </div>
    );
  }
}
export default Users;
