import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import navbarReducer from "./navbarReducer";
import dialogsReducer from "./dialogsReducer";
import usersReduser from "./usersReduser";

let reducers = combineReducers({
  DialogsPage:dialogsReducer ,
  ProfilePage: profileReducer,
  Navbar: navbarReducer,
  Users: usersReduser
});

let store = createStore(reducers);

export default store;
