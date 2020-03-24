import React, {FC} from "react";
import style from "./Dialogs.module.css";
import Dialog from "./dialog/Dialog";
import {DialogsProps} from "src/components/dialogs/DialogsContainer";
import {LastMessageType} from "redux/dialogsReducer/dialogsSelector";


const Dialogs: FC<DialogsProps> = props => {
    let dialogsElements = props.Messages.map((value: LastMessageType|null, index: number): JSX.Element|null => (
        value &&
        <Dialog key={index}
                id={value.id}
                name={value.name}
                lastMessage={value.lastMessage}
                ava={value.ava}/>
    ));

    return (
        <div>
            <h1>My dialogs</h1>
            <div className={style.dialogs}>
                {dialogsElements}
            </div>
        </div>
    );
};
export default Dialogs;
