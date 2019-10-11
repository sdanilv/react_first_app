import React from "react"
import style from "./dialog.module.css"



const Dialog = (props) => {
    return (
        <div className={style.dialog}>
           <img src={props.ava} alt="dialogAva"/>
           <div className={style.name}> {props.name}</div>
           <div className={style.lastMesage}>{props.lastMessage}</div>
        </div>

    );
}
export default Dialog;