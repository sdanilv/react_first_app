import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from "./profileReducer";
import navbarReducer from "./navbarReducer";
import dialogsReducer from "./dialogsReducer";
import usersReduser from "./usersReduser";
import authReduce from "./authReduce";
import thunk from "redux-thunk";
import commonReducer from "./commonReducer";
import { reducer as formReducer } from "redux-form";
import appReduce from "./appReducer";

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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
