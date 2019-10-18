import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  subs,
  unsubs,
  setUsers,
  setAllUsersCount,
  setCurrentPage,
  setCountUsersInPage,
  addInBlockButtons,
  removeFromBlockButtons
} from "../../redux/usersReduser";
import { UsersApi } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    UsersApi.getUsers(this.props.currentPage, this.props.countUsersInPage).then(
      result => {
        this.props.setUsers(result.items);
        this.props.setAllUsersCount(result.totalCount);
      }
    );
  }

  onPageClick = page => {
    // debugger;
    this.props.setCurrentPage(page);
    UsersApi.getUsers(page, this.props.countUsersInPage).then(result => {
      this.props.setUsers(result.items);
    });
  };

  subscribe = userId => {
    this.props.addInBlockButtons(userId);
    UsersApi.follow(userId).then(response => {
      this.props.removeFromBlockButtons(userId);
      if (response.data.resultCode === 0) return this.props.subs(userId);
    });
  };

  unsubscribe = userId => {
    this.props.addInBlockButtons(userId);
    UsersApi.unfollow(userId).then(response => {
      this.props.removeFromBlockButtons(userId);
      if (response.data.resultCode === 0) return this.props.unsubs(userId);
      // debugger;
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
          blockedSubButtons={this.props.blockedSubButtons}
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
    currentPage: state.Users.currentPage,
    blockedSubButtons: state.Users.blockedSubButtons
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
    setCountUsersInPage,
    addInBlockButtons,
    removeFromBlockButtons
  }
)(UsersContainer);
