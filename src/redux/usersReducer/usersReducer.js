import {UsersApi} from "../../api/api";
// import React from "react";
const SUBSCRIBE_USER = "SUBSCRIBE-USER";
const UNSUBSCRIBE_USER = "UNSUBSCRIBE-USER";
const SET_USERS = "SET-USER";
const CHANGE_PAGE = "CHANGE_PAGE";
const CHANGE_ALL_USERS_COUNT = "CHANGE_ALL_USERS_COUNT";
const CHANGE_PAGE_USERS_COUNT = "CHANGE_PAGE_USERS_COUNT";
const ADD_IN_BLOCK_BUTTONS = "ADD_IN_BLOCK_BUTTONS";
const REMOVE_FROM_BLOCK_BUTTONS = "REMOVE_IN_BLOCK_BUTTONS";
const SET_TOGGLE_LOADER = "SET_TOGGLE_LOADER";
const SET_KIT = "SET_KIT";

let initiationState = {
    users: [],
    allUsersCount: 0,
    countUsersInPage: 6,
    currentPage: 3,
    blockedSubButtons: [],
    loaded: false,
    kit: 1
};

let usersReducer = (state = initiationState, action) => {
    switch (action.type) {
        case SET_KIT:
            return {...state, kit: action.kit};
        case SUBSCRIBE_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return {...u, followed: true};
                    return u;
                })
            };
        case UNSUBSCRIBE_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) return {...u, followed: false};
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: action.users};
        case CHANGE_PAGE:
            return {...state, currentPage: action.numberPage};
        case CHANGE_ALL_USERS_COUNT:
            return {...state, allUsersCount: action.allUsersCount};
        case CHANGE_PAGE_USERS_COUNT:
            return {...state, countUsersInPage: action.countUsersInPage};
        case ADD_IN_BLOCK_BUTTONS:
            return {
                ...state,
                blockedSubButtons: [...state.blockedSubButtons, action.blockedButton]
            };
        case REMOVE_FROM_BLOCK_BUTTONS:
            return {
                ...state,
                blockedSubButtons: state.blockedSubButtons.filter(
                    button => button !== action.blockedButton
                )
            };
        case SET_TOGGLE_LOADER:
            return {...state, loaded: action.toggle};
        default:
            return state;
    }
};

export const setKit = kit => ({
    type: SET_KIT,
    kit
});
export let subsAC = userId => ({
    type: SUBSCRIBE_USER,
    userId
});
export let unsubsAC = userId => ({
    type: UNSUBSCRIBE_USER,
    userId
});
export let setUsers = users => ({
    type: SET_USERS,
    users
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
export let addInBlockButtons = button => ({
    type: ADD_IN_BLOCK_BUTTONS,
    blockedButton: button
});
export let removeFromBlockButtons = button => ({
    type: REMOVE_FROM_BLOCK_BUTTONS,
    blockedButton: button
});
export let loading = toggle => ({
    type: SET_TOGGLE_LOADER,
    toggle
});

export let getUsers = (currentPage, countUsersInPage) => dispatch => {
    dispatch(loading(true));
    UsersApi.getUsers(currentPage, countUsersInPage).then(result => {
        dispatch(setUsers(result.items));
        dispatch(setAllUsersCount(result.totalCount));
        dispatch(loading(false));
    });
};

export let subscribe = userId => dispatch => {
    dispatch(addInBlockButtons(userId));
    UsersApi.follow(userId).then(response => {
        dispatch(removeFromBlockButtons(userId));
        if (response.data.resultCode === 0) return dispatch(subsAC(userId));
    });
};

export let unsubscribe = userId => dispatch => {
    dispatch(addInBlockButtons(userId));
    UsersApi.unfollow(userId).then(response => {
        dispatch(removeFromBlockButtons(userId));
        if (response.data.resultCode === 0) return dispatch(unsubsAC(userId));
    });
};

export default usersReducer;
