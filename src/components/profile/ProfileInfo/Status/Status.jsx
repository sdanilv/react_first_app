import React, { useEffect, useState } from "react";

const Status = ({myStatus, setMyStatus, isMe}) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(myStatus);

  const editModeToggle = toggle => {
    if ( toggle) setEditMode(toggle);
    else {
      setEditMode(toggle);
      setMyStatus(status);
    }
  };

  useEffect(() => {
    setStatus(myStatus);
  }, [myStatus]);

  const onStatusUpdate = e => {
    setStatus(e.target.value);
  };

  if (editMode)
    return (
      <input
        onChange={e => onStatusUpdate(e)}
        autoFocus={true}
        onBlur={() => editModeToggle(false)}
        type='text'
        value={status}
      />
    );
  return <span onDoubleClick={() => isMe && editModeToggle(true)}>{status}</span>;
};

export default Status;
