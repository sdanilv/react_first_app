// import React from "react";
const SUBSCRIBE_USER = "SUBSCRIBE-USER";
const UNSUBSCRIBE_USER = "UNSUBSCRIBE-USER";
const SET_USERS = "GET-USER";
const initiationState = {
  users: [
    {
      id: 1,
      avaImg:
        "https://s3.amazonaws.com/uifaces/faces/twitter/davidmerrique/128.jpg",
      subscribe: false,
      name: "Denis",
      description: "Love cofee",
      home: "Ukraine, Kiev"
    },
    {
      id: 2,
      avaImg:
        "https://s3.amazonaws.com/uifaces/faces/twitter/raphaelnikson/128.jpg",
      subscribe: true,
      name: "Jed",
      description: "Love cofee",
      home: "Ukraine, Kiev"
    },
    {
      id: 3,
      avaImg:
        "https://s3.amazonaws.com/uifaces/faces/twitter/iamkeithmason/128.jpg",
      subscribe: false,
      name: "Rasheed",
      description: "Love cofee",
      home: "Ukraine, Kiev"
    }
  ]
};
let usersReduser = (state = initiationState, action) => {
  // debugger;
  switch (action.type) {
    
    case SUBSCRIBE_USER:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) return { ...u, subscribe: true };
          return u;
        })
      };
    case UNSUBSCRIBE_USER:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) return { ...u, subscribe: false };
          return u;
        })
      };
    case SET_USERS:
      return { ...state, users: action.users };
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
export let setUser = users => ({
  type: SET_USERS,
  users: users
});

export default usersReduser;
