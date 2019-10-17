import React from "react";
import style from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import { Route, BrowserRouter } from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileComponent from "./components/profile/ProfileComponent";
import HeaderContainer from "./components/header/HeaderContainer";

const App = props => {
  // debugger;
  return (
    <BrowserRouter>
      <div className={style.appGrid}>
        <div className={style.header}>
          <HeaderContainer />
        </div>
        <div className={style.sidebar}>
          <Navbar />
        </div>
        <div className={style.content}>
          <Route key='user' path='/users' render={() => <UsersContainer />} />
          <Route
            key='profile'
            path='/profile/:userId?'
            render={() => <ProfileComponent />}
          />
          <Route
            key='dialogs'
            path='/dialogs'
            render={() => <DialogsContainer />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
