"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = require("react-dom");
const App_js_1 = __importDefault(require("./App.js"));
const storeRedux_1 = __importDefault(require("./redux/storeRedux"));
const serviceWorker = __importStar(require("./serviceWorker"));
const react_redux_1 = require("react-redux");
react_dom_1.render(react_1.default.createElement(react_redux_1.Provider, { store: storeRedux_1.default },
    react_1.default.createElement(App_js_1.default, null)), document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//ToDo register changhe to unregister!!!
serviceWorker.register();
//# sourceMappingURL=index.js.map