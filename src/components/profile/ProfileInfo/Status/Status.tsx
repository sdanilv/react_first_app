import React, {FC, useEffect, useState} from "react";
import style from "./Status.module.css"

type Props = { myStatus: string, isMe: boolean, setMyStatus: (newStatus: string) => void }
const Status: FC<Props> = ({myStatus, setMyStatus, isMe}) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(myStatus);

    const editModeToggle = (toggle: boolean) => {
        if (toggle) setEditMode(toggle);
        else {
            setEditMode(toggle);
            setMyStatus(status);
        }
    };

    useEffect(() => {
        setStatus(myStatus);
    }, [myStatus]);

    const onStatusUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value);
    };


    return (
        <div className={style.status}>
            {editMode ? (
                    <input
                        onChange={e => onStatusUpdate(e)}
                        autoFocus={true}
                        onBlur={() => editModeToggle(false)}
                        type='text'
                        value={status}
                    />) :
                (<span className={style.status}
                       onDoubleClick={() => isMe && editModeToggle(true)}>
            {status}
          </span>)}
        </div>
    );

};

export default Status;
