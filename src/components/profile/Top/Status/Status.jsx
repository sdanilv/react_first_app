import React, { useEffect, useState } from "react";

const Status = props => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const editModeToggle = toggle => {
    if (toggle) setEditMode(toggle);
    else {
      setEditMode(toggle);
      props.setMyStatus(status);
    }
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

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
  return <span onDoubleClick={e => editModeToggle(true)}>{status}</span>;
};

export default Status;
