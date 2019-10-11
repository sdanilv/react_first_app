import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import store from "./redux/storeRedux";
import * as serviceWorker from "./serviceWorker";
import {Provider} from 'react-redux';

let renderDOMTree = state => {
  // debugger;

  ReactDOM.render(
  <Provider store={store}>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </Provider>,
    document.getElementById("root")
  );
  // debugger;
};

renderDOMTree(store.getState());
store.subscribe(() => {
  renderDOMTree(store.getState());
});
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//ToDo register changhe to unregister!!!
serviceWorker.register();
