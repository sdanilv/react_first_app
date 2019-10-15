// import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  subs,
  unsubs,
  setUser,
  setAllUsersCount,
  setCurrentPage,
  setCountUsersInPage
} from "../../redux/usersReduser";

let mapStateProper = state => {
  return {
    users: state.Users.users,
    allUsersCount: state.Users.allUsersCount,
    countUsersInPage: state.Users.countUsersInPage,
    currentPage: state.Users.currentPage
  };
};
let mapDispatchToProper = dispatch => {
  return {
    subs: userId => {
      dispatch(subs(userId));
    },
    unsubs: userId => {
      dispatch(unsubs(userId));
    },
    setUsers: users => {
      dispatch(setUser(users));
    },
    setAllUsersCount: count => {
      dispatch(setAllUsersCount(count));
    },
    setCurrentPage: count => {
      dispatch(setCurrentPage(count));
    },
    setCountUsersInPage: count => {
      dispatch(setCountUsersInPage(count));
    }
  };
};

export default connect(
  mapStateProper,
  mapDispatchToProper
)(Users);
