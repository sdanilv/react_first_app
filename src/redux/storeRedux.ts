import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import profileReducer from "./profileReducer/profileReducer";
import navbarReducer from "./navbarReducer/navbarReducer";
import dialogsReducer from "./dialogsReducer/dialogsReducer";
import usersReducer from "./usersReducer/usersReducer";
import authReduce from "./authReduce/authReduce";
import commonReducer from "./commonReducer/commonReducer";
import appReduce from "./appReducer/appReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const reducers  = combineReducers({
  DialogsPage: dialogsReducer,
  ProfilePage: profileReducer,
  Navbar: navbarReducer,
  Users: usersReducer,
  Auth: authReduce,
  Common: commonReducer,
  form: formReducer,
  App: appReduce
} );

export type  GlobalState = ReturnType<typeof reducers>  ;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
