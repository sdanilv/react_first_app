import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer/profileReducer";
import navbarReducer from "./navbarReducer/navbarReducer";
import dialogsReducer from "./dialogsReducer/dialogsReducer";
import usersReducer from "./usersReducer/usersReducer";
import authReduce from "./authReduce/authReduce.ts";
import commonReducer from "./commonReducer/commonReducer";
import appReduce from "./appReducer/appReducer.ts";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    DialogsPage: dialogsReducer,
    ProfilePage: profileReducer,
    Navbar: navbarReducer,
    Users: usersReducer,
    Auth: authReduce,
    Common: commonReducer,
    form: formReducer,
    App: appReduce
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
