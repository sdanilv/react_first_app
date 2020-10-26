import { GlobalState } from "redux/storeRedux";
import { UsersStateType, UserType } from "redux/usersReducer/usersReducer";

export const getUsers = (state: GlobalState): Array<UserType> =>
  state.Users.users;
export const getAllUsersCount = (state: GlobalState): number =>
  state.Users.allUsersCount;
export const getCountUsersInPage = (state: GlobalState): number =>
  state.Users.countUsersInPage;
export const getCurrentPage = (state: GlobalState): number =>
  state.Users.currentPage;
export const getBlockedSubButtons = (state: GlobalState): Array<number> =>
  state.Users.blockedSubButtons;
export const getLoaded = (state: GlobalState): boolean => state.Users.loaded;
export const getKit = (state: GlobalState): number => state.Users.kit;

export const getAllUserParams = (state: GlobalState): UsersStateType =>
  state.Users;
