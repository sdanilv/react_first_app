import React from "react"
import style from "./dialogs.module.css"

import Dialog from "./dialog/dialog"



const Dialogs = (props) => {
    let dialogsElements  = props.dialogs.map(d=> <Dialog name={d.name} lastMessage={d.lastMessage} ava={d.img}/>);
    return (
        <div><h1>My dialogs</h1>
        <div className={style.dialogs}>
            {dialogsElements}

            </div>
        </div>
    );
}
export default Dialogs;