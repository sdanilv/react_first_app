import React from "react";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Profile from "./components/profile";

const App = ()=>{
return(
<div className = "app-wrape">
  <Header />
  <Navbar />
  <Profile />
</div>

);
}

export default App;