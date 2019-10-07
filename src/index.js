import * as serviceWorker from './serviceWorker';
import {render} from './redux/render';

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//ToDo register changhe to unregister!!!
serviceWorker.register();
