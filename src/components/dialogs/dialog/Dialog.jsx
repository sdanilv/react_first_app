import React from "react";
import {NavLink} from "react-router-dom"
import style from "./Dialog.module.css"
const Dialog = props => {


    return (
        <NavLink to={`/dialogs/${props.id}`} className={style.link}>
            <div className={style.dialog}>
                <img src={props.ava} alt='dialogAva'/>
                <div className={style.name}> {props.name}</div>
                <div className={style.lastMessages}>{props.lastMessages}</div>

            </div>
        </NavLink>
    );
};
export default Dialog;
