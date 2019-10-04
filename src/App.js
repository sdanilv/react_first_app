import React from "react";
import style from "./App.css"
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";

const App = ()=>{
return(
<div className = "app-wrape">
  <Header />
  <Navbar />
  <div className={style.content}>
  <Profile />
  </div>
</div>

);
}

export default App;