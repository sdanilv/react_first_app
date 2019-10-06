import React from "react";
import style from "./App.module.css";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import { Route, BrowserRouter } from "react-router-dom";
import Dialogs from "./components/dialogs/dialogs";

const App = (props) => {

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
          <Route path="/profile" render={()=><Profile posts = {props.states.posts} />} />
          <Route exact path="/dialogs" render={()=><Dialogs dialogs = {props.states.dialogs} chats={props.states.chats}/>} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
