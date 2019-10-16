import React from "react";
import * as axios from "axios";
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
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.countUsersInPage}&page=${this.props.currentPage}`
      )
      .then(result => {
        this.props.setUsers(result.data.items);
        this.props.setAllUsersCount(result.data.totalCount);
        // debugger;
      })
      .catch(err => {
        console.log(err);
      });
  }

  onPageClick = page => {
    // debugger;
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
    return (
      <>
        <Users
          allUsersCount={this.props.allUsersCount}
          countUsersInPage={this.props.countUsersInPage}
          currentPage={this.props.currentPage}
          onPageClick={this.onPageClick}
          users={this.props.users}
          subs={this.props.subs}
          unsubs={this.props.unsubs}
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
