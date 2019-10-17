import React from "react";
import axios from "axios";
import Users from "./Users";
import { connect } from "react-redux";
import {
  subs,
  unsubs,
  setUsers,
  setAllUsersCount,
  setCurrentPage,
  setCountUsersInPage
} from "../../redux/usersReduser";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUsersInPage}&page=${this.props.currentPage}`,
        { withCredentials: true }
      )
      .then(result => {
        this.props.setUsers(result.data.items);
        this.props.setAllUsersCount(result.data.totalCount);
      })
      .catch(err => {
        console.log(err);
      });
  }

  subscribe = userId => {
    axios
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {},
        {
          withCredentials: true,
          headers: { "API-KEY": "ade57208-42e1-4033-bb19-07633193cdde" }
        }
      )
      .then(response => {
        if (response.data.resultCode === 0) return this.props.subs(userId);
      });
  };

  unsubscribe = userId => {
    axios
      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
        withCredentials: true,
        headers: { "API-KEY": "ade57208-42e1-4033-bb19-07633193cdde" }
      })
      .then(response => {
        if (response.data.resultCode === 0) return this.props.unsubs(userId);
      });
  };

  onPageClick = page => {
    // debugger;
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.countUsersInPage}`,
        { withCredential: true }
      )
      .then(result => {
        this.props.setUsers(result.data.items);
      });
  };
  render() {
    return (
      <>
        <Users
          allUsersCount={this.props.allUsersCount}
          countUsersInPage={this.props.countUsersInPage}
          currentPage={this.props.currentPage}
          onPageClick={this.onPageClick}
          users={this.props.users}
          subs={this.subscribe}
          unsubs={this.unsubscribe}
          // setUsers={this.props.setUsers}
          // setCurrentPage={this.props.setCurrentPage}
          // setAllUsersCount={this.props.setAllUsersCount}
          // setCountUsersInPage={this.props.setCountUsersInPage}
        />
      </>
    );
  }
}

let mapStateProper = state => {
  return {
    users: state.Users.users,
    allUsersCount: state.Users.allUsersCount,
    countUsersInPage: state.Users.countUsersInPage,
    currentPage: state.Users.currentPage
  };
};

export default connect(
  mapStateProper,
  {
    subs,
    unsubs,
    setUsers,
    setAllUsersCount,
    setCurrentPage,
    setCountUsersInPage
  }
)(UsersContainer);
