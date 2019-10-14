// const initiationState = {
//   users: [
//     {
//       id: 1,
//       avaImg:
//         "https://s3.amazonaws.com/uifaces/faces/twitter/davidmerrique/128.jpg",
//       subscribe: false,
//       name: "Denis",
//       description: "Love cofee",
//       home: "Ukraine, Kiev"
//     },
//     {
//       id: 2,
//       avaImg:
//         "https://s3.amazonaws.com/uifaces/faces/twitter/raphaelnikson/128.jpg",
//       subscribe: true,
//       name: "Jed",
//       description: "Love cofee",
//       home: "Ukraine, Kiev"
//     },
//     {
//       id: 3,
//       avaImg:
//         "https://s3.amazonaws.com/uifaces/faces/twitter/iamkeithmason/128.jpg",
//       subscribe: false,
//       name: "Rasheed",
//       description: "Love cofee",
//       home: "Ukraine, Kiev"
//     }
//   ]
// };
// import React from "react";

const SUBSCRIBE_USER = "SUBSCRIBE-USER";
const UNSUBSCRIBE_USER = "UNSUBSCRIBE-USER";
const SET_USERS = "SET-USER";

let initiationState = {
  users: [
    // {
    //   name: "gzq44726",
    //   id: 3870,
    //   uniqueUrlName: null,
    //   photos: {
    //     small: null,
    //     large: null
    //   },
    //   status: null,
    //   followed: false
    // }
  ]
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
