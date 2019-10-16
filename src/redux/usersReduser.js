// import React from "react";

const SUBSCRIBE_USER = "SUBSCRIBE-USER";
const UNSUBSCRIBE_USER = "UNSUBSCRIBE-USER";
const SET_USERS = "SET-USER";
const CHANGE_PAGE = "CHANGE_PAGE";
const CHANGE_ALL_USERS_COUNT = "CHANGE_ALL_USERS_COUNT";
const CHANGE_PAGE_USERS_COUNT = "CHANGE_PAGE_USERS_COUNT";

let initiationState = {
  users: [],
  allUsersCount: 0,
  countUsersInPage: 6,
  currentPage: 3
};

// debugger;

let usersReduser = (state = initiationState, action) => {
  // debugger;
  switch (action.type) {
    case SUBSCRIBE_USER:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) return { ...u, followed: true };
          return u;
        })
      };
    case UNSUBSCRIBE_USER:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) return { ...u, followed: false };
          return u;
        })
      };
    case SET_USERS:
      // debugger;
      return { ...state, users: action.users };
    case CHANGE_PAGE:
      return { ...state, currentPage: action.numberPage };
    case CHANGE_ALL_USERS_COUNT:
      return { ...state, allUsersCount: action.allUsersCount };
    case CHANGE_PAGE_USERS_COUNT:
      return { ...state, countUsersInPage: action.countUsersInPage };
    default:
      return state;
  }
};

export let subs = userId => ({
  type: SUBSCRIBE_USER,
  userId: userId
});
export let unsubs = userId => ({
  type: UNSUBSCRIBE_USER,
  userId: userId
});
export let setUsers = users => ({
  type: SET_USERS,
  users: users
});
export let setCurrentPage = number => ({
  type: CHANGE_PAGE,
  numberPage: number
});
export let setAllUsersCount = count => ({
  type: CHANGE_ALL_USERS_COUNT,
  allUsersCount: count
});
export let setCountUsersInPage = count => ({
  type: CHANGE_PAGE_USERS_COUNT,
  countUsersInPage: count
});

export default usersReduser;
