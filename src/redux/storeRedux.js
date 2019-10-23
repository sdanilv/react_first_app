import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import navbarReducer from "./navbarReducer";
import dialogsReducer from "./dialogsReducer";
import usersReduser from "./usersReduser";
import authReduce from "./authReduce";
import thunk from "redux-thunk";
import commonReducer from "./commonReducer";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  DialogsPage: dialogsReducer,
  ProfilePage: profileReducer,
  Navbar: navbarReducer,
  Users: usersReduser,
  Auth: authReduce,
  Common: commonReducer,
  form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;
