import React from "react";
import Users from "./Users";
import PageLoader from "../../common/PageLoader/PageLoader";
import { connect } from "react-redux";
import {
 subscribe,
 unsubscribe,
  setCurrentPage,
  addInBlockButtons,
  getUsers,
  removeFromBlockButtons
} from "../../redux/usersReduser";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.countUsersInPage);
  }

  onPageClick = page => {
    // debugger;
    this.props.setCurrentPage(page);
    this.props.getUsers(page, this.props.countUsersInPage);
  };
  



  render() {

    return (
      <>
      {this.props.loaded?
      <PageLoader />:
        <Users
          allUsersCount={this.props.allUsersCount}
          countUsersInPage={this.props.countUsersInPage}
          currentPage={this.props.currentPage}
          onPageClick={this.onPageClick}
          users={this.props.users}
          subs={this.props.subscribe}
          unsubs={this.props.unsubscribe}
          blockedSubButtons={this.props.blockedSubButtons}
          // setUsers={this.props.setUsers}
          // setCurrentPage={this.props.setCurrentPage}
          // setAllUsersCount={this.props.setAllUsersCount}
          // setCountUsersInPage={this.props.setCountUsersInPage}
        />}
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
    blockedSubButtons: state.Users.blockedSubButtons,
    loaded: state.Users.loaded
  };
};

export default compose(withAuthRedirect, connect(
  mapStateProper,
  {
    subscribe,
    unsubscribe,    
    setCurrentPage,
    addInBlockButtons,
    removeFromBlockButtons,
    getUsers
  }
)) (UsersContainer);
