import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import navbarReducer from "./navbarReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
  DialogsPage:dialogsReducer ,
  ProfilePage: profileReducer,
  Navbar: navbarReducer
});

let store = createStore(reducers);

export default store;
