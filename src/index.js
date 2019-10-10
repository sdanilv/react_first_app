import React from "react";
import ReactDOM from "react-dom";
// import "./App.module.css";
// import "./index.css";
import App from "./App.js";
import store from "./redux/states.js";
import * as serviceWorker from "./serviceWorker";


let renderDOMTree = state => {

  ReactDOM.render(
    
    <App
      state={state}
      dispatcher={store.dispatcher.bind(store)}
      
    />,

    document.getElementById("root")
  );
};

renderDOMTree(store.getState());
store.setEvent(renderDOMTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//ToDo register changhe to unregister!!!
serviceWorker.register();
