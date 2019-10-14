// import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { subs, unsubs } from "../../redux/usersReduser";

let mapStateProper = state => {
  return {users: state.Users.users};
};
let mapDispatchToProper = dispatch => {
  return {
    subs: userId => {
      dispatch(subs(userId));
    },
    unsubs: userId => {
      dispatch(unsubs(userId));
    }
  };
};

export default connect(
  mapStateProper,
  mapDispatchToProper
)(Users);
