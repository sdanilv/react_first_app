import React from "react";
import style from "./textarea.module.css";
import { AddChatAction, UpdateChatTextAreaAction } from "../../../redux/states";

const TextArea = props => {
  // debugger;
  let areaRef = React.createRef();
  let clickEvent = () => {
    // debugger;
    props.dispatcher(AddChatAction());
  };

  let areaKeyEvent = e => {
    // debugger;
    props.dispatcher(UpdateChatTextAreaAction(areaRef.current.value));
  };

  return (
    <div className={style.textarea}>
      {/* <textarea value={props.textArea} ref={areaRef} onKeyDown={areaKeyEvent}/> */}
      <textarea value={props.textArea} ref={areaRef} onChange={areaKeyEvent} />
      <button onClick={clickEvent}>Submit</button>
    </div>
  );
};

export default TextArea;
