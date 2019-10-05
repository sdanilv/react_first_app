import React from "react"
import style from "./dialogs.module.css"

import Dialog from "./dialog/dialog"

let dialogs = [{name : "Boris",  lastMessage : "Utah", img:"https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"},
{name : "Avis",  lastMessage : "96548", img:"https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"},
{name : "Madie",  lastMessage : "Somalia instruction set Interactions", img:"https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg", img:"https://s3.amazonaws.com/uifaces/faces/twitter/kiwiupover/128.jpg"},
{name : "Nathen",  lastMessage : "Marketing", img:"https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"},
{name : "Orville",  lastMessage : "compelling engage emulation connecting Aruban Guilder", img:"https://s3.amazonaws.com/uifaces/faces/twitter/gt/128.jpg"} ];
let dialogsElements  = dialogs.map(d=> <Dialog name={d.name} lastMessage={d.lastMessage} ava={d.img}/>);

const Dialogs = () => {
    return (
        <div><h1>My dialogs</h1>
        <div className={style.dialogs}>
            {dialogsElements}

            </div>
        </div>
    );
}
export default Dialogs;