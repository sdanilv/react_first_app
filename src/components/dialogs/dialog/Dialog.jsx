import React from "react";
import {NavLink} from "react-router-dom"
import style from "../Dialogs.module.css"
const Dialog = props => {

    const chatSubmit = formData => {
        props.destroy("dialogs");
    };

    return (
        <NavLink to={`/dialogs/${props.id}`}>
            <div className={style.dialog}>
                <img src={props.ava} alt='dialogAva'/>
                <div className={style.name}> {props.name}</div>
                <div className={style.lastMessages}>{props.lastMessages}</div>
                {/*<TextArea onSubmit={chatSubmit}/>*/}
            </div>
        </NavLink>
    );
};
export default Dialog;
