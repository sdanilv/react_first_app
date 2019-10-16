import React from "react";
import style from "./App.module.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

import { Route, BrowserRouter } from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";

import UsersContainer from "./components/users/UsersContainer";
import ProfileComponent from "./components/profile/ProfileComponent";

const App = props => {
  // debugger;
  return (
    <BrowserRouter>
      <div className={style.appGrid}>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.sidebar}>
          <Navbar />
        </div>
        <div className={style.content}>
          <Route key='user' path='/users' render={() => <UsersContainer />} />
          <Route
            key='profile'
            path='/profile'
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
