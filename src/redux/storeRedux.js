import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer/profileReducer";
import navbarReducer from "./navbarReducer/navbarReducer";
import dialogsReducer from "./dialogsReducer/dialogsReducer";
import usersReduser from "./usersReduser/usersReduser";
import authReduce from "./authReduce/authReduce";
import commonReducer from "./commonReducer/commonReducer";
import appReduce from "./appReducer/appReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  DialogsPage: dialogsReducer,
  ProfilePage: profileReducer,
  Navbar: navbarReducer,
  Users: usersReduser,
  Auth: authReduce,
  Common: commonReducer,
  form: formReducer,
  App: appReduce
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
