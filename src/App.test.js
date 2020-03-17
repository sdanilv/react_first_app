import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import App from "./App";
import store from "./redux/storeRedux";
import {Provider} from "react-redux";

it("renders without crashing", () => {
    const div = document.createElement("div");
    render(
        <Provider store={store}>
            <App/>
        </Provider>,
        div
    );
    unmountComponentAtNode(div);
});
