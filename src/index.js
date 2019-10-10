import React from "react";
import ReactDOM from "react-dom";
// import "./App.module.css";
// import "./index.css";
import App from "./App.js";
import store from "./redux/storeRedux";
import * as serviceWorker from "./serviceWorker";

let renderDOMTree = state => {
  // debugger;

  ReactDOM.render(
    
    <App
      state={state}
      dispatch={store.dispatch.bind(store)}
    />,

    document.getElementById("root")
  );
// debugger;

};

renderDOMTree(store.getState());
store.subscribe(()=>{
  renderDOMTree(store.getState());
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//ToDo register changhe to unregister!!!
serviceWorker.register();
