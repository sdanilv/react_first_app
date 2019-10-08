import React from "react";
import style from "./App.module.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import { Route, BrowserRouter } from "react-router-dom";
import Dialogs from "./components/dialogs/dialogs";

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
          <Route
            path="/profile"
            render={() => (
              <Profile
                addPost={props.addPost}
                addLetter={props.addLetter}
                profile={props.state.Profile}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs dialogs={props.state.Dialogs.dialogs} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
