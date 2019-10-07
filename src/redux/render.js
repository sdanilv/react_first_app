import React from 'react';
import ReactDOM from 'react-dom';

import '../App.module.css';
import '../index.css';
import App from '../App.js';

import { addPost, addLetter} from './state';
import state from './state';

export let render = ()=>{
    ReactDOM.render(<App state={state}  addLetter={addLetter} addPost={addPost}/>, document.getElementById('root'));
    }