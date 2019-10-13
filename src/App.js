import React from "react";
import style from "./App.module.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import { Route, BrowserRouter } from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";

import UsersContainer from "./components/users/UsersContainer";

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
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
